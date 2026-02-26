package db

import (
	"context"
	"fmt"
	"log"
	"strings"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Connect(uri, dbName string) *mongo.Database {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatalf("mongo connect: %v", err)
	}
	if err := client.Ping(ctx, nil); err != nil {
		log.Fatalf("mongo ping: %v", err)
	}

	return client.Database(dbName)
}

func SeedDefaults(database *mongo.Database) error {
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	type landingDoc struct {
		ID           int64    `bson:"id"`
		HeroTitle    string   `bson:"heroTitle"`
		HeroSubtitle string   `bson:"heroSubtitle"`
		Dates        string   `bson:"dates"`
		Location     string   `bson:"location"`
		Highlights   []string `bson:"highlights"`
	}

	landing := database.Collection("landing_content")
	landingCount, err := landing.CountDocuments(ctx, bson.D{})
	if err != nil {
		return fmt.Errorf("landing count: %w", err)
	}
	if landingCount == 0 {
		_, err = landing.InsertOne(ctx, landingDoc{
			ID:           1,
			HeroTitle:    "INERTIA 2.0: JEC Annual Tech Fest",
			HeroSubtitle: "A flagship techno-management festival by Jabalpur Engineering College — featuring hackathons, workshops, expos, automotive challenges, and cultural nights.",
			Dates:        "Coming 2026",
			Location:     "Jabalpur Engineering College, Jabalpur, Madhya Pradesh",
			Highlights: []string{
				"CodeHunt Hackathon",
				"Workshop Series",
				"Kinetic Showdown",
				"eSports Arena",
				"Open Mic Stage",
				"DJ Night & Culture Fest",
			},
		})
		if err != nil {
			return fmt.Errorf("landing seed: %w", err)
		}
	}

	events := database.Collection("events")
	eventsCount, err := events.CountDocuments(ctx, bson.D{})
	if err != nil {
		return fmt.Errorf("events count: %w", err)
	}
	if eventsCount == 0 {
		_, err = events.InsertMany(ctx, []interface{}{
			bson.M{"id": 1, "slug": "hackathon", "title": "CodeHunt Hackathon", "description": "2-day hackathon: prototype build on 26 Feb and stage presentation on 27 Feb. Team size is fixed to 4 (1 leader + 3 members).", "dateLabel": "26-27 Feb", "ctaLabel": "Register Hackathon", "sortOrder": 1},
			bson.M{"id": 2, "slug": "workshops", "title": "Workshops", "description": "Hands-on sessions with industry mentors and sponsor-backed tracks.", "dateLabel": "2 Days", "ctaLabel": "Register Workshop", "sortOrder": 2},
			bson.M{"id": 3, "slug": "kinetic-showdown", "title": "Kinetic Showdown", "description": "Build and race your custom RC car team in a timed challenge.", "dateLabel": "Final Day", "ctaLabel": "Register Team", "sortOrder": 3},
			bson.M{"id": 4, "slug": "esports", "title": "eSports", "description": "Compete in Valorant or BGMI with your squad.", "dateLabel": "Tournament", "ctaLabel": "Register eSports", "sortOrder": 4},
			bson.M{"id": 5, "slug": "open-mic", "title": "Open Mic", "description": "Showcase your performance on the cultural stage.", "dateLabel": "Open Stage", "ctaLabel": "Register Open Mic", "sortOrder": 5},
		})
		if err != nil {
			return fmt.Errorf("events seed: %w", err)
		}
	}

	faqs := database.Collection("faqs")
	faqCount, err := faqs.CountDocuments(ctx, bson.D{})
	if err != nil {
		return fmt.Errorf("faq count: %w", err)
	}
	if faqCount == 0 {
		_, err = faqs.InsertMany(ctx, []interface{}{
			bson.M{"id": 1, "question": "What is the hackathon schedule?", "answer": "Day 1 (26 Feb): build the prototype. Day 2 (27 Feb): present and explain it on stage.", "sortOrder": 1},
			bson.M{"id": 9, "question": "What is the hackathon team size?", "answer": "Team size is fixed to 4 members: 1 leader + 3 members.", "sortOrder": 9},
			bson.M{"id": 2, "question": "Do workshops require payment?", "answer": "Yes. Workshop registrations are paid via Razorpay.", "sortOrder": 2},
			bson.M{"id": 3, "question": "What are the eSports team sizes?", "answer": "Valorant requires 5 players and BGMI requires 4 players.", "sortOrder": 3},
			bson.M{"id": 4, "question": "Where is the venue?", "answer": "All events take place at the Jabalpur Engineering College campus.", "sortOrder": 4},
			bson.M{"id": 5, "question": "Can I register for multiple events?", "answer": "Yes, you can register for hackathon, workshops, kinetic showdown, eSports, and open mic.", "sortOrder": 5},
			bson.M{"id": 6, "question": "How do I get updates?", "answer": "Follow official Inertia channels and watch the website for schedule updates.", "sortOrder": 6},
			bson.M{"id": 7, "question": "How can my company participate?", "answer": "Contact the organizing team using the details on the Contact page.", "sortOrder": 7},
			bson.M{"id": 8, "question": "Does INERTIA host expos?", "answer": "Yes, the fest includes a Startup & Project Expo along with Defense and Automotive showcases.", "sortOrder": 8},
		})
		if err != nil {
			return fmt.Errorf("faq seed: %w", err)
		}
	}

	workshops := database.Collection("workshops")
	workshopCount, err := workshops.CountDocuments(ctx, bson.D{})
	if err != nil {
		return fmt.Errorf("workshops count: %w", err)
	}
	if workshopCount == 0 {
		_, err = workshops.InsertMany(ctx, []interface{}{
			bson.M{"id": 1, "title": "Generative AI Bootcamp", "description": "Prompt engineering, RAG, and agent workflows.", "sortOrder": 1},
			bson.M{"id": 2, "title": "ML Ops Fundamentals", "description": "Deploy models with monitoring and pipelines.", "sortOrder": 2},
			bson.M{"id": 3, "title": "Computer Vision Sprint", "description": "Build detection and tracking models.", "sortOrder": 3},
		})
		if err != nil {
			return fmt.Errorf("workshops seed: %w", err)
		}
	}

	if err := seedLateHackathonTeams(ctx, database); err != nil {
		return fmt.Errorf("late hackathon team seed: %w", err)
	}

	return nil
}

