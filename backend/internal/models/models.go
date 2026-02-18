package models

type LandingContent struct {
	HeroTitle    string   `json:"heroTitle"`
	HeroSubtitle string   `json:"heroSubtitle"`
	Dates        string   `json:"dates"`
	Location     string   `json:"location"`
	Highlights   []string `json:"highlights"`
}

type EventInfo struct {
	ID          int64  `json:"id"`
	Slug        string `json:"slug"`
	Title       string `json:"title"`
	Description string `json:"description"`
	DateLabel   string `json:"dateLabel"`
	CTALabel    string `json:"ctaLabel"`
}

type GalleryItem struct {
	ID          int64  `json:"id"`
	Title       string `json:"title"`
	Preview     string `json:"preview"`
	Description string `json:"description"`
	ImageURL    string `json:"imageUrl"`
	Category    string `json:"category"`
}

type FAQ struct {
	ID       int64  `json:"id"`
	Question string `json:"question"`
	Answer   string `json:"answer"`
}

type Workshop struct {
	ID          int64  `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

type TeamMember struct {
	ID       int64  `json:"id"`
	Name     string `json:"name"`
	Role     string `json:"role"`
	Preview  string `json:"preview"`
	About    string `json:"about"`
	ImageURL string `json:"imageUrl"`
}

type CulturalEvent struct {
	ID          int64  `json:"id"`
	Title       string `json:"title"`
	Preview     string `json:"preview"`
	Description string `json:"description"`
}

type WorkshopRegistration struct {
	ID            int64  `json:"id"`
	Workshop      string `json:"workshop"`
	Name          string `json:"name"`
	Email         string `json:"email"`
	Phone         string `json:"phone"`
	PaymentStatus string `json:"paymentStatus"`
	PaymentID     string `json:"paymentId"`
	CreatedAt     string `json:"createdAt"`
}

type RoboRegistration struct {
	ID            int64        `json:"id"`
	TeamName      string       `json:"teamName"`
	CaptainName   string       `json:"captainName"`
	Email         string       `json:"email"`
	Phone         string       `json:"phone"`
	RobotName     string       `json:"robotName"`
	MemberCount   int          `json:"memberCount"`
	Members       []RoboMember `json:"members"`
	PaymentStatus string       `json:"paymentStatus"`
	PaymentID     string       `json:"paymentId"`
	CreatedAt     string       `json:"createdAt"`
}

type HackathonRegistration struct {
	ID            int64             `json:"id"`
	TeamName      string            `json:"teamName"`
	ContactName   string            `json:"contactName"`
	ContactEmail  string            `json:"contactEmail"`
	ContactPhone  string            `json:"contactPhone"`
	MemberCount   int               `json:"memberCount"`
	FemaleCount   int               `json:"femaleCount"`
	Members       []HackathonMember `json:"members"`
	PaymentStatus string            `json:"paymentStatus"`
	PaymentID     string            `json:"paymentId"`
	CreatedAt     string            `json:"createdAt"`
}

type RoboMember struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
}

type HackathonMember struct {
	Name   string `json:"name"`
	Email  string `json:"email"`
	Phone  string `json:"phone"`
	Gender string `json:"gender"`
}
