package db

import (
	"context"
	"fmt"
	"log"
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
				"Unstop Hackathon",
				"AI & ML Workshops",
				"Robo Race Arena",
				"DJ Night & Culture Fest",
				"Tech Talks & Expert Sessions",
				"Startup & Project Expo",
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
			bson.M{"id": 1, "slug": "hackathon", "title": "Unstop Hackathon", "description": "5-member teams with at least one female member. Create or join via team code.", "dateLabel": "48 Hours", "ctaLabel": "Create/Join Team", "sortOrder": 1},
			bson.M{"id": 2, "slug": "workshops", "title": "AI & ML Workshops", "description": "Hands-on labs with expert mentors. Payments handled via Razorpay.", "dateLabel": "2 Days", "ctaLabel": "Register Workshop", "sortOrder": 2},
			bson.M{"id": 3, "slug": "robo-race", "title": "Robo Race", "description": "Speed, precision, and control on our custom track.", "dateLabel": "Final Day", "ctaLabel": "Register Robot", "sortOrder": 3},
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
			bson.M{"id": 1, "question": "How do hackathon teams work?", "answer": "Create a team to get a code, or join an existing team with their code.", "sortOrder": 1},
			bson.M{"id": 2, "question": "Do workshops require payment?", "answer": "Yes. Workshop registrations will be paid via Razorpay.", "sortOrder": 2},
			bson.M{"id": 3, "question": "What is the team size rule?", "answer": "Each team has 5 members and must include at least one female member.", "sortOrder": 3},
			bson.M{"id": 4, "question": "Where is the venue?", "answer": "All events take place at the Jabalpur Engineering College campus.", "sortOrder": 4},
			bson.M{"id": 5, "question": "Can I register for multiple events?", "answer": "Yes, you can register for workshops, Robo Race, and the hackathon independently.", "sortOrder": 5},
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

	return nil
}
