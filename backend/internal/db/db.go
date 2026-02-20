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
				"Cube# Hackathon",
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
			bson.M{"id": 1, "slug": "hackathon", "title": "Cube# Hackathon", "description": "12-hour hackathon with sponsored problem statements and rapid prototyping.", "dateLabel": "12 Hours", "ctaLabel": "Register Hackathon", "sortOrder": 1},
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
			bson.M{"id": 1, "question": "How long is the hackathon?", "answer": "Cube# is a 12-hour hackathon.", "sortOrder": 1},
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

	return nil
}
