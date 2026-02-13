package config

import "os"

type Config struct {
	Port                string
	MongoURI            string
	MongoDBName         string
	CloudinaryCloudName string
	CloudinaryAPIKey    string
	CloudinaryAPISecret string
	AdminToken          string
}

func Load() Config {
	return Config{
		Port:                getenv("PORT", "8080"),
		MongoURI:            getenv("MONGODB_URI", "mongodb://mongo:27017"),
		MongoDBName:         getenv("MONGODB_DB", "inertia"),
		CloudinaryCloudName: getenv("CLOUDINARY_CLOUD_NAME", ""),
		CloudinaryAPIKey:    getenv("CLOUDINARY_API_KEY", ""),
		CloudinaryAPISecret: getenv("CLOUDINARY_API_SECRET", ""),
		AdminToken:          getenv("ADMIN_TOKEN", "mediacell@123"),
	}
}

func getenv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
