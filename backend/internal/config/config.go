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
	RazorpayKeyID       string
	RazorpayKeySecret   string
	SMTPHost            string
	SMTPPort            string
	SMTPUser            string
	SMTPPass            string
	MailFrom            string
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
		RazorpayKeyID:       getenv("RAZORPAY_KEY_ID", ""),
		RazorpayKeySecret:   getenv("RAZORPAY_KEY_SECRET", ""),
		SMTPHost:            getenv("SMTP_HOST", ""),
		SMTPPort:            getenv("SMTP_PORT", "587"),
		SMTPUser:            getenv("SMTP_USER", ""),
		SMTPPass:            getenv("SMTP_PASS", ""),
		MailFrom:            getenv("MAIL_FROM", getenv("SMTP_USER", "")),
	}
}

func getenv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
