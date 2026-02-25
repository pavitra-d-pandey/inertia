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
	"html"
	"io"
	"mime/multipart"
	"net/http"
	"net/url"
	"regexp"
	"sort"
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
		api.POST("/contact", h.registerContact)

		api.POST("/workshops/register", h.registerWorkshop)
		api.POST("/robo-race/register", h.registerKineticShowdown)
		api.POST("/kinetic-showdown/register", h.registerKineticShowdown)
		api.POST("/hackathon/register", h.registerHackathon)
		api.POST("/hackathon/problem-statement/team", h.getHackathonProblemStatementTeam)
		api.POST("/hackathon/problem-statement/confirm", h.confirmHackathonProblemStatement)
		api.POST("/hackathon/id-card/request", h.requestHackathonIDCard)
		api.POST("/hackathon/id-card/verify", h.verifyHackathonIDCard)
		api.POST("/hackathon/id-card/download", h.downloadHackathonIDCard)
		api.POST("/esports/register", h.registerEsports)
		api.POST("/esports/solo-register", h.registerSoloEsports)
		api.POST("/open-mic/register", h.registerOpenMic)
		api.POST("/uploads/document", h.uploadDocument)
		api.POST("/payments/razorpay/order", h.createRazorpayOrder)

		admin := api.Group("/admin")
		admin.Use(h.adminAuth)
		admin.POST("/upload", h.uploadImage)
		admin.POST("/glimpse", h.saveGlimpse)
		admin.POST("/team", h.saveTeamMember)
		admin.POST("/culture-event", h.saveCulturalEvent)
		admin.GET("/content/gallery", h.getGallery)
		admin.GET("/content/team", h.getTeam)
		admin.GET("/content/culture-events", h.getCulturalEvents)
		admin.PUT("/glimpse/:id", h.updateGlimpse)
		admin.DELETE("/glimpse/:id", h.deleteGlimpse)
		admin.PUT("/team/:id", h.updateTeamMember)
		admin.DELETE("/team/:id", h.deleteTeamMember)
		admin.PUT("/culture-event/:id", h.updateCulturalEvent)
		admin.DELETE("/culture-event/:id", h.deleteCulturalEvent)
		admin.GET("/registrations/workshops", h.getWorkshopRegistrations)
		admin.GET("/registrations/robo-race", h.getRoboRegistrations)
		admin.GET("/registrations/kinetic-showdown", h.getRoboRegistrations)
		admin.GET("/registrations/hackathon", h.getHackathonRegistrations)
		admin.GET("/hackathon/problem-statements", h.getHackathonProblemStatements)
		admin.GET("/hackathon/id-card/requests", h.getHackathonIDCardRequests)
		admin.GET("/hackathon/id-card/issued", h.getHackathonIssuedIDCardRequests)
		admin.POST("/hackathon/id-card/generate-code", h.generateHackathonIDCardCode)
		admin.GET("/registrations/esports", h.getEsportsRegistrations)
		admin.GET("/registrations/esports-solo", h.getSoloEsportsRegistrations)
		admin.GET("/registrations/esports-solo-random-teams", h.getSoloEsportsRandomTeams)
		admin.POST("/esports-solo/create-random-team", h.createSoloEsportsRandomTeam)
		admin.GET("/registrations/open-mic", h.getOpenMicRegistrations)
		admin.GET("/registrations/contact", h.getContactRegistrations)
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
		Phone             string `json:"phone"`
		CollegeName       string `json:"collegeName"`
		WorkshopID        string `json:"workshopId"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Name == "" || req.Phone == "" || req.CollegeName == "" || req.WorkshopID == "" {
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
		"id":          id,
		"workshopId":  workshopID,
		"name":        req.Name,
		"phone":       req.Phone,
		"collegeName": req.CollegeName,
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
	c.JSON(http.StatusOK, gin.H{"message": "Workshop registration saved"})
}

func (h *Handler) registerKineticShowdown(c *gin.Context) {
	var req struct {
		TeamName       string `json:"teamName"`
		TeamLeaderName string `json:"teamLeaderName"`
		Phone          string `json:"phone"`
		CollegeName    string `json:"collegeName"`
		MemberCount    int    `json:"memberCount"`
		Members        []struct {
			Name        string `json:"name"`
			Phone       string `json:"phone"`
			Branch      string `json:"branch"`
			Semester    string `json:"semester"`
			CollegeName string `json:"collegeName"`
		} `json:"members"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.TeamName == "" || req.TeamLeaderName == "" || req.Phone == "" || req.CollegeName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if req.MemberCount < 2 || req.MemberCount > 4 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member count must be between 2 and 4"})
		return
	}
	if len(req.Members) != req.MemberCount {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member details do not match member count"})
		return
	}
	for _, member := range req.Members {
		if strings.TrimSpace(member.Name) == "" || strings.TrimSpace(member.Phone) == "" || strings.TrimSpace(member.Branch) == "" || strings.TrimSpace(member.Semester) == "" || strings.TrimSpace(member.CollegeName) == "" {
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

	id, err := h.nextID(ctx, "kinetic_showdown_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}

	_, err = h.DB.Collection("kinetic_showdown_registrations").InsertOne(ctx, bson.M{
		"id":             id,
		"teamName":       req.TeamName,
		"teamLeaderName": req.TeamLeaderName,
		"phone":          req.Phone,
		"collegeName":    req.CollegeName,
		"memberCount":    req.MemberCount,
		"members":        req.Members,
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

	c.JSON(http.StatusOK, gin.H{"message": "Kinetic showdown registration saved"})
}

func (h *Handler) registerHackathon(c *gin.Context) {
	var req struct {
		TeamName     string `json:"teamName"`
		ContactName  string `json:"contactName"`
		ContactPhone string `json:"contactPhone"`
		CollegeName  string `json:"collegeName"`
		Members      []struct {
			Name   string `json:"name"`
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
	if req.TeamName == "" || req.ContactName == "" || req.ContactPhone == "" || req.CollegeName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if len(req.Members) != 3 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "hackathon requires exactly 4 members total: 1 leader + 3 team members"})
		return
	}
	femaleCount := 0
	for _, member := range req.Members {
		if strings.TrimSpace(member.Name) == "" || strings.TrimSpace(member.Phone) == "" {
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
		"teamId":       canonicalHackathonTeamID(id),
		"teamName":     req.TeamName,
		"contactName":  req.ContactName,
		"contactPhone": req.ContactPhone,
		"collegeName":  req.CollegeName,
		"members":      req.Members,
		"memberCount":  len(req.Members) + 1,
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

	c.JSON(http.StatusOK, gin.H{"message": "Hackathon registration saved"})
}

func (h *Handler) confirmHackathonProblemStatement(c *gin.Context) {
	var req struct {
		TeamID    string `json:"teamId"`
		ThemeSlug string `json:"themeSlug"`
		ThemeName string `json:"themeName"`
		Domain    string `json:"domain"`
		Title     string `json:"title"`
		Summary   string `json:"summary"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	registration, err := h.findHackathonRegistrationByInputTeamID(c.Request.Context(), req.TeamID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "team not found for provided team id"})
		return
	}

	domain := strings.TrimSpace(req.Domain)
	if domain != "fullstack" && domain != "ai_ml" && domain != "cybersecurity" && domain != "blockchain" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid domain"})
		return
	}

	title := strings.TrimSpace(req.Title)
	if title == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "problem statement title is required"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	registration, err = h.findHackathonRegistrationByID(ctx, registration.ID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "team not found for provided team id"})
		return
	}

	teamIDCanonical := strings.TrimSpace(registration.TeamID)
	if teamIDCanonical == "" {
		teamIDCanonical = canonicalHackathonTeamID(registration.ID)
	}
	now := time.Now()
	updateFields := bson.M{
		"registrationId": registration.ID,
		"teamId":         teamIDCanonical,
		"teamName":       registration.TeamName,
		"leaderName":     registration.ContactName,
		"themeSlug":      strings.TrimSpace(req.ThemeSlug),
		"themeName":      strings.TrimSpace(req.ThemeName),
		"domain":         domain,
		"title":          title,
		"summary":        strings.TrimSpace(req.Summary),
		"confirmedAt":    now,
		"updatedAt":      now,
	}

	var existing struct {
		ID          int64     `bson:"id"`
		ThemeSlug   string    `bson:"themeSlug"`
		ThemeName   string    `bson:"themeName"`
		Domain      string    `bson:"domain"`
		Title       string    `bson:"title"`
		Summary     string    `bson:"summary"`
		ConfirmedAt time.Time `bson:"confirmedAt"`
	}
	findErr := h.DB.Collection("hackathon_problem_statement_choices").FindOne(
		ctx,
		bson.M{"registrationId": registration.ID},
	).Decode(&existing)

	if findErr == mongo.ErrNoDocuments {
		id, idErr := h.nextID(ctx, "hackathon_problem_statement_choices")
		if idErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save selection"})
			return
		}
		updateFields["id"] = id
		_, err = h.DB.Collection("hackathon_problem_statement_choices").InsertOne(ctx, updateFields)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save selection"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Problem statement confirmed and saved."})
		return
	}

	if findErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save selection"})
		return
	}

	c.JSON(http.StatusConflict, gin.H{
		"error":  "problem statement is already locked for this team",
		"locked": true,
		"choice": gin.H{
			"teamId":      teamIDCanonical,
			"teamName":    registration.TeamName,
			"leaderName":  registration.ContactName,
			"themeSlug":   existing.ThemeSlug,
			"themeName":   existing.ThemeName,
			"domain":      existing.Domain,
			"title":       existing.Title,
			"summary":     existing.Summary,
			"confirmedAt": existing.ConfirmedAt.Format("2006-01-02 15:04:05"),
		},
	})
}

func (h *Handler) getHackathonProblemStatementTeam(c *gin.Context) {
	var req struct {
		TeamID string `json:"teamId"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	registration, err := h.findHackathonRegistrationByInputTeamID(ctx, req.TeamID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "team not found for provided team id"})
		return
	}
	registration, err = h.findHackathonRegistrationByID(ctx, registration.ID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "team not found for provided team id"})
		return
	}

	response := gin.H{
		"teamId":     registration.TeamID,
		"teamName":   registration.TeamName,
		"leaderName": registration.ContactName,
		"locked":     false,
	}

	var choice struct {
		ThemeSlug   string    `bson:"themeSlug"`
		ThemeName   string    `bson:"themeName"`
		Domain      string    `bson:"domain"`
		Title       string    `bson:"title"`
		Summary     string    `bson:"summary"`
		ConfirmedAt time.Time `bson:"confirmedAt"`
	}
	err = h.DB.Collection("hackathon_problem_statement_choices").FindOne(
		ctx,
		bson.M{"registrationId": registration.ID},
	).Decode(&choice)
	if err == nil {
		response["locked"] = true
		response["choice"] = gin.H{
			"teamId":      registration.TeamID,
			"teamName":    registration.TeamName,
			"leaderName":  registration.ContactName,
			"themeSlug":   choice.ThemeSlug,
			"themeName":   choice.ThemeName,
			"domain":      choice.Domain,
			"title":       choice.Title,
			"summary":     choice.Summary,
			"confirmedAt": choice.ConfirmedAt.Format("2006-01-02 15:04:05"),
		}
	} else if err != mongo.ErrNoDocuments {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not fetch team problem statement status"})
		return
	}

	c.JSON(http.StatusOK, response)
}

func (h *Handler) requestHackathonIDCard(c *gin.Context) {
	var req struct {
		LeaderPhone string `json:"leaderPhone"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	leaderPhone := strings.TrimSpace(req.LeaderPhone)
	leaderPhoneNormalized := normalizePhone(req.LeaderPhone)
	if leaderPhone == "" || leaderPhoneNormalized == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "leader phone is required"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	registration, err := h.findHackathonRegistrationByPhone(ctx, leaderPhoneNormalized)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "no hackathon team found with this leader phone"})
		return
	}

	now := time.Now()
	var existing struct {
		ID            int64  `bson:"id"`
		Status        string `bson:"status"`
		GeneratedCode string `bson:"generatedCode"`
	}
	findErr := h.DB.Collection("hackathon_id_card_requests").FindOne(
		ctx,
		bson.M{"registrationId": registration.ID},
	).Decode(&existing)

	requestDoc := bson.M{
		"registrationId":        registration.ID,
		"leaderPhone":           leaderPhone,
		"leaderPhoneNormalized": leaderPhoneNormalized,
		"status":                "requested",
		"generatedCode":         "",
		"approvedParticipants":  []bson.M{},
		"requestedAt":           now,
		"updatedAt":             now,
	}

	if findErr == mongo.ErrNoDocuments {
		id, idErr := h.nextID(ctx, "hackathon_id_card_requests")
		if idErr != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "request save failed"})
			return
		}
		requestDoc["id"] = id
		_, err = h.DB.Collection("hackathon_id_card_requests").InsertOne(ctx, requestDoc)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "request save failed"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "Request sent to hackathon manager."})
		return
	}

	if findErr != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "request save failed"})
		return
	}

	if strings.TrimSpace(existing.Status) == "issued" {
		c.JSON(http.StatusConflict, gin.H{
			"error":   "e-ID request already approved for this team. Leader cannot request again.",
			"teamId":  registration.TeamID,
			"code":    strings.TrimSpace(existing.GeneratedCode),
			"message": "Team approval is already completed and locked.",
		})
		return
	}
	if strings.TrimSpace(existing.Status) == "requested" {
		c.JSON(http.StatusConflict, gin.H{
			"error":   "e-ID request is already pending approval.",
			"teamId":  registration.TeamID,
			"message": "Please wait for manager approval.",
		})
		return
	}

	_, err = h.DB.Collection("hackathon_id_card_requests").UpdateOne(
		ctx,
		bson.M{"id": existing.ID},
		bson.M{"$set": requestDoc},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "request save failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Request sent to hackathon manager."})
}

func (h *Handler) verifyHackathonIDCard(c *gin.Context) {
	var req struct {
		Phone string `json:"phone"`
		Code  string `json:"code"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	phone := strings.TrimSpace(req.Phone)
	code := strings.TrimSpace(req.Code)
	if normalizePhone(phone) == "" || code == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "phone and 4-digit code are required"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	card, err := h.resolveHackathonIDCard(ctx, phone, code)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid phone number or code"})
		return
	}

	c.JSON(http.StatusOK, card)
}

func (h *Handler) downloadHackathonIDCard(c *gin.Context) {
	var req struct {
		Phone string `json:"phone"`
		Code  string `json:"code"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	phone := strings.TrimSpace(req.Phone)
	code := strings.TrimSpace(req.Code)
	if normalizePhone(phone) == "" || code == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "phone and 4-digit code are required"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	card, err := h.resolveHackathonIDCard(ctx, phone, code)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid phone number or code"})
		return
	}

	svg := buildHackathonIDCardSVG(card)
	filename := fmt.Sprintf("%s-%s-hackathon-id.svg", slugifyForFilename(card.ParticipantName), normalizePhone(card.ParticipantPhone))
	c.Header("Content-Type", "image/svg+xml; charset=utf-8")
	c.Header("Content-Disposition", fmt.Sprintf("attachment; filename=\"%s\"", filename))
	c.String(http.StatusOK, svg)
}

func (h *Handler) getHackathonIDCardRequests(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("hackathon_id_card_requests").Find(
		ctx,
		bson.M{"status": "requested"},
		options.Find().SetSort(bson.D{{Key: "requestedAt", Value: -1}}),
	)
	if err != nil {
		c.JSON(http.StatusOK, []gin.H{})
		return
	}
	defer cursor.Close(ctx)

	items := make([]gin.H, 0)
	for cursor.Next(ctx) {
		var reqDoc struct {
			ID             int64     `bson:"id"`
			RegistrationID int64     `bson:"registrationId"`
			RequestedAt    time.Time `bson:"requestedAt"`
		}
		if err := cursor.Decode(&reqDoc); err != nil {
			continue
		}

		registration, findErr := h.findHackathonRegistrationByID(ctx, reqDoc.RegistrationID)
		if findErr != nil {
			continue
		}

		participants := []gin.H{
			{
				"name":   registration.ContactName,
				"phone":  registration.ContactPhone,
				"gender": "",
				"role":   "Leader",
			},
		}
		for _, member := range registration.Members {
			participants = append(participants, gin.H{
				"name":   member.Name,
				"phone":  member.Phone,
				"gender": member.Gender,
				"role":   "Member",
			})
		}

		items = append(items, gin.H{
			"requestId":      reqDoc.ID,
			"registrationId": registration.ID,
			"teamId":         registration.TeamID,
			"requestedAt":    reqDoc.RequestedAt.Format("2006-01-02 15:04:05"),
			"teamName":       registration.TeamName,
			"collegeName":    registration.CollegeName,
			"leaderName":     registration.ContactName,
			"leaderPhone":    registration.ContactPhone,
			"participants":   participants,
		})
	}

	c.JSON(http.StatusOK, items)
}

func (h *Handler) getHackathonProblemStatements(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("hackathon_problem_statement_choices").Find(
		ctx,
		bson.D{},
		options.Find().SetSort(bson.D{{Key: "confirmedAt", Value: -1}}),
	)
	if err != nil {
		c.JSON(http.StatusOK, []gin.H{})
		return
	}
	defer cursor.Close(ctx)

	items := make([]gin.H, 0)
	for cursor.Next(ctx) {
		var row struct {
			TeamID      string    `bson:"teamId"`
			TeamName    string    `bson:"teamName"`
			LeaderName  string    `bson:"leaderName"`
			ThemeName   string    `bson:"themeName"`
			Domain      string    `bson:"domain"`
			Title       string    `bson:"title"`
			ConfirmedAt time.Time `bson:"confirmedAt"`
		}
		if err := cursor.Decode(&row); err != nil {
			continue
		}
		items = append(items, gin.H{
			"teamId":      row.TeamID,
			"teamName":    row.TeamName,
			"leaderName":  row.LeaderName,
			"themeName":   row.ThemeName,
			"domain":      row.Domain,
			"title":       row.Title,
			"confirmedAt": row.ConfirmedAt.Format("2006-01-02 15:04:05"),
		})
	}

	c.JSON(http.StatusOK, items)
}

func (h *Handler) getHackathonIssuedIDCardRequests(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("hackathon_id_card_requests").Find(
		ctx,
		bson.M{"status": "issued"},
		options.Find().SetSort(bson.D{{Key: "issuedAt", Value: -1}}),
	)
	if err != nil {
		c.JSON(http.StatusOK, []gin.H{})
		return
	}
	defer cursor.Close(ctx)

	items := make([]gin.H, 0)
	for cursor.Next(ctx) {
		var reqDoc struct {
			RegistrationID int64     `bson:"registrationId"`
			GeneratedCode  string    `bson:"generatedCode"`
			IssuedAt       time.Time `bson:"issuedAt"`
		}
		if err := cursor.Decode(&reqDoc); err != nil {
			continue
		}
		registration, findErr := h.findHackathonRegistrationByID(ctx, reqDoc.RegistrationID)
		if findErr != nil {
			continue
		}

		items = append(items, gin.H{
			"teamId":     registration.TeamID,
			"teamName":   registration.TeamName,
			"leaderName": registration.ContactName,
			"code":       reqDoc.GeneratedCode,
			"issuedAt":   reqDoc.IssuedAt.Format("2006-01-02 15:04:05"),
		})
	}

	c.JSON(http.StatusOK, items)
}

func (h *Handler) generateHackathonIDCardCode(c *gin.Context) {
	var req struct {
		RequestID    int64 `json:"requestId"`
		Participants []struct {
			Name  string `json:"name"`
			Phone string `json:"phone"`
		} `json:"participants"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	if req.RequestID < 1 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "request id is required"})
		return
	}
	if len(req.Participants) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "select at least one participant"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	var requestDoc struct {
		ID             int64 `bson:"id"`
		RegistrationID int64 `bson:"registrationId"`
	}
	err := h.DB.Collection("hackathon_id_card_requests").FindOne(
		ctx,
		bson.M{"id": req.RequestID, "status": "requested"},
	).Decode(&requestDoc)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "request not found or already processed"})
		return
	}

	registration, err := h.findHackathonRegistrationByID(ctx, requestDoc.RegistrationID)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "linked registration not found"})
		return
	}

	available := make(map[string]struct {
		Name  string
		Phone string
		Role  string
	})
	leaderKey := participantLookupKey(registration.ContactName, registration.ContactPhone)
	available[leaderKey] = struct {
		Name  string
		Phone string
		Role  string
	}{
		Name:  registration.ContactName,
		Phone: registration.ContactPhone,
		Role:  "Leader",
	}
	for _, member := range registration.Members {
		memberKey := participantLookupKey(member.Name, member.Phone)
		available[memberKey] = struct {
			Name  string
			Phone string
			Role  string
		}{
			Name:  member.Name,
			Phone: member.Phone,
			Role:  "Member",
		}
	}

	approved := make([]bson.M, 0, len(req.Participants))
	seen := map[string]bool{}
	for _, participant := range req.Participants {
		key := participantLookupKey(participant.Name, participant.Phone)
		item, exists := available[key]
		if !exists {
			c.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("participant not found: %s (%s)", participant.Name, participant.Phone)})
			return
		}
		if seen[key] {
			continue
		}
		seen[key] = true
		approved = append(approved, bson.M{
			"name":            item.Name,
			"phone":           item.Phone,
			"role":            item.Role,
			"normalizedName":  normalizeName(item.Name),
			"normalizedPhone": normalizePhone(item.Phone),
		})
	}
	if len(approved) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "select at least one participant"})
		return
	}

	code := generateFourDigitCode(fmt.Sprintf("%d", requestDoc.RegistrationID))
	now := time.Now()
	_, err = h.DB.Collection("hackathon_id_card_requests").UpdateOne(
		ctx,
		bson.M{"id": requestDoc.ID},
		bson.M{
			"$set": bson.M{
				"status":               "issued",
				"generatedCode":        code,
				"approvedParticipants": approved,
				"issuedAt":             now,
				"updatedAt":            now,
			},
		},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not generate code"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "4-digit code generated successfully.",
		"code":    code,
	})
}

