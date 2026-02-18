package handlers

import (
	"bytes"
	"context"
	"crypto/hmac"
	"crypto/sha1"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"net/http"
	"net/smtp"
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
		api.POST("/hackathon/register", h.registerHackathon)
		api.POST("/payments/razorpay/order", h.createRazorpayOrder)

		admin := api.Group("/admin")
		admin.Use(h.adminAuth)
		admin.POST("/upload", h.uploadImage)
		admin.POST("/glimpse", h.saveGlimpse)
		admin.POST("/team", h.saveTeamMember)
		admin.POST("/culture-event", h.saveCulturalEvent)
		admin.POST("/notifications/broadcast", h.broadcastEmail)
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
		Name              string `json:"name"`
		Email             string `json:"email"`
		Phone             string `json:"phone"`
		WorkshopID        string `json:"workshopId"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Name == "" || req.Email == "" || req.Phone == "" || req.WorkshopID == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if !verifyRazorpayPayment(req.RazorpayOrderID, req.RazorpayPaymentID, req.RazorpaySignature, h.Config.RazorpayKeySecret) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payment verification"})
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
		"payment": bson.M{
			"status":            "paid",
			"razorpayOrderId":   req.RazorpayOrderID,
			"razorpayPaymentId": req.RazorpayPaymentID,
		},
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	h.sendPaymentSuccessEmail("Workshop", req.Name, req.RazorpayPaymentID, []string{req.Email})
	c.JSON(http.StatusOK, gin.H{"message": "Workshop registration saved"})
}

func (h *Handler) registerRoboRace(c *gin.Context) {
	var req struct {
		TeamName    string `json:"teamName"`
		CaptainName string `json:"captainName"`
		Email       string `json:"email"`
		Phone       string `json:"phone"`
		RobotName   string `json:"robotName"`
		MemberCount int    `json:"memberCount"`
		Members     []struct {
			Name  string `json:"name"`
			Email string `json:"email"`
			Phone string `json:"phone"`
		} `json:"members"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamName == "" || req.CaptainName == "" || req.Email == "" || req.Phone == "" || req.RobotName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if req.MemberCount < 1 || req.MemberCount > 20 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member count must be between 1 and 20"})
		return
	}
	if len(req.Members) != req.MemberCount {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member details do not match member count"})
		return
	}
	for _, member := range req.Members {
		if strings.TrimSpace(member.Name) == "" || strings.TrimSpace(member.Email) == "" || strings.TrimSpace(member.Phone) == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "all member fields are required"})
			return
		}
	}
	if !verifyRazorpayPayment(req.RazorpayOrderID, req.RazorpayPaymentID, req.RazorpaySignature, h.Config.RazorpayKeySecret) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payment verification"})
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
		"memberCount": req.MemberCount,
		"members":     req.Members,
		"payment": bson.M{
			"status":            "paid",
			"razorpayOrderId":   req.RazorpayOrderID,
			"razorpayPaymentId": req.RazorpayPaymentID,
		},
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	emailCandidates := []string{req.Email}
	for _, member := range req.Members {
		emailCandidates = append(emailCandidates, member.Email)
	}
	recipientEmails := collectUniqueNormalizedEmails(emailCandidates)
	h.sendPaymentSuccessEmail("Robo Race", req.TeamName, req.RazorpayPaymentID, recipientEmails)

	c.JSON(http.StatusOK, gin.H{"message": "Robo race registration saved"})
}

