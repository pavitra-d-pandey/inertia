package handlers

import (
	"bytes"
	"context"
	"crypto/sha1"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"mime/multipart"
	"net/http"
	"net/url"
	"strconv"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"inertia-backend/internal/config"
	"inertia-backend/internal/models"
)

type Handler struct {
	DB     *mongo.Database
	Config config.Config
}

func New(database *mongo.Database, cfg config.Config) *Handler {
	return &Handler{DB: database, Config: cfg}
}

func (h *Handler) RegisterRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/landing", h.getLanding)
		api.GET("/events", h.getEvents)
		api.GET("/gallery", h.getGallery)
		api.GET("/faqs", h.getFaqs)
		api.GET("/workshops", h.getWorkshops)
		api.GET("/team", h.getTeam)
		api.GET("/culture/events", h.getCulturalEvents)

		api.POST("/workshops/register", h.registerWorkshop)
		api.POST("/robo-race/register", h.registerRoboRace)

		api.POST("/hackathon/teams", h.createTeam)
		api.POST("/hackathon/teams/join", h.joinTeam)

		admin := api.Group("/admin")
		admin.Use(h.adminAuth)
		admin.POST("/upload", h.uploadImage)
		admin.POST("/glimpse", h.saveGlimpse)
		admin.POST("/team", h.saveTeamMember)
		admin.POST("/culture-event", h.saveCulturalEvent)
		admin.GET("/registrations/workshops", h.getWorkshopRegistrations)
		admin.GET("/registrations/robo-race", h.getRoboRegistrations)
		admin.GET("/registrations/hackathon", h.getHackathonRegistrations)
	}
}

func (h *Handler) ctx() (context.Context, context.CancelFunc) {
	return context.WithTimeout(context.Background(), 8*time.Second)
}

func (h *Handler) nextID(ctx context.Context, collection string) (int64, error) {
	var last struct {
		ID int64 `bson:"id"`
	}
	err := h.DB.Collection(collection).FindOne(ctx, bson.D{}, options.FindOne().SetSort(bson.D{{Key: "id", Value: -1}})).Decode(&last)
	if err == mongo.ErrNoDocuments {
		return 1, nil
	}
	if err != nil {
		return 0, err
	}
	return last.ID + 1, nil
}

func (h *Handler) getLanding(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	var content models.LandingContent
	err := h.DB.Collection("landing_content").FindOne(ctx, bson.D{}).Decode(&content)
	if err != nil {
		c.JSON(http.StatusOK, models.LandingContent{})
		return
	}
	if content.Highlights == nil {
		content.Highlights = []string{}
	}
	c.JSON(http.StatusOK, content)
}

func (h *Handler) getEvents(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("events").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "sortOrder", Value: 1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.EventInfo{})
		return
	}
	defer cursor.Close(ctx)

	var events []models.EventInfo
	for cursor.Next(ctx) {
		var event models.EventInfo
		if err := cursor.Decode(&event); err == nil {
			events = append(events, event)
		}
	}
	c.JSON(http.StatusOK, events)
}

