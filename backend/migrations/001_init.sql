CREATE TABLE IF NOT EXISTS landing_content (
  id INT PRIMARY KEY AUTO_INCREMENT,
  hero_title VARCHAR(255) NOT NULL,
  hero_subtitle TEXT NOT NULL,
  dates VARCHAR(100) NOT NULL,
  location VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS highlights (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  position INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  slug VARCHAR(50) NOT NULL,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  date_label VARCHAR(100) NOT NULL,
  cta_label VARCHAR(100) NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS gallery (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL,
  preview VARCHAR(160) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS faqs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS workshops (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL,
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS team_members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(120) NOT NULL,
  role VARCHAR(120) NOT NULL,
  preview VARCHAR(160) NOT NULL,
  about TEXT NOT NULL,
  image_url TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS cultural_events (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(120) NOT NULL,
  preview VARCHAR(160) NOT NULL,
  description TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS workshop_registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  workshop_id INT NOT NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS robo_registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  team_name VARCHAR(120) NOT NULL,
  captain_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  robot_name VARCHAR(120) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS hackathon_teams (
  id INT PRIMARY KEY AUTO_INCREMENT,
  team_name VARCHAR(120) NOT NULL,
  team_code VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS hackathon_members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  team_id INT NOT NULL,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  gender VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (team_id) REFERENCES hackathon_teams(id) ON DELETE CASCADE
);

INSERT INTO landing_content (hero_title, hero_subtitle, dates, location)
VALUES (
  'INERTIA 2.0: JEC Annual Tech Fest',
  'A flagship techno-management festival by Jabalpur Engineering College — featuring hackathons, workshops, expos, automotive challenges, and cultural nights.',
  'Coming 2026',
  'Jabalpur Engineering College, Jabalpur, Madhya Pradesh'
);

INSERT INTO highlights (title, position) VALUES
('Unstop Hackathon', 1),
('AI & ML Workshops', 2),
('Robo Race Arena', 3),
('DJ Night & Culture Fest', 4),
('Tech Talks & Expert Sessions', 5),
('Startup & Project Expo', 6);

INSERT INTO events (slug, title, description, date_label, cta_label, sort_order) VALUES
('hackathon', 'Unstop Hackathon', '5-member teams with at least one female member. Create or join via team code.', '48 Hours', 'Create/Join Team', 1),
('workshops', 'AI & ML Workshops', 'Hands-on labs with expert mentors. Payments handled via Razorpay.', '2 Days', 'Register Workshop', 2),
('robo-race', 'Robo Race', 'Speed, precision, and control on our custom track.', 'Final Day', 'Register Robot', 3);

INSERT INTO faqs (question, answer, sort_order) VALUES
('How do hackathon teams work?', 'Create a team to get a code, or join an existing team with their code.', 1),
('Do workshops require payment?', 'Yes. Workshop registrations will be paid via Razorpay.', 2),
('What is the team size rule?', 'Each team has 5 members and must include at least one female member.', 3),
('Where is the venue?', 'All events take place at the Jabalpur Engineering College campus.', 4),
('Can I register for multiple events?', 'Yes, you can register for workshops, Robo Race, and the hackathon independently.', 5),
('How do I get updates?', 'Follow official Inertia channels and watch the website for schedule updates.', 6),
('How can my company participate?', 'Contact the organizing team using the details on the Contact page.', 7),
('Does INERTIA host expos?', 'Yes, the fest includes a Startup & Project Expo along with Defense and Automotive showcases.', 8);

INSERT INTO workshops (title, description, sort_order) VALUES
('Generative AI Bootcamp', 'Prompt engineering, RAG, and agent workflows.', 1),
('ML Ops Fundamentals', 'Deploy models with monitoring and pipelines.', 2),
('Computer Vision Sprint', 'Build detection and tracking models.', 3);