func (h *Handler) registerHackathon(c *gin.Context) {
	var req struct {
		TeamName     string `json:"teamName"`
		ContactName  string `json:"contactName"`
		ContactEmail string `json:"contactEmail"`
		ContactPhone string `json:"contactPhone"`
		Members      []struct {
			Name   string `json:"name"`
			Email  string `json:"email"`
			Phone  string `json:"phone"`
			Gender string `json:"gender"`
		} `json:"members"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamName == "" || req.ContactName == "" || req.ContactEmail == "" || req.ContactPhone == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if len(req.Members) != 4 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "hackathon requires exactly 4 members"})
		return
	}
	femaleCount := 0
	for _, member := range req.Members {
		if strings.TrimSpace(member.Name) == "" || strings.TrimSpace(member.Email) == "" || strings.TrimSpace(member.Phone) == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "all member fields are required"})
			return
		}
		if strings.ToLower(strings.TrimSpace(member.Gender)) == "female" {
			femaleCount++
		}
	}
	if femaleCount < 1 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "at least one female member is required"})
		return
	}
	if !verifyRazorpayPayment(req.RazorpayOrderID, req.RazorpayPaymentID, req.RazorpaySignature, h.Config.RazorpayKeySecret) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payment verification"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	id, err := h.nextID(ctx, "hackathon_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	_, err = h.DB.Collection("hackathon_registrations").InsertOne(ctx, bson.M{
		"id":           id,
		"teamName":     req.TeamName,
		"contactName":  req.ContactName,
		"contactEmail": req.ContactEmail,
		"contactPhone": req.ContactPhone,
		"members":      req.Members,
		"memberCount":  len(req.Members),
		"femaleCount":  femaleCount,
		"payment": bson.M{
			"status":            "paid",
			"razorpayOrderId":   req.RazorpayOrderID,
			"razorpayPaymentId": req.RazorpayPaymentID,
		},
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	emailCandidates := []string{req.ContactEmail}
	for _, member := range req.Members {
		emailCandidates = append(emailCandidates, member.Email)
	}
	recipientEmails := collectUniqueNormalizedEmails(emailCandidates)
	h.sendPaymentSuccessEmail("Hackathon", req.TeamName, req.RazorpayPaymentID, recipientEmails)

	c.JSON(http.StatusOK, gin.H{"message": "Hackathon registration saved"})
}

func (h *Handler) createRazorpayOrder(c *gin.Context) {
	var req struct {
		Event       string `json:"event"`
		MemberCount int    `json:"memberCount"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if h.Config.RazorpayKeyID == "" || h.Config.RazorpayKeySecret == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "razorpay keys are not configured"})
		return
	}

	event := strings.ToLower(strings.TrimSpace(req.Event))
	var amount int64
	switch event {
	case "workshops":
		amount = 30000
	case "hackathon":
		amount = 40000
	case "robo-race":
		if req.MemberCount < 1 || req.MemberCount > 20 {
			c.JSON(http.StatusBadRequest, gin.H{"error": "member count must be between 1 and 20 for robo-race"})
			return
		}
		amount = int64(req.MemberCount) * 10000
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid event"})
		return
	}

	body, _ := json.Marshal(map[string]any{
		"amount":          amount,
		"currency":        "INR",
		"receipt":         fmt.Sprintf("%s-%d", event, time.Now().UnixNano()),
		"payment_capture": 1,
	})
	reqRzp, err := http.NewRequest(http.MethodPost, "https://api.razorpay.com/v1/orders", bytes.NewReader(body))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create payment order"})
		return
	}
	reqRzp.SetBasicAuth(h.Config.RazorpayKeyID, h.Config.RazorpayKeySecret)
	reqRzp.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: 20 * time.Second}
	resp, err := client.Do(reqRzp)
	if err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"error": "payment provider unavailable"})
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		payload, _ := io.ReadAll(resp.Body)
		c.JSON(http.StatusBadGateway, gin.H{"error": fmt.Sprintf("payment order failed: %s", string(payload))})
		return
	}

	var order struct {
		ID       string `json:"id"`
		Amount   int64  `json:"amount"`
		Currency string `json:"currency"`
	}
	if err := json.NewDecoder(resp.Body).Decode(&order); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not parse payment response"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"key":      h.Config.RazorpayKeyID,
		"orderId":  order.ID,
		"amount":   order.Amount,
		"currency": order.Currency,
	})
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
			ID         int64  `bson:"id"`
			WorkshopID int64  `bson:"workshopId"`
			Name       string `bson:"name"`
			Email      string `bson:"email"`
			Phone      string `bson:"phone"`
			Payment    struct {
				Status            string `bson:"status"`
				RazorpayPaymentID string `bson:"razorpayPaymentId"`
			} `bson:"payment"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.WorkshopRegistration{
				ID:            reg.ID,
				Workshop:      workshopByID[reg.WorkshopID],
				Name:          reg.Name,
				Email:         reg.Email,
				Phone:         reg.Phone,
				PaymentStatus: reg.Payment.Status,
				PaymentID:     reg.Payment.RazorpayPaymentID,
				CreatedAt:     reg.CreatedAt.Format("2006-01-02 15:04:05"),
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
			ID          int64  `bson:"id"`
			TeamName    string `bson:"teamName"`
			CaptainName string `bson:"captainName"`
			Email       string `bson:"email"`
			Phone       string `bson:"phone"`
			RobotName   string `bson:"robotName"`
			MemberCount int    `bson:"memberCount"`
			Members     []struct {
				Name  string `bson:"name"`
				Email string `bson:"email"`
				Phone string `bson:"phone"`
			} `bson:"members"`
			Payment struct {
				Status            string `bson:"status"`
				RazorpayOrderID   string `bson:"razorpayOrderId"`
				RazorpayPaymentID string `bson:"razorpayPaymentId"`
			} `bson:"payment"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			members := make([]models.RoboMember, 0, len(reg.Members))
			for _, m := range reg.Members {
				members = append(members, models.RoboMember{
					Name:  m.Name,
					Email: m.Email,
					Phone: m.Phone,
				})
			}
			items = append(items, models.RoboRegistration{
				ID:            reg.ID,
				TeamName:      reg.TeamName,
				CaptainName:   reg.CaptainName,
				Email:         reg.Email,
				Phone:         reg.Phone,
				RobotName:     reg.RobotName,
				MemberCount:   maxInt(reg.MemberCount, len(members)),
				Members:       members,
				PaymentStatus: reg.Payment.Status,
				PaymentID:     reg.Payment.RazorpayPaymentID,
				CreatedAt:     reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getHackathonRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("hackathon_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.HackathonRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.HackathonRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID           int64  `bson:"id"`
			TeamName     string `bson:"teamName"`
			ContactName  string `bson:"contactName"`
			ContactEmail string `bson:"contactEmail"`
			ContactPhone string `bson:"contactPhone"`
			MemberCount  int    `bson:"memberCount"`
			FemaleCount  int    `bson:"femaleCount"`
			Members      []struct {
				Name   string `bson:"name"`
				Email  string `bson:"email"`
				Phone  string `bson:"phone"`
				Gender string `bson:"gender"`
			} `bson:"members"`
			Payment struct {
				Status            string `bson:"status"`
				RazorpayOrderID   string `bson:"razorpayOrderId"`
				RazorpayPaymentID string `bson:"razorpayPaymentId"`
			} `bson:"payment"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			members := make([]models.HackathonMember, 0, len(reg.Members))
			for _, m := range reg.Members {
				members = append(members, models.HackathonMember{
					Name:   m.Name,
					Email:  m.Email,
					Phone:  m.Phone,
					Gender: m.Gender,
				})
			}
			items = append(items, models.HackathonRegistration{
				ID:            reg.ID,
				TeamName:      reg.TeamName,
				ContactName:   reg.ContactName,
				ContactEmail:  reg.ContactEmail,
				ContactPhone:  reg.ContactPhone,
				MemberCount:   maxInt(reg.MemberCount, len(members)),
				FemaleCount:   reg.FemaleCount,
				Members:       members,
				PaymentStatus: reg.Payment.Status,
				PaymentID:     reg.Payment.RazorpayPaymentID,
				CreatedAt:     reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) broadcastEmail(c *gin.Context) {
	var req struct {
		Audience string `json:"audience"`
		Subject  string `json:"subject"`
		Message  string `json:"message"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	audience := strings.ToLower(strings.TrimSpace(req.Audience))
	subject := strings.TrimSpace(req.Subject)
	message := strings.TrimSpace(req.Message)
	if audience == "" || subject == "" || message == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	recipients, err := h.collectAudienceEmails(ctx, audience)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not prepare recipients"})
		return
	}
	if len(recipients) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "no recipients found for selected audience"})
		return
	}

	if err := h.sendEmail(subject, message, recipients); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message":  "Email sent successfully",
		"audience": audience,
		"count":    len(recipients),
	})
}