func (h *Handler) registerEsports(c *gin.Context) {
	var req struct {
		TeamName             string `json:"teamName"`
		Game                 string `json:"game"`
		IsCollegeParticipant bool   `json:"isCollegeParticipant"`
		CollegeName          string `json:"collegeName"`
		TeamLeaderName       string `json:"teamLeaderName"`
		TeamLeaderPhone      string `json:"teamLeaderPhone"`
		HasSubstitute        bool   `json:"hasSubstitute"`
		SubstitutePlayer     struct {
			Name           string `json:"name"`
			GameID         string `json:"gameId"`
			WhatsAppNumber string `json:"whatsappNumber"`
		} `json:"substitutePlayer"`
		Members []struct {
			Name           string `json:"name"`
			WhatsAppNumber string `json:"whatsappNumber"`
			GameID         string `json:"gameId"`
			CollegeName    string `json:"collegeName"`
		} `json:"members"`
		RazorpayOrderID   string `json:"razorpayOrderId"`
		RazorpayPaymentID string `json:"razorpayPaymentId"`
		RazorpaySignature string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	game := strings.ToLower(strings.TrimSpace(req.Game))
	memberCount := len(req.Members)
	if req.TeamName == "" || req.TeamLeaderName == "" || req.TeamLeaderPhone == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if req.IsCollegeParticipant && strings.TrimSpace(req.CollegeName) == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "college name is required for college participants"})
		return
	}
	if game != "valorant" && game != "bgmi" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid game"})
		return
	}
	if game == "bgmi" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "BGMI seats are full. Registrations are closed."})
		return
	}
	if (game == "valorant" && memberCount != 5) || (game == "bgmi" && memberCount != 4) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid team size for selected game"})
		return
	}
	for _, member := range req.Members {
		if strings.TrimSpace(member.Name) == "" || strings.TrimSpace(member.WhatsAppNumber) == "" || strings.TrimSpace(member.GameID) == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "all member fields are required"})
			return
		}
	}
	if req.HasSubstitute {
		if strings.TrimSpace(req.SubstitutePlayer.Name) == "" || strings.TrimSpace(req.SubstitutePlayer.GameID) == "" || strings.TrimSpace(req.SubstitutePlayer.WhatsAppNumber) == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "all substitute player fields are required"})
			return
		}
	}
	if !verifyRazorpayPayment(req.RazorpayOrderID, req.RazorpayPaymentID, req.RazorpaySignature, h.Config.RazorpayKeySecret) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payment verification"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "esports_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	_, err = h.DB.Collection("esports_registrations").InsertOne(ctx, bson.M{
		"id":                   id,
		"teamName":             req.TeamName,
		"game":                 game,
		"isCollegeParticipant": req.IsCollegeParticipant,
		"collegeName":          req.CollegeName,
		"teamLeaderName":       req.TeamLeaderName,
		"teamLeaderPhone":      req.TeamLeaderPhone,
		"hasSubstitute":        req.HasSubstitute,
		"substitutePlayer":     req.SubstitutePlayer,
		"memberCount":          memberCount,
		"members":              req.Members,
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
	c.JSON(http.StatusOK, gin.H{"message": "eSports registration saved"})
}

func (h *Handler) registerSoloEsports(c *gin.Context) {
	var req struct {
		Game                 string `json:"game"`
		PlayerName           string `json:"playerName"`
		WhatsAppNumber       string `json:"whatsappNumber"`
		GameID               string `json:"gameId"`
		IsCollegeParticipant bool   `json:"isCollegeParticipant"`
		CollegeName          string `json:"collegeName"`
		RazorpayOrderID      string `json:"razorpayOrderId"`
		RazorpayPaymentID    string `json:"razorpayPaymentId"`
		RazorpaySignature    string `json:"razorpaySignature"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	game := strings.ToLower(strings.TrimSpace(req.Game))
	if game != "valorant" && game != "bgmi" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid game"})
		return
	}
	if game == "bgmi" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "BGMI seats are full. Registrations are closed."})
		return
	}
	if strings.TrimSpace(req.PlayerName) == "" || strings.TrimSpace(req.WhatsAppNumber) == "" || strings.TrimSpace(req.GameID) == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}
	if req.IsCollegeParticipant && strings.TrimSpace(req.CollegeName) == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "college name is required for college participants"})
		return
	}
	if !verifyRazorpayPayment(req.RazorpayOrderID, req.RazorpayPaymentID, req.RazorpaySignature, h.Config.RazorpayKeySecret) {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payment verification"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "esports_solo_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	_, err = h.DB.Collection("esports_solo_registrations").InsertOne(ctx, bson.M{
		"id":                   id,
		"game":                 game,
		"playerName":           strings.TrimSpace(req.PlayerName),
		"whatsappNumber":       strings.TrimSpace(req.WhatsAppNumber),
		"gameId":               strings.TrimSpace(req.GameID),
		"isCollegeParticipant": req.IsCollegeParticipant,
		"collegeName":          strings.TrimSpace(req.CollegeName),
		"isTeamAssigned":       false,
		"refundEligible":       true,
		"payment": bson.M{
			"status":            "paid",
			"razorpayOrderId":   strings.TrimSpace(req.RazorpayOrderID),
			"razorpayPaymentId": strings.TrimSpace(req.RazorpayPaymentID),
		},
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Solo eSports registration saved. You will be matched with random squad teammates. If we cannot complete your team, your amount will be refunded.",
	})
}

func (h *Handler) registerOpenMic(c *gin.Context) {
	var req struct {
		Name             string `json:"name"`
		Phone            string `json:"phone"`
		EnrollmentNumber string `json:"enrollmentNumber"`
		Year             string `json:"year"`
		CollegeName      string `json:"collegeName"`
		PerformanceType  string `json:"performanceType"`
		ScriptPDFURL     string `json:"scriptPdfUrl"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if req.Name == "" || req.Phone == "" || req.EnrollmentNumber == "" || req.Year == "" || req.CollegeName == "" || req.PerformanceType == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	id, err := h.nextID(ctx, "open_mic_registrations")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	_, err = h.DB.Collection("open_mic_registrations").InsertOne(ctx, bson.M{
		"id":               id,
		"name":             req.Name,
		"phone":            req.Phone,
		"enrollmentNumber": req.EnrollmentNumber,
		"year":             req.Year,
		"collegeName":      req.CollegeName,
		"performanceType":  req.PerformanceType,
		"scriptPdfUrl":     req.ScriptPDFURL,
		"createdAt":        time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "registration save failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Open Mic registration saved"})
}

func (h *Handler) registerContact(c *gin.Context) {
	var req struct {
		Email string `json:"email"`
		Phone string `json:"phone"`
		Issue string `json:"issue"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}
	if strings.TrimSpace(req.Email) == "" || strings.TrimSpace(req.Phone) == "" || strings.TrimSpace(req.Issue) == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing fields"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	id, err := h.nextID(ctx, "contact_submissions")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "save failed"})
		return
	}

	_, err = h.DB.Collection("contact_submissions").InsertOne(ctx, bson.M{
		"id":        id,
		"email":     strings.TrimSpace(req.Email),
		"phone":     strings.TrimSpace(req.Phone),
		"issue":     strings.TrimSpace(req.Issue),
		"createdAt": time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "save failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Contact submitted successfully"})
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
		amount = 30000
	case "kinetic-showdown", "robo-race":
		amount = 30000
	case "esports-valorant":
		amount = 30000
	case "esports-bgmi":
		c.JSON(http.StatusBadRequest, gin.H{"error": "BGMI seats are full. Registrations are closed."})
		return
	case "esports-solo-valorant":
		amount = 6000
	case "esports-solo-bgmi":
		c.JSON(http.StatusBadRequest, gin.H{"error": "BGMI seats are full. Registrations are closed."})
		return
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
	imageURL, err := uploadToCloudinary(file, h.Config, "image")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"imageUrl": imageURL})
}

func (h *Handler) uploadDocument(c *gin.Context) {
	if h.Config.CloudinaryCloudName == "" || h.Config.CloudinaryAPIKey == "" || h.Config.CloudinaryAPISecret == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cloudinary keys not set"})
		return
	}
	file, err := c.FormFile("document")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing file"})
		return
	}
	documentURL, err := uploadToCloudinary(file, h.Config, "raw")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"documentUrl": documentURL})
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
		"imageUrl":    req.ImageURL,
		"sortOrder":   0,
		"createdAt":   time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not save"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Cultural event saved"})
}

func (h *Handler) updateGlimpse(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

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
	res, err := h.DB.Collection("gallery").UpdateOne(ctx, bson.M{"id": id}, bson.M{
		"$set": bson.M{
			"title":       req.Title,
			"preview":     req.Preview,
			"description": req.Description,
			"imageUrl":    req.ImageURL,
		},
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "update failed"})
		return
	}
	if res.MatchedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Gallery item updated"})
}

func (h *Handler) deleteGlimpse(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	res, err := h.DB.Collection("gallery").DeleteOne(ctx, bson.M{"id": id})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "delete failed"})
		return
	}
	if res.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Gallery item deleted"})
}

func (h *Handler) updateTeamMember(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

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
	res, err := h.DB.Collection("team_members").UpdateOne(ctx, bson.M{"id": id}, bson.M{
		"$set": bson.M{
			"name":     req.Name,
			"role":     req.Role,
			"preview":  req.Preview,
			"about":    req.About,
			"imageUrl": req.ImageURL,
		},
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "update failed"})
		return
	}
	if res.MatchedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Team member updated"})
}

func (h *Handler) deleteTeamMember(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	res, err := h.DB.Collection("team_members").DeleteOne(ctx, bson.M{"id": id})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "delete failed"})
		return
	}
	if res.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Team member deleted"})
}

func (h *Handler) updateCulturalEvent(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

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
	res, err := h.DB.Collection("cultural_events").UpdateOne(ctx, bson.M{"id": id}, bson.M{
		"$set": bson.M{
			"title":       req.Title,
			"preview":     req.Preview,
			"description": req.Description,
			"imageUrl":    req.ImageURL,
		},
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "update failed"})
		return
	}
	if res.MatchedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Cultural event updated"})
}

func (h *Handler) deleteCulturalEvent(c *gin.Context) {
	id, ok := parsePathID(c)
	if !ok {
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()
	res, err := h.DB.Collection("cultural_events").DeleteOne(ctx, bson.M{"id": id})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "delete failed"})
		return
	}
	if res.DeletedCount == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "item not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Cultural event deleted"})
}

func parsePathID(c *gin.Context) (int64, bool) {
	rawID := c.Param("id")
	id, err := strconv.ParseInt(rawID, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid id"})
		return 0, false
	}
	return id, true
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
			ID          int64  `bson:"id"`
			WorkshopID  int64  `bson:"workshopId"`
			Name        string `bson:"name"`
			Email       string `bson:"email"`
			Phone       string `bson:"phone"`
			CollegeName string `bson:"collegeName"`
			Payment     struct {
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
				CollegeName:   reg.CollegeName,
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

	var items []models.RoboRegistration
	appendFromCursor := func(cursor *mongo.Cursor, legacyMode bool) {
		defer cursor.Close(ctx)
		for cursor.Next(ctx) {
			var reg struct {
				ID             int64  `bson:"id"`
				TeamName       string `bson:"teamName"`
				TeamLeaderName string `bson:"teamLeaderName"`
				Email          string `bson:"email"`
				Phone          string `bson:"phone"`
				CollegeName    string `bson:"collegeName"`
				MemberCount    int    `bson:"memberCount"`
				Members        []struct {
					Name        string `bson:"name"`
					Email       string `bson:"email"`
					Phone       string `bson:"phone"`
					Branch      string `bson:"branch"`
					Semester    string `bson:"semester"`
					CollegeName string `bson:"collegeName"`
				} `bson:"members"`
				Payment struct {
					Status            string `bson:"status"`
					RazorpayOrderID   string `bson:"razorpayOrderId"`
					RazorpayPaymentID string `bson:"razorpayPaymentId"`
				} `bson:"payment"`
				CreatedAt time.Time `bson:"createdAt"`
			}
			if err := cursor.Decode(&reg); err == nil {
				if legacyMode {
					if reg.TeamLeaderName == "" {
						reg.TeamLeaderName = reg.TeamName
					}
					if reg.CollegeName == "" {
						reg.CollegeName = "N/A"
					}
				}
				members := make([]models.RoboMember, 0, len(reg.Members))
				for _, m := range reg.Members {
					memberCollege := m.CollegeName
					if memberCollege == "" {
						memberCollege = reg.CollegeName
					}
					members = append(members, models.RoboMember{
						Name:        m.Name,
						Email:       m.Email,
						Phone:       m.Phone,
						Branch:      m.Branch,
						Semester:    m.Semester,
						CollegeName: memberCollege,
					})
				}
				items = append(items, models.RoboRegistration{
					ID:            reg.ID,
					TeamName:      reg.TeamName,
					CaptainName:   reg.TeamLeaderName,
					Email:         reg.Email,
					Phone:         reg.Phone,
					RobotName:     "Kinetic Showdown Team",
					CollegeName:   reg.CollegeName,
					MemberCount:   maxInt(reg.MemberCount, len(members)),
					Members:       members,
					PaymentStatus: reg.Payment.Status,
					PaymentID:     reg.Payment.RazorpayPaymentID,
					CreatedAt:     reg.CreatedAt.Format("2006-01-02 15:04:05"),
				})
			}
		}
	}

	newCursor, err := h.DB.Collection("kinetic_showdown_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err == nil {
		appendFromCursor(newCursor, false)
	}
	legacyCursor, legacyErr := h.DB.Collection("robo_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if legacyErr == nil {
		appendFromCursor(legacyCursor, true)
	}

	if err != nil && legacyErr != nil {
		c.JSON(http.StatusOK, []models.RoboRegistration{})
		return
	}

	sort.Slice(items, func(i, j int) bool {
		return items[i].CreatedAt > items[j].CreatedAt
	})
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
			CollegeName  string `bson:"collegeName"`
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
				CollegeName:   reg.CollegeName,
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

func (h *Handler) getEsportsRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("esports_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.EsportsRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.EsportsRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID                   int64  `bson:"id"`
			TeamName             string `bson:"teamName"`
			Game                 string `bson:"game"`
			IsCollegeParticipant bool   `bson:"isCollegeParticipant"`
			CollegeName          string `bson:"collegeName"`
			TeamLeaderName       string `bson:"teamLeaderName"`
			TeamLeaderEmail      string `bson:"teamLeaderEmail"`
			TeamLeaderPhone      string `bson:"teamLeaderPhone"`
			HasSubstitute        bool   `bson:"hasSubstitute"`
			SubstitutePlayer     struct {
				Name           string `bson:"name"`
				GameID         string `bson:"gameId"`
				WhatsAppNumber string `bson:"whatsappNumber"`
			} `bson:"substitutePlayer"`
			MemberCount int `bson:"memberCount"`
			Members     []struct {
				Name           string `bson:"name"`
				WhatsAppNumber string `bson:"whatsappNumber"`
				Branch         string `bson:"branch"`
				GameID         string `bson:"gameId"`
				CollegeName    string `bson:"collegeName"`
			} `bson:"members"`
			Payment struct {
				Status            string `bson:"status"`
				RazorpayPaymentID string `bson:"razorpayPaymentId"`
			} `bson:"payment"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			members := make([]models.EsportsMember, 0, len(reg.Members))
			for _, m := range reg.Members {
				members = append(members, models.EsportsMember{
					Name:           m.Name,
					WhatsAppNumber: firstNonEmpty(strings.TrimSpace(m.WhatsAppNumber), strings.TrimSpace(m.Branch)),
					GameID:         m.GameID,
					CollegeName:    m.CollegeName,
				})
			}
			items = append(items, models.EsportsRegistration{
				ID:                   reg.ID,
				TeamName:             reg.TeamName,
				Game:                 reg.Game,
				IsCollegeParticipant: reg.IsCollegeParticipant,
				CollegeName:          reg.CollegeName,
				TeamLeaderName:       reg.TeamLeaderName,
				TeamLeaderEmail:      reg.TeamLeaderEmail,
				TeamLeaderPhone:      reg.TeamLeaderPhone,
				HasSubstitute:        reg.HasSubstitute,
				SubstitutePlayer: models.EsportsSubstitute{
					Name:           reg.SubstitutePlayer.Name,
					GameID:         reg.SubstitutePlayer.GameID,
					WhatsAppNumber: reg.SubstitutePlayer.WhatsAppNumber,
				},
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

func (h *Handler) getSoloEsportsRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("esports_solo_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.SoloEsportsRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.SoloEsportsRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID                   int64  `bson:"id"`
			Game                 string `bson:"game"`
			PlayerName           string `bson:"playerName"`
			WhatsAppNumber       string `bson:"whatsappNumber"`
			GameID               string `bson:"gameId"`
			IsCollegeParticipant bool   `bson:"isCollegeParticipant"`
			CollegeName          string `bson:"collegeName"`
			IsTeamAssigned       bool   `bson:"isTeamAssigned"`
			AssignedTeamID       int64  `bson:"assignedTeamId"`
			RefundEligible       bool   `bson:"refundEligible"`
			Payment              struct {
				Status            string `bson:"status"`
				RazorpayPaymentID string `bson:"razorpayPaymentId"`
			} `bson:"payment"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.SoloEsportsRegistration{
				ID:                   reg.ID,
				Game:                 reg.Game,
				PlayerName:           reg.PlayerName,
				WhatsAppNumber:       reg.WhatsAppNumber,
				GameID:               reg.GameID,
				IsCollegeParticipant: reg.IsCollegeParticipant,
				CollegeName:          reg.CollegeName,
				IsTeamAssigned:       reg.IsTeamAssigned,
				AssignedTeamID:       reg.AssignedTeamID,
				RefundEligible:       reg.RefundEligible,
				PaymentStatus:        reg.Payment.Status,
				PaymentID:            reg.Payment.RazorpayPaymentID,
				CreatedAt:            reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) createSoloEsportsRandomTeam(c *gin.Context) {
	var req struct {
		Game string `json:"game"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid payload"})
		return
	}

	game := strings.ToLower(strings.TrimSpace(req.Game))
	teamSize := 0
	switch game {
	case "bgmi":
		teamSize = 4
	case "valorant":
		teamSize = 5
	default:
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid game"})
		return
	}

	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("esports_solo_registrations").Find(
		ctx,
		bson.M{"game": game, "isTeamAssigned": false},
		options.Find().SetSort(bson.D{{Key: "createdAt", Value: 1}}).SetLimit(int64(teamSize)),
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not fetch solo registrations"})
		return
	}
	defer cursor.Close(ctx)

	type soloCandidate struct {
		ID             int64  `bson:"id"`
		PlayerName     string `bson:"playerName"`
		WhatsAppNumber string `bson:"whatsappNumber"`
		GameID         string `bson:"gameId"`
		CollegeName    string `bson:"collegeName"`
	}
	var picked []soloCandidate
	for cursor.Next(ctx) {
		var row soloCandidate
		if err := cursor.Decode(&row); err == nil {
			picked = append(picked, row)
		}
	}
	if len(picked) < teamSize {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   fmt.Sprintf("not enough solo players to create a %s squad yet", strings.ToUpper(game)),
			"message": "Players who are still unmatched remain refund-eligible.",
		})
		return
	}

	randomTeamID, err := h.nextID(ctx, "esports_solo_random_teams")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create random team"})
		return
	}

	members := make([]bson.M, 0, len(picked))
	registrationIDs := make([]int64, 0, len(picked))
	for _, player := range picked {
		registrationIDs = append(registrationIDs, player.ID)
		members = append(members, bson.M{
			"soloRegistrationId": player.ID,
			"name":               player.PlayerName,
			"whatsappNumber":     player.WhatsAppNumber,
			"gameId":             player.GameID,
			"collegeName":        player.CollegeName,
		})
	}

	teamCode := generateTeamCode(game)
	_, err = h.DB.Collection("esports_solo_random_teams").InsertOne(ctx, bson.M{
		"id":              randomTeamID,
		"teamCode":        teamCode,
		"game":            game,
		"teamSize":        teamSize,
		"memberCount":     len(members),
		"registrationIds": registrationIDs,
		"members":         members,
		"createdAt":       time.Now(),
	})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "could not create random team"})
		return
	}

	_, err = h.DB.Collection("esports_solo_registrations").UpdateMany(
		ctx,
		bson.M{"id": bson.M{"$in": registrationIDs}},
		bson.M{
			"$set": bson.M{
				"isTeamAssigned": true,
				"assignedTeamId": randomTeamID,
				"refundEligible": false,
				"assignedAt":     time.Now(),
			},
		},
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "team was created but assignment update failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message":  fmt.Sprintf("Random %s squad created with %d players", strings.ToUpper(game), teamSize),
		"teamId":   randomTeamID,
		"teamCode": teamCode,
	})
}

