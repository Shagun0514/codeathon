# Backend API Contract

## Auth APIs

### POST /api/auth/signup
Body:
{
  "email": "string",
  "password": "string"
}

Response:
User object (Supabase)

---

### POST /api/auth/login
Body:
{
  "email": "string",
  "password": "string"
}

Response:
{
  "token": "JWT_TOKEN"
}

---

## Protected APIs

### Headers (Required)
Authorization: Bearer <JWT_TOKEN>

---

### GET /api/protected
Response:
{
  "message": "access granted",
  "user": {
    "userId": "string",
    "email": "string"
  }
}
