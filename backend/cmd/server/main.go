package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"inertia-backend/internal/config"
	"inertia-backend/internal/db"
	"inertia-backend/internal/handlers"
)

func main() {
	cfg := config.Load()
	database := db.Connect(cfg.MongoURI, cfg.MongoDBName)
	if err := db.SeedDefaults(database); err != nil {
		log.Fatalf("seed error: %v", err)
	}

	router := gin.Default()
	router.Use(corsMiddleware())

	h := handlers.New(database, cfg)
	h.RegisterRoutes(router)

	log.Printf("server running on :%s", cfg.Port)
	if err := router.Run("0.0.0.0:" + cfg.Port); err != nil {
		log.Fatalf("server error: %v", err)
	}
}

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Admin-Token")
		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	}
}