func (h *Handler) getSoloEsportsRandomTeams(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("esports_solo_random_teams").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.SoloEsportsRandomTeam{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.SoloEsportsRandomTeam
	for cursor.Next(ctx) {
		var reg struct {
			ID          int64  `bson:"id"`
			TeamCode    string `bson:"teamCode"`
			Game        string `bson:"game"`
			TeamSize    int    `bson:"teamSize"`
			MemberCount int    `bson:"memberCount"`
			Members     []struct {
				SoloRegistrationID int64  `bson:"soloRegistrationId"`
				Name               string `bson:"name"`
				WhatsAppNumber     string `bson:"whatsappNumber"`
				GameID             string `bson:"gameId"`
				CollegeName        string `bson:"collegeName"`
			} `bson:"members"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			teamMembers := make([]models.SoloEsportsRandomTeamMember, 0, len(reg.Members))
			for _, member := range reg.Members {
				teamMembers = append(teamMembers, models.SoloEsportsRandomTeamMember{
					SoloRegistrationID: member.SoloRegistrationID,
					Name:               member.Name,
					WhatsAppNumber:     member.WhatsAppNumber,
					GameID:             member.GameID,
					CollegeName:        member.CollegeName,
				})
			}
			items = append(items, models.SoloEsportsRandomTeam{
				ID:          reg.ID,
				TeamCode:    reg.TeamCode,
				Game:        reg.Game,
				TeamSize:    reg.TeamSize,
				MemberCount: reg.MemberCount,
				Members:     teamMembers,
				CreatedAt:   reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getOpenMicRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("open_mic_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.OpenMicRegistration{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.OpenMicRegistration
	for cursor.Next(ctx) {
		var reg struct {
			ID               int64     `bson:"id"`
			Name             string    `bson:"name"`
			Email            string    `bson:"email"`
			Phone            string    `bson:"phone"`
			EnrollmentNumber string    `bson:"enrollmentNumber"`
			Year             string    `bson:"year"`
			CollegeName      string    `bson:"collegeName"`
			PerformanceType  string    `bson:"performanceType"`
			ScriptPDFURL     string    `bson:"scriptPdfUrl"`
			CreatedAt        time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.OpenMicRegistration{
				ID:               reg.ID,
				Name:             reg.Name,
				Email:            reg.Email,
				Phone:            reg.Phone,
				EnrollmentNumber: reg.EnrollmentNumber,
				Year:             reg.Year,
				CollegeName:      reg.CollegeName,
				PerformanceType:  reg.PerformanceType,
				ScriptPDFURL:     reg.ScriptPDFURL,
				CreatedAt:        reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

func (h *Handler) getContactRegistrations(c *gin.Context) {
	ctx, cancel := h.ctx()
	defer cancel()

	cursor, err := h.DB.Collection("contact_submissions").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		c.JSON(http.StatusOK, []models.ContactSubmission{})
		return
	}
	defer cursor.Close(ctx)

	var items []models.ContactSubmission
	for cursor.Next(ctx) {
		var reg struct {
			ID        int64     `bson:"id"`
			Email     string    `bson:"email"`
			Phone     string    `bson:"phone"`
			Issue     string    `bson:"issue"`
			CreatedAt time.Time `bson:"createdAt"`
		}
		if err := cursor.Decode(&reg); err == nil {
			items = append(items, models.ContactSubmission{
				ID:        reg.ID,
				Email:     reg.Email,
				Phone:     reg.Phone,
				Issue:     reg.Issue,
				CreatedAt: reg.CreatedAt.Format("2006-01-02 15:04:05"),
			})
		}
	}
	c.JSON(http.StatusOK, items)
}

type hackathonRegistrationDoc struct {
	ID           int64  `bson:"id"`
	TeamID       string `bson:"teamId"`
	TeamName     string `bson:"teamName"`
	ContactName  string `bson:"contactName"`
	ContactPhone string `bson:"contactPhone"`
	CollegeName  string `bson:"collegeName"`
	Members      []struct {
		Name   string `bson:"name"`
		Phone  string `bson:"phone"`
		Gender string `bson:"gender"`
	} `bson:"members"`
}

type hackathonIDCardData struct {
	TeamName         string `json:"teamName"`
	CollegeName      string `json:"collegeName"`
	ParticipantName  string `json:"participantName"`
	ParticipantPhone string `json:"participantPhone"`
	Role             string `json:"role"`
	TeamID           int64  `json:"teamId"`
	TeamCode         string `json:"teamCode"`
	IssuedAt         string `json:"issuedAt"`
}

func (h *Handler) findHackathonRegistrationByID(ctx context.Context, registrationID int64) (hackathonRegistrationDoc, error) {
	var registration hackathonRegistrationDoc
	err := h.DB.Collection("hackathon_registrations").FindOne(ctx, hackathonRegistrationIDFilter(registrationID)).Decode(&registration)
	if err != nil {
		return hackathonRegistrationDoc{}, err
	}
	if strings.TrimSpace(registration.TeamID) == "" {
		registration.TeamID = canonicalHackathonTeamID(registration.ID)
		_, _ = h.DB.Collection("hackathon_registrations").UpdateOne(
			ctx,
			hackathonRegistrationIDFilter(registration.ID),
			bson.M{"$set": bson.M{"teamId": registration.TeamID}},
		)
	}
	return registration, nil
}

func (h *Handler) findHackathonRegistrationByPhone(ctx context.Context, normalizedPhone string) (hackathonRegistrationDoc, error) {
	cursor, err := h.DB.Collection("hackathon_registrations").Find(ctx, bson.D{}, options.Find().SetSort(bson.D{{Key: "createdAt", Value: -1}}))
	if err != nil {
		return hackathonRegistrationDoc{}, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var registration hackathonRegistrationDoc
		if err := cursor.Decode(&registration); err != nil {
			continue
		}
		if normalizePhone(registration.ContactPhone) == normalizedPhone {
			if strings.TrimSpace(registration.TeamID) == "" {
				registration.TeamID = canonicalHackathonTeamID(registration.ID)
				_, _ = h.DB.Collection("hackathon_registrations").UpdateOne(
					ctx,
					hackathonRegistrationIDFilter(registration.ID),
					bson.M{"$set": bson.M{"teamId": registration.TeamID}},
				)
			}
			return registration, nil
		}
	}
	return hackathonRegistrationDoc{}, mongo.ErrNoDocuments
}

func (h *Handler) findHackathonRegistrationByInputTeamID(ctx context.Context, input string) (hackathonRegistrationDoc, error) {
	normalized := strings.ToUpper(strings.TrimSpace(input))
	if normalized != "" {
		var byTeamID hackathonRegistrationDoc
		err := h.DB.Collection("hackathon_registrations").FindOne(ctx, bson.M{"teamId": normalized}).Decode(&byTeamID)
		if err == nil {
			if strings.TrimSpace(byTeamID.TeamID) == "" {
				byTeamID.TeamID = canonicalHackathonTeamID(byTeamID.ID)
				_, _ = h.DB.Collection("hackathon_registrations").UpdateOne(
					ctx,
					hackathonRegistrationIDFilter(byTeamID.ID),
					bson.M{"$set": bson.M{"teamId": byTeamID.TeamID}},
				)
			}
			return byTeamID, nil
		}
		if err != mongo.ErrNoDocuments {
			return hackathonRegistrationDoc{}, err
		}

		regexPattern := "^" + regexp.QuoteMeta(normalized) + "$"
		err = h.DB.Collection("hackathon_registrations").FindOne(
			ctx,
			bson.M{"teamId": bson.M{"$regex": regexPattern, "$options": "i"}},
		).Decode(&byTeamID)
		if err == nil {
			if strings.TrimSpace(byTeamID.TeamID) == "" {
				byTeamID.TeamID = canonicalHackathonTeamID(byTeamID.ID)
			} else {
				byTeamID.TeamID = strings.ToUpper(strings.TrimSpace(byTeamID.TeamID))
			}
			_, _ = h.DB.Collection("hackathon_registrations").UpdateOne(
				ctx,
				hackathonRegistrationIDFilter(byTeamID.ID),
				bson.M{"$set": bson.M{"teamId": byTeamID.TeamID}},
			)
			return byTeamID, nil
		}
		if err != mongo.ErrNoDocuments {
			return hackathonRegistrationDoc{}, err
		}
	}

	id, err := parseHackathonTeamID(normalized)
	if err != nil {
		return hackathonRegistrationDoc{}, err
	}
	return h.findHackathonRegistrationByID(ctx, id)
}

func parseHackathonTeamID(input string) (int64, error) {
	value := strings.ToUpper(strings.TrimSpace(input))
	value = strings.TrimPrefix(value, "CH-")
	value = strings.TrimPrefix(value, "CH")
	if value == "" {
		return 0, fmt.Errorf("invalid team id")
	}
	for _, r := range value {
		if r < '0' || r > '9' {
			return 0, fmt.Errorf("invalid team id")
		}
	}
	id, err := strconv.ParseInt(value, 10, 64)
	if err != nil || id < 1 {
		return 0, fmt.Errorf("invalid team id")
	}
	return id, nil
}

func canonicalHackathonTeamID(id int64) string {
	return fmt.Sprintf("CH-%d", id)
}

func hackathonRegistrationIDFilter(id int64) bson.M {
	return bson.M{
		"$or": []bson.M{
			{"id": id},
			{"id": int32(id)},
			{"id": int(id)},
		},
	}
}

func (h *Handler) resolveHackathonIDCard(ctx context.Context, phone, code string) (hackathonIDCardData, error) {
	normalizedPhone := normalizePhone(phone)

	var requestDoc struct {
		RegistrationID       int64  `bson:"registrationId"`
		GeneratedCode        string `bson:"generatedCode"`
		ApprovedParticipants []struct {
			Name            string `bson:"name"`
			Phone           string `bson:"phone"`
			Role            string `bson:"role"`
			NormalizedPhone string `bson:"normalizedPhone"`
		} `bson:"approvedParticipants"`
		IssuedAt time.Time `bson:"issuedAt"`
	}
	err := h.DB.Collection("hackathon_id_card_requests").FindOne(
		ctx,
		bson.M{
			"status":        "issued",
			"generatedCode": strings.TrimSpace(code),
			"approvedParticipants": bson.M{
				"$elemMatch": bson.M{
					"normalizedPhone": normalizedPhone,
				},
			},
		},
	).Decode(&requestDoc)
	if err != nil {
		return hackathonIDCardData{}, err
	}

	registration, err := h.findHackathonRegistrationByID(ctx, requestDoc.RegistrationID)
	if err != nil {
		return hackathonIDCardData{}, err
	}

	role := "Participant"
	participantName := ""
	participantPhone := phone
	for _, participant := range requestDoc.ApprovedParticipants {
		if participant.NormalizedPhone == normalizedPhone {
			if strings.TrimSpace(participant.Role) != "" {
				role = participant.Role
			}
			if strings.TrimSpace(participant.Name) != "" {
				participantName = strings.TrimSpace(participant.Name)
			}
			if strings.TrimSpace(participant.Phone) != "" {
				participantPhone = strings.TrimSpace(participant.Phone)
			}
			break
		}
	}

	if participantName == "" {
		return hackathonIDCardData{}, mongo.ErrNoDocuments
	}

	return hackathonIDCardData{
		TeamName:         registration.TeamName,
		CollegeName:      registration.CollegeName,
		ParticipantName:  participantName,
		ParticipantPhone: participantPhone,
		Role:             role,
		TeamID:           registration.ID,
		TeamCode:         requestDoc.GeneratedCode,
		IssuedAt:         requestDoc.IssuedAt.Format("2006-01-02 15:04:05"),
	}, nil
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

func uploadToCloudinary(file *multipart.FileHeader, cfg config.Config, resourceType string) (string, error) {
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

	if resourceType == "" {
		resourceType = "image"
	}
	endpoint := fmt.Sprintf("https://api.cloudinary.com/v1_1/%s/%s/upload", cfg.CloudinaryCloudName, resourceType)
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

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		trimmed := strings.TrimSpace(value)
		if trimmed != "" {
			return trimmed
		}
	}
	return ""
}

func normalizeName(value string) string {
	parts := strings.Fields(strings.ToLower(strings.TrimSpace(value)))
	return strings.Join(parts, " ")
}

func slugifyForFilename(value string) string {
	trimmed := strings.TrimSpace(strings.ToLower(value))
	if trimmed == "" {
		return "participant"
	}

	var b strings.Builder
	lastDash := false
	for _, r := range trimmed {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			b.WriteRune(r)
			lastDash = false
			continue
		}
		if !lastDash {
			b.WriteByte('-')
			lastDash = true
		}
	}
	out := strings.Trim(b.String(), "-")
	if out == "" {
		return "participant"
	}
	return out
}

func buildHackathonIDCardSVG(card hackathonIDCardData) string {
	name := html.EscapeString(card.ParticipantName)
	phone := html.EscapeString(card.ParticipantPhone)
	role := html.EscapeString(card.Role)
	team := html.EscapeString(card.TeamName)
	college := html.EscapeString(card.CollegeName)
	teamCode := html.EscapeString(card.TeamCode)
	issuedAt := html.EscapeString(card.IssuedAt)
	teamID := fmt.Sprintf("CH-%d", card.TeamID)

	return fmt.Sprintf(
		`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%%" stop-color="#0f172a"/>
      <stop offset="100%%" stop-color="#1d4ed8"/>
    </linearGradient>
    <linearGradient id="panel" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%%" stop-color="#ffffff" stop-opacity="0.06"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="1200" height="720" fill="url(#bg)"/>
  <rect x="36" y="36" width="1128" height="648" rx="28" fill="url(#panel)" stroke="#ffffff" stroke-opacity="0.45" stroke-width="2"/>
  <text x="84" y="118" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="56" font-weight="800" letter-spacing="2">CODEHUNT HACKATHON</text>
  <text x="84" y="164" fill="#dbeafe" font-family="Manrope, Arial, sans-serif" font-size="30" font-weight="700">Official e-ID Card</text>

  <rect x="84" y="212" width="1032" height="404" rx="20" fill="#0b1222" fill-opacity="0.46" stroke="#ffffff" stroke-opacity="0.24"/>

  <text x="116" y="286" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700">Name</text>
  <text x="330" y="286" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="28">%s</text>

  <text x="116" y="346" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700">Mobile</text>
  <text x="330" y="346" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="28">%s</text>

  <text x="116" y="406" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700">Role</text>
  <text x="330" y="406" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="28">%s</text>

  <text x="116" y="466" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700">Team Name</text>
  <text x="330" y="466" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="28">%s</text>

  <text x="116" y="526" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="26" font-weight="700">Team Code</text>
  <text x="330" y="526" fill="#fde68a" font-family="Manrope, Arial, sans-serif" font-size="34" font-weight="800">%s</text>

  <text x="116" y="586" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="24" font-weight="700">Team ID</text>
  <text x="330" y="586" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="24">%s</text>

  <text x="740" y="286" fill="#bfdbfe" font-family="Manrope, Arial, sans-serif" font-size="24" font-weight="700">College</text>
  <text x="740" y="328" fill="#ffffff" font-family="Manrope, Arial, sans-serif" font-size="24">%s</text>
  <text x="740" y="586" fill="#cbd5e1" font-family="Manrope, Arial, sans-serif" font-size="20">Issued: %s</text>
</svg>`,
		name, phone, role, team, teamCode, teamID, college, issuedAt,
	)
}

func normalizePhone(value string) string {
	trimmed := strings.TrimSpace(value)
	digits := make([]rune, 0, len(trimmed))
	for _, r := range trimmed {
		if r >= '0' && r <= '9' {
			digits = append(digits, r)
		}
	}
	return string(digits)
}

func participantLookupKey(name, phone string) string {
	return normalizeName(name) + "|" + normalizePhone(phone)
}

func generateFourDigitCode(seed string) string {
	raw := fmt.Sprintf("%s-%d", seed, time.Now().UnixNano())
	hash := sha1.Sum([]byte(raw))
	value := int(hash[0])<<8 + int(hash[1])
	code := (value % 9000) + 1000
	return fmt.Sprintf("%04d", code)
}

func generateTeamCode(seed string) string {
	now := time.Now().UnixNano()
	raw := fmt.Sprintf("%s-%d", strings.ToUpper(seed), now)
	hash := sha1.Sum([]byte(raw))
	return strings.ToUpper(hex.EncodeToString(hash[:])[:6])
}