func (h *Handler) collectAudienceEmails(ctx context.Context, audience string) ([]string, error) {
	switch audience {
	case "workshops":
		return h.collectWorkshopEmails(ctx)
	case "hackathon":
		return h.collectHackathonEmails(ctx)
	case "robo-race":
		return h.collectRoboRaceEmails(ctx)
	case "all":
		workshop, err := h.collectWorkshopEmails(ctx)
		if err != nil {
			return nil, err
		}
		hackathon, err := h.collectHackathonEmails(ctx)
		if err != nil {
			return nil, err
		}
		robo, err := h.collectRoboRaceEmails(ctx)
		if err != nil {
			return nil, err
		}
		return collectUniqueNormalizedEmails(append(append(workshop, hackathon...), robo...)), nil
	default:
		return nil, fmt.Errorf("invalid audience")
	}
}

func (h *Handler) collectWorkshopEmails(ctx context.Context) ([]string, error) {
	cursor, err := h.DB.Collection("workshop_registrations").Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var emails []string
	for cursor.Next(ctx) {
		var reg struct {
			Email string `bson:"email"`
		}
		if decodeErr := cursor.Decode(&reg); decodeErr == nil {
			emails = append(emails, reg.Email)
		}
	}
	return collectUniqueNormalizedEmails(emails), nil
}

