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
	ImageURL    string `json:"imageUrl"`
}

type WorkshopRegistration struct {
	ID            int64  `json:"id"`
	Workshop      string `json:"workshop"`
	Name          string `json:"name"`
	Email         string `json:"email"`
	Phone         string `json:"phone"`
	CollegeName   string `json:"collegeName"`
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
	CollegeName   string       `json:"collegeName"`
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
	CollegeName   string            `json:"collegeName"`
	MemberCount   int               `json:"memberCount"`
	FemaleCount   int               `json:"femaleCount"`
	Members       []HackathonMember `json:"members"`
	PaymentStatus string            `json:"paymentStatus"`
	PaymentID     string            `json:"paymentId"`
	CreatedAt     string            `json:"createdAt"`
}

type RoboMember struct {
	Name        string `json:"name"`
	Email       string `json:"email"`
	Phone       string `json:"phone"`
	Branch      string `json:"branch"`
	Semester    string `json:"semester"`
	CollegeName string `json:"collegeName"`
}

type HackathonMember struct {
	Name   string `json:"name"`
	Email  string `json:"email"`
	Phone  string `json:"phone"`
	Gender string `json:"gender"`
}

type EsportsMember struct {
	Name           string `json:"name"`
	WhatsAppNumber string `json:"whatsappNumber"`
	GameID         string `json:"gameId"`
	CollegeName    string `json:"collegeName"`
}

type EsportsSubstitute struct {
	Name           string `json:"name"`
	GameID         string `json:"gameId"`
	WhatsAppNumber string `json:"whatsappNumber"`
}

type EsportsRegistration struct {
	ID                   int64             `json:"id"`
	TeamName             string            `json:"teamName"`
	Game                 string            `json:"game"`
	IsCollegeParticipant bool              `json:"isCollegeParticipant"`
	CollegeName          string            `json:"collegeName"`
	TeamLeaderName       string            `json:"teamLeaderName"`
	TeamLeaderEmail      string            `json:"teamLeaderEmail"`
	TeamLeaderPhone      string            `json:"teamLeaderPhone"`
	HasSubstitute        bool              `json:"hasSubstitute"`
	SubstitutePlayer     EsportsSubstitute `json:"substitutePlayer"`
	MemberCount          int               `json:"memberCount"`
	Members              []EsportsMember   `json:"members"`
	PaymentStatus        string            `json:"paymentStatus"`
	PaymentID            string            `json:"paymentId"`
	CreatedAt            string            `json:"createdAt"`
}

type SoloEsportsRegistration struct {
	ID                   int64  `json:"id"`
	Game                 string `json:"game"`
	PlayerName           string `json:"playerName"`
	WhatsAppNumber       string `json:"whatsappNumber"`
	GameID               string `json:"gameId"`
	IsCollegeParticipant bool   `json:"isCollegeParticipant"`
	CollegeName          string `json:"collegeName"`
	IsTeamAssigned       bool   `json:"isTeamAssigned"`
	AssignedTeamID       int64  `json:"assignedTeamId"`
	RefundEligible       bool   `json:"refundEligible"`
	PaymentStatus        string `json:"paymentStatus"`
	PaymentID            string `json:"paymentId"`
	CreatedAt            string `json:"createdAt"`
}

type SoloEsportsRandomTeamMember struct {
	SoloRegistrationID int64  `json:"soloRegistrationId"`
	Name               string `json:"name"`
	WhatsAppNumber     string `json:"whatsappNumber"`
	GameID             string `json:"gameId"`
	CollegeName        string `json:"collegeName"`
}

type SoloEsportsRandomTeam struct {
	ID          int64                         `json:"id"`
	TeamCode    string                        `json:"teamCode"`
	Game        string                        `json:"game"`
	TeamSize    int                           `json:"teamSize"`
	MemberCount int                           `json:"memberCount"`
	Members     []SoloEsportsRandomTeamMember `json:"members"`
	CreatedAt   string                        `json:"createdAt"`
}

type OpenMicRegistration struct {
	ID               int64  `json:"id"`
	Name             string `json:"name"`
	Email            string `json:"email"`
	Phone            string `json:"phone"`
	EnrollmentNumber string `json:"enrollmentNumber"`
	Year             string `json:"year"`
	CollegeName      string `json:"collegeName"`
	PerformanceType  string `json:"performanceType"`
	ScriptPDFURL     string `json:"scriptPdfUrl"`
	CreatedAt        string `json:"createdAt"`
}

type ContactSubmission struct {
	ID        int64  `json:"id"`
	Email     string `json:"email"`
	Phone     string `json:"phone"`
	Issue     string `json:"issue"`
	CreatedAt string `json:"createdAt"`
}
