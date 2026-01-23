# Mini Career Assessment Dashboard

This project is a simple full-stack career assessment platform built as part of the Career-Mitra assignment.

The application allows users to :

- Add student assessment details
- View all students in a dashboard
- Fetch individual student records by their Ids using APIs

The goal of this project is to demonstrate basic frontend-backend integration, REST API design, and clean code structure.

## Tech Stack

**Frontend**

- React.js
- Tailwind CSS
- Axios

**Backend**

- Python
- FastAPI

**Database**

- SQLite

**Version Control**

- Git & GitHub

## Setup Instructions

### Backend Setup

1. Go to backend folder:
   cd backend

2. Create and activate virtual environment:
   python -m venv venv
   venv\Scripts\activate

3. Install backend dependencies:
   pip install fastapi uvicorn sqlalchemy

4. Run backend server:
   uvicorn main:app --reload

Backend will run at:
http://127.0.0.1:8000

Swagger UI for API testing:
http://127.0.0.1:8000/docs

### Frontend Setup

1. Go to frontend folder:
   cd frontend

2. Install frontend dependencies:
   npm install

3. Start frontend development server:
   npm run dev

Frontend will run at:
http://localhost:5173

## API Endpoints

- **POST `/students`**  
  Used to add a new student assessment record.

- **GET `/students`**  
  Returns a list of all students stored in the database.

- **GET `/students/{id}`**  
  Fetches details of a specific student using their unique ID.

## Notes

- SQLite is used as the local database.
- Swagger UI is available at `/docs` for API testing.