func (h *Handler) collectHackathonEmails(ctx context.Context) ([]string, error) {
	var emails []string

	cursor, err := h.DB.Collection("hackathon_registrations").Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var reg struct {
			ContactEmail string `bson:"contactEmail"`
			Members      []struct {
				Email string `bson:"email"`
			} `bson:"members"`
		}
		if decodeErr := cursor.Decode(&reg); decodeErr == nil {
			emails = append(emails, reg.ContactEmail)
			for _, m := range reg.Members {
				emails = append(emails, m.Email)
			}
		}
	}

	legacyCursor, legacyErr := h.DB.Collection("hackathon_members").Find(ctx, bson.D{})
	if legacyErr == nil {
		defer legacyCursor.Close(ctx)
		for legacyCursor.Next(ctx) {
			var reg struct {
				Email string `bson:"email"`
			}
			if decodeErr := legacyCursor.Decode(&reg); decodeErr == nil {
				emails = append(emails, reg.Email)
			}
		}
	}

	return collectUniqueNormalizedEmails(emails), nil
}

func (h *Handler) collectRoboRaceEmails(ctx context.Context) ([]string, error) {
	cursor, err := h.DB.Collection("robo_registrations").Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var emails []string
	for cursor.Next(ctx) {
		var reg struct {
			Email   string `bson:"email"`
			Members []struct {
				Email string `bson:"email"`
			} `bson:"members"`
		}
		if decodeErr := cursor.Decode(&reg); decodeErr == nil {
			emails = append(emails, reg.Email)
			for _, m := range reg.Members {
				emails = append(emails, m.Email)
			}
		}
	}
	return collectUniqueNormalizedEmails(emails), nil
}

func verifyRazorpayPayment(orderID, paymentID, signature, keySecret string) bool {
	orderID = strings.TrimSpace(orderID)
	paymentID = strings.TrimSpace(paymentID)
	signature = strings.TrimSpace(signature)
	keySecret = strings.TrimSpace(keySecret)
	if orderID == "" || paymentID == "" || signature == "" || keySecret == "" {
		return false
	}
	payload := orderID + "|" + paymentID
	h := hmac.New(sha256.New, []byte(keySecret))
	h.Write([]byte(payload))
	expected := hex.EncodeToString(h.Sum(nil))
	return hmac.Equal([]byte(expected), []byte(signature))
}

func collectUniqueNormalizedEmails(input []string) []string {
	seen := map[string]struct{}{}
	out := make([]string, 0, len(input))
	for _, email := range input {
		clean := strings.ToLower(strings.TrimSpace(email))
		if clean == "" {
			continue
		}
		if _, exists := seen[clean]; exists {
			continue
		}
		seen[clean] = struct{}{}
		out = append(out, clean)
	}
	return out
}

func (h *Handler) sendPaymentSuccessEmail(eventName, teamName, paymentID string, recipients []string) {
	subject := fmt.Sprintf("%s Registration Confirmed", eventName)
	body := fmt.Sprintf(
		"Your payment and registration are confirmed.\r\n\r\nEvent: %s\r\nTeam: %s\r\nPayment ID: %s\r\n\r\nThank you for registering.",
		eventName,
		teamName,
		paymentID,
	)
	if err := h.sendEmail(subject, body, recipients); err != nil {
		log.Printf("payment success mail failed: %v", err)
	}
}

func (h *Handler) sendEmail(subject, body string, recipients []string) error {
	if len(recipients) == 0 || h.Config.SMTPHost == "" || h.Config.SMTPPort == "" || h.Config.MailFrom == "" {
		return nil
	}

	msg := "From: " + h.Config.MailFrom + "\r\n" +
		"To: " + strings.Join(recipients, ",") + "\r\n" +
		"Subject: " + subject + "\r\n\r\n" +
		body + "\r\n"

	addr := h.Config.SMTPHost + ":" + h.Config.SMTPPort
	var auth smtp.Auth
	if h.Config.SMTPUser != "" || h.Config.SMTPPass != "" {
		auth = smtp.PlainAuth("", h.Config.SMTPUser, h.Config.SMTPPass, h.Config.SMTPHost)
	}

	if err := smtp.SendMail(addr, auth, h.Config.MailFrom, recipients, []byte(msg)); err != nil {
		return err
	}
	return nil
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

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func generateTeamCode(seed string) string {
	now := time.Now().UnixNano()
	raw := fmt.Sprintf("%s-%d", strings.ToUpper(seed), now)
	hash := sha1.Sum([]byte(raw))
	return strings.ToUpper(hex.EncodeToString(hash[:])[:6])
}
