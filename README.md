# Inertia 2026 Tech Fest

Frontend (React + TypeScript) and backend (Go + Gin + MongoDB) for Jabalpur Engineering College annual fest.

## Structure
- `frontend/` React + Vite frontend
- `backend/` Go + Gin API
- `docker-compose.yml` Local dev stack (MongoDB + backend + frontend)

## Local Dev (Docker)
1. From repo root:

```bash
docker compose up --build
```

2. Open:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8080`
- MongoDB: `mongodb://localhost:27017`

MongoDB data persists in `mongo_data` volume. Seed data is created automatically by backend at startup.

## Environment
Backend env (see `backend/.env.example`):
- `MONGODB_URI` MongoDB connection string
- `MONGODB_DB` MongoDB database name
- `CLOUDINARY_*` Cloudinary keys for image upload
- `ADMIN_TOKEN` Header token for `/api/admin/*`

Frontend env (see `frontend/.env.example`):
- `VITE_API_URL` Backend base URL

## Admin Uploads
- Visit `http://localhost:5173/secret-admin`
- Enter the secret admin password (default is `mediacell@123`)
- Upload images -> saved to Cloudinary and metadata stored in MongoDB
- View registration submissions at `/secret-admin/registrations`

## Hackathon Team Logic
- Teams are 5 members
- Must include at least 1 female member
- Create team -> returns `teamCode`
- Join team using that code

## Unstop API Integration (Placeholder)
This codebase is ready to sync with Unstop once API access is provided. When you receive Unstop credentials or API docs, we will:
- Add auth keys in backend env
- Add a service to push team creation and member joins to Unstop

## MongoDB Guidance
- Local: use Docker (already configured).
- Production: use any managed MongoDB service and set `MONGODB_URI` and `MONGODB_DB`.

## Cloudinary Free API (Guide)
1. Create a Cloudinary account.
2. From the Cloudinary dashboard, copy:
   - `Cloud name`
   - `API Key`
   - `API Secret`
3. Add them to backend env variables. The admin upload will start working immediately.

## Razorpay Integration (Placeholder)
Workshop and Robo Race payments are stubbed. When you provide Razorpay keys, we'll:
- Create a backend order endpoint
- Add checkout flow on frontend
# inertia
# inertia
# inertia