func seedLateHackathonTeams(ctx context.Context, database *mongo.Database) error {
	type member struct {
		Name   string
		Phone  string
		Gender string
	}
	type lateTeam struct {
		TeamName     string
		ContactName  string
		ContactPhone string
		CollegeName  string
		Members      []member
	}

	teams := []lateTeam{
		{
			TeamName:     "TECH_DEVELOPER",
			ContactName:  "ARPIT KUMAR MISHRA",
			ContactPhone: "7869471763",
			CollegeName:  "Jabalpur Engineering College",
			Members: []member{
				{Name: "RAHUL CHELANI", Phone: "7089812343", Gender: "male"},
				{Name: "PULKIT HARDAHA", Phone: "8827423234", Gender: "male"},
				{Name: "SHRISHTI GUPTA", Phone: "9753448774", Gender: "female"},
			},
		},
		{
			TeamName:     "Kinetic Aakash",
			ContactName:  "Aakash Sharma",
			ContactPhone: "8989607974",
			CollegeName:  "Jabalpur Engineering College",
			Members: []member{
				{Name: "Bhakti Maheshwari", Phone: "9977457170", Gender: "female"},
				{Name: "Sahil Patel", Phone: "9407157964", Gender: "male"},
				{Name: "Aaditya Singh Baghel", Phone: "6264479341", Gender: "male"},
			},
		},
	}

	registrations := database.Collection("hackathon_registrations")

	var last struct {
		ID int64 `bson:"id"`
	}
	err := registrations.FindOne(
		ctx,
		bson.D{},
		options.FindOne().SetSort(bson.D{{Key: "id", Value: -1}}).SetProjection(bson.M{"id": 1}),
	).Decode(&last)
	if err != nil && err != mongo.ErrNoDocuments {
		return err
	}
	nextID := int64(1)
	if err == nil && last.ID > 0 {
		nextID = last.ID + 1
	}

	for _, team := range teams {
		filter := bson.M{"contactPhone": team.ContactPhone}

		var existing struct {
			ID     int64  `bson:"id"`
			TeamID string `bson:"teamId"`
		}
		findErr := registrations.FindOne(ctx, filter).Decode(&existing)
		if findErr != nil && findErr != mongo.ErrNoDocuments {
			return findErr
		}

		teamID := strings.TrimSpace(existing.TeamID)
		id := existing.ID
		if findErr == mongo.ErrNoDocuments || id < 1 {
			id = nextID
			nextID++
		}
		if teamID == "" {
			teamID = fmt.Sprintf("CH-%d", id)
		}

		femaleCount := 0
		memberDocs := make([]bson.M, 0, len(team.Members))
		for _, m := range team.Members {
			if strings.EqualFold(strings.TrimSpace(m.Gender), "female") {
				femaleCount++
			}
			memberDocs = append(memberDocs, bson.M{
				"name":   m.Name,
				"phone":  m.Phone,
				"gender": m.Gender,
			})
		}

		now := time.Now()
		baseDoc := bson.M{
			"id":           id,
			"teamId":       teamID,
			"teamName":     team.TeamName,
			"contactName":  team.ContactName,
			"contactPhone": team.ContactPhone,
			"collegeName":  team.CollegeName,
			"members":      memberDocs,
			"memberCount":  len(team.Members) + 1,
			"femaleCount":  femaleCount,
			"payment": bson.M{
				"status":            "paid",
				"razorpayOrderId":   "MANUAL-LATE-ENTRY",
				"razorpayPaymentId": "MANUAL-LATE-ENTRY",
			},
			"updatedAt": now,
		}

		if findErr == mongo.ErrNoDocuments {
			baseDoc["createdAt"] = now
			if _, err := registrations.InsertOne(ctx, baseDoc); err != nil {
				return err
			}
			continue
		}

		if _, err := registrations.UpdateOne(ctx, filter, bson.M{"$set": baseDoc}); err != nil {
			return err
		}
	}

	return nil
}