func (h *Handler) getGallery(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("gallery").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.GalleryItem{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.GalleryItem
	for cursor.Next(ctx) {
		var item models.GalleryItem
		if err := cursor.Decode(&item); err == nil {
			items = append(items, item)
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getFaqs(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("faqs").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "sortOrder", Value: 1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.FAQ{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.FAQ
	for cursor.Next(ctx) {
		var item models.FAQ
		if err := cursor.Decode(&item); err == nil {
			items = append(items, item)
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getWorkshops(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("workshops").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "sortOrder", Value: 1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.Workshop{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.Workshop
	for cursor.Next(ctx) {
		var item models.Workshop
		if err := cursor.Decode(&item); err == nil {
			items = append(items, item)
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getTeam(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("team_members").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "sortOrder", Value: 1}, {Key: "id", Value: 1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.TeamMember{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.TeamMember
	for cursor.Next(ctx) {
		var item models.TeamMember
		if err := cursor.Decode(&item); err == nil {
			items = append(items, item)
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getCulturalEvents(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("cultural_events").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "sortOrder", Value: 1}, {Key: "id", Value: 1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.CulturalEvent{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.CulturalEvent
	for cursor.Next(ctx) {
		var item models.CulturalEvent
		if err := cursor.Decode(&item); err == nil {
			items = append(items, item)
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) registerWorkshop(c *gin.Context) {
	var req struct {
		Name       string `json:"name"`
		Email      string `json:"email"`
		Phone      string `json:"phone"`
		WorkshopID string `json:"workshopId"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Name == "" || req.Email == "" || req.Phone == "" || req.WorkshopID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	workshopID, err := strconv.ParseInt(req.WorkshopID, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid workshop"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	id, err := h.nextID(ctx, "workshop_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("workshop_registrations").InsertOne(ctx, bson.M{
		"id":         id,
		"workshopId": workshopID,
		"name":       req.Name,
		"email":      req.Email,
		"phone":      req.Phone,
		"createdAt":  time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Workshop registration saved"})
}

func (h *Handler) registerRoboRace(c *gin.Context) {
	var req struct {
		TeamName    string `json:"teamName"`
		CaptainName string `json:"captainName"`
		Email       string `json:"email"`
		Phone       string `json:"phone"`
		RobotName   string `json:"robotName"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamName == "" || req.CaptainName == "" || req.Email == "" || req.Phone == "" || req.RobotName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	id, err := h.nextID(ctx, "robo_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("robo_registrations").InsertOne(ctx, bson.M{
		"id":          id,
		"teamName":    req.TeamName,
		"captainName": req.CaptainName,
		"email":       req.Email,
		"phone":       req.Phone,
		"robotName":   req.RobotName,
		"createdAt":   time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Robo race registration saved"})
}

func (h *Handler) createTeam(c *gin.Context) {
	var req struct {
		TeamName     string `json:"teamName"`
		LeaderName   string `json:"leaderName"`
		LeaderEmail  string `json:"leaderEmail"`
		LeaderPhone  string `json:"leaderPhone"`
		LeaderGender string `json:"leaderGender"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamName == "" || req.LeaderName == "" || req.LeaderEmail == "" || req.LeaderPhone == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	teamCode := generateTeamCode(req.TeamName)
	teamID, err := h.nextID(ctx, "hackathon_teams")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "team create failed"})
		return
	}
	memberID, err := h.nextID(ctx, "hackathon_members")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "leader save failed"})
		return
	}

	_, err = h.DB.Collection("hackathon_teams").InsertOne(ctx, bson.M{
		"id":        teamID,
		"teamName":  req.TeamName,
		"teamCode":  teamCode,
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "team create failed"})
		return
	}

	_, err = h.DB.Collection("hackathon_members").InsertOne(ctx, bson.M{
		"id":        memberID,
		"teamId":    teamID,
		"name":      req.LeaderName,
		"email":     req.LeaderEmail,
		"phone":     req.LeaderPhone,
		"gender":    strings.ToLower(req.LeaderGender),
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "leader save failed"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"teamCode": teamCode})
}

func (h *Handler) joinTeam(c *gin.Context) {
	var req struct {
		TeamCode     string `json:"teamCode"`
		MemberName   string `json:"memberName"`
		MemberEmail  string `json:"memberEmail"`
		MemberPhone  string `json:"memberPhone"`
		MemberGender string `json:"memberGender"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamCode == "" || req.MemberName == "" || req.MemberEmail == "" || req.MemberPhone == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	var team struct {
		ID int64 `bson:"id"`
	}
	err := h.DB.Collection("hackathon_teams").FindOne(ctx, bson.M{"teamCode": req.TeamCode}).Decode(&team)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "team not found"})
		return
	}

	count, err := h.DB.Collection("hackathon_members").CountDocuments(ctx, bson.M{"teamId": team.ID})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "db error"})
		return
	}
	if count >= 5 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "team already full"})
		return
	}

	femaleCount, err := h.DB.Collection("hackathon_members").CountDocuments(ctx, bson.M{"teamId": team.ID, "gender": "female"})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "db error"})
		return
	}
	if count == 4 && femaleCount < 1 && strings.ToLower(req.MemberGender) != "female" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "final member must be female to satisfy team rule"})
		return
	}

	memberID, err := h.nextID(ctx, "hackathon_members")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not add member"})
		return
	}

	_, err = h.DB.Collection("hackathon_members").InsertOne(ctx, bson.M{
		"id":        memberID,
		"teamId":    team.ID,
		"name":      req.MemberName,
		"email":     req.MemberEmail,
		"phone":     req.MemberPhone,
		"gender":    strings.ToLower(req.MemberGender),
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not add member"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Member added to team"})
}

func (h *Handler) adminAuth(c *gin.Context) {
	token := c.GetHeader("X-Admin-Token")
	if h.Config.AdminToken != "" && token != h.Config.AdminToken {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}
	c.Next()
}

func (h *Handler) uploadImage(c *gin.Context) {
	if h.Config.CloudinaryCloudName == "" || h.Config.CloudinaryAPIKey == "" || h.Config.CloudinaryAPISecret == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cloudinary keys not set"})
		return
	}
	file, err := c.FormFile("image")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing file"})
		return
	}
	imageURL, err := uploadToCloudinary(file, h.Config)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"imageUrl": imageURL})
}

func (h *Handler) saveGlimpse(c *gin.Context) {
	var req struct {
		Title       string `json:"title"`
		Preview     string `json:"preview"`
		Description string `json:"description"`
		ImageURL    string `json:"imageUrl"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Title == "" || req.Preview == "" || req.Description == "" || req.ImageURL == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "gallery")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("gallery").InsertOne(ctx, bson.M{
		"id":          id,
		"title":       req.Title,
		"preview":     req.Preview,
		"description": req.Description,
		"imageUrl":    req.ImageURL,
		"category":    "glimpse",
		"createdAt":   time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Gallery item saved"})
}

func (h *Handler) saveTeamMember(c *gin.Context) {
	var req struct {
		Name     string `json:"name"`
		Role     string `json:"role"`
		Preview  string `json:"preview"`
		About    string `json:"about"`
		ImageURL string `json:"imageUrl"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Name == "" || req.Role == "" || req.Preview == "" || req.About == "" || req.ImageURL == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "team_members")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("team_members").InsertOne(ctx, bson.M{
		"id":        id,
		"name":      req.Name,
		"role":      req.Role,
		"preview":   req.Preview,
		"about":     req.About,
		"imageUrl":  req.ImageURL,
		"sortOrder": 0,
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Team member saved"})
}

func (h *Handler) saveCulturalEvent(c *gin.Context) {
	var req struct {
		Title       string `json:"title"`
		Preview     string `json:"preview"`
		Description string `json:"description"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Title == "" || req.Preview == "" || req.Description == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "cultural_events")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("cultural_events").InsertOne(ctx, bson.M{
		"id":          id,
		"title":       req.Title,
		"preview":     req.Preview,
		"description": req.Description,
		"sortOrder":   0,
		"createdAt":   time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Cultural event saved"})
}

func (h *Handler) getWorkshopRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	workshopByID := map[int64]string{}
	workshopCursor, err := h.DB.Collection("workshops").Find(ctx, bson.D{})
	if err == nil {
		defer workshopCursor.Close(ctx)
		for workshopCursor.Next(ctx) {
			var workshop struct {
				ID    int64  `bson:"id"`
				Title string `bson:"title"`
			}
			if decodeErr := workshopCursor.Decode(&workshop); decodeErr == nil {
				workshopByID[workshop.ID] = workshop.Title
			}
		}
	}

	cursor, err := h.DB.Collection("workshop_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.WorkshopRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.WorkshopRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID         int64     `bson:"id"`
			WorkshopID int64     `bson:"workshopId"`
			Name       string    `bson:"name"`
			Email      string    `bson:"email"`
			Phone      string    `bson:"phone"`
			CreatedAt  time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.WorkshopRegistration{
				ID:        reg.ID,
				Workshop:  workshopByID[reg.WorkshopID],
				Name:      reg.Name,
				Email:     reg.Email,
				Phone:     reg.Phone,
				CreatedAt: reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getRoboRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("robo_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.RoboRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.RoboRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID          int64     `bson:"id"`
			TeamName    string    `bson:"teamName"`
			CaptainName string    `bson:"captainName"`
			Email       string    `bson:"email"`
			Phone       string    `bson:"phone"`
			RobotName   string    `bson:"robotName"`
			CreatedAt   time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.RoboRegistration{
				ID:          reg.ID,
				TeamName:    reg.TeamName,
				CaptainName: reg.CaptainName,
				Email:       reg.Email,
				Phone:       reg.Phone,
				RobotName:   reg.RobotName,
				CreatedAt:   reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getHackathonRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	teamByID := map[int64]struct {
		name string
		code string
	}{}
	teamCursor, err := h.DB.Collection("hackathon_teams").Find(ctx, bson.D{})
	if err == nil {
		defer teamCursor.Close(ctx)
		for teamCursor.Next(ctx) {
			var team struct {
				ID       int64  `bson:"id"`
				TeamName string `bson:"teamName"`
				TeamCode string `bson:"teamCode"`
			}
			if decodeErr := teamCursor.Decode(&team); decodeErr == nil {
				teamByID[team.ID] = struct {
					name string
					code string
				}{name: team.TeamName, code: team.TeamCode}
			}
		}
	}

	cursor, err := h.DB.Collection("hackathon_members").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.HackathonRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.HackathonRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID        int64     `bson:"id"`
			TeamID    int64     `bson:"teamId"`
			Name      string    `bson:"name"`
			Email     string    `bson:"email"`
			Phone     string    `bson:"phone"`
			Gender    string    `bson:"gender"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			team := teamByID[reg.TeamID]
			items = append(items, models.HackathonRegistration{
				ID:        reg.ID,
				TeamName:  team.name,
				TeamCode:  team.code,
				Name:      reg.Name,
				Email:     reg.Email,
				Phone:     reg.Phone,
				Gender:    reg.Gender,
				CreatedAt: reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func uploadToCloudinary(file *multipart.FileHeader, cfg config.Config) (string, error) {
	src, err := file.Open()
	if err != nil {
		return "", err
	}
	defer src.Close()

	timestamp := strconv.FormatInt(time.Now().Unix(), 10)
	signature := cloudinarySignature(url.Values{
		"timestamp": {timestamp},
	}, cfg.CloudinaryAPISecret)

	body := &bytes.Buffer{}
	writer := multipart.NewWriter(body)

	_ = writer.WriteField("api_key", cfg.CloudinaryAPIKey)
	_ = writer.WriteField("timestamp", timestamp)
	_ = writer.WriteField("signature", signature)

	part, err := writer.CreateFormFile("file", file.Filename)
	if err != nil {
		return "", err
	}
	if _, err := io.Copy(part, src); err != nil {
		return "", err
	}
	writer.Close()

	endpoint := fmt.Sprintf("https://api.cloudinary.com/v1_1/%s/image/upload", cfg.CloudinaryCloudName)
	req, err := http.NewRequest(http.MethodPost, endpoint, body)
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", writer.FormDataContentType())

	client := &http.Client{Timeout: 30 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		data, _ := io.ReadAll(resp.Body)
		return "", fmt.Errorf("cloudinary error: %s", string(data))
	}

	var payload struct {
		SecureURL string `json:"secure_url"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return "", err
	}
	if payload.SecureURL == "" {
		return "", fmt.Errorf("could not parse upload response")
	}
	return payload.SecureURL, nil
}

func cloudinarySignature(values url.Values, secret string) string {
	var pairs []string
	for key, val := range values {
		if len(val) > 0 && val[0] != "" {
			pairs = append(pairs, fmt.Sprintf("%s=%s", key, val[0]))
		}
	}
	sortStrings(pairs)
	base := strings.Join(pairs, "&") + secret
	sum := sha1.Sum([]byte(base))
	return hex.EncodeToString(sum[:])
}

func sortStrings(values []string) {
	for i := 0; i < len(values); i++ {
		for j := i + 1; j < len(values); j++ {
			if values[j] < values[i] {
				values[i], values[j] = values[j], values[i]
			}
		}
	}
}

func generateTeamCode(seed string) string {
	now := time.Now().UnixNano()
	raw := fmt.Sprintf("%s-%d", strings.ToUpper(seed), now)
	hash := sha1.Sum([]byte(raw))
	return strings.ToUpper(hex.EncodeToString(hash[:])[:6])
}
