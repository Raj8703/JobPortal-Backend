
# Job Application Portal – REST API (Node.js)

##  Project Overview
The **Job Application Portal** is a RESTful API built using **Node.js and Express.js** that allows candidates to:
- Register and log in securely using JWT authentication
- View available job listings
- Upload resumes
- Apply for jobs
- View their submitted job applications

This project is designed for **backend interview evaluation** and demonstrates clean API design, authentication, file uploads, and MongoDB integration.

---

##  Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **File Uploads:** Multer
- **API Testing:** Postman

---

##  Project Structure
job-application-portal/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── jobController.js
│ └── applicationController.js
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── User.js
│ ├── Job.js
│ └── Application.js
│
├── routes/
│ ├── authRoutes.js
│ ├── jobRoutes.js
│ └── applicationRoutes.js
│
├── uploads/
│ └── resumes/
│
├── index.js
├── package.json
├── .env.example
└── README.md

1.Install Dependencies
npm install

 2.Environment Variables

Create a .env file in the root directory.

.env.example
PORT=5002
MONGO_URI=mongodb://127.0.0.1:27017/job_portal
JWT_SECRET=your_jwt_secret_key

Start the Server
npm start


Server will run at:

http://localhost:5002

 Authentication (JWT)

User logs in and receives a JWT token

Token must be passed in headers for protected APIs

Authorization: Bearer <JWT_TOKEN>

 API Endpoints Documentation
 Authentication APIs
1.Register User
POST /api/auth/register


Request Body

{
  "name": "Raj",
  "email": "raj@example.com",
  "password": "123456"
}


Response

{
  "user": {
    "_id": "...",
    "name": "Raj",
    "email": "raj@example.com"
  },
  "token": "jwt_token_here"
}

2.Login User
POST /api/auth/login


Request Body

{
  "email": "raj@example.com",
  "password": "123456"
}


Response

{
  "user": { ... },
  "token": "jwt_token_here"
}

 Job APIs
1.Seed Sample Jobs
POST /api/jobs/seed


Adds sample job listings to the database.

Response

[
  {
    "_id": "...",
    "title": "Node.js Developer",
    "company": "Potenz Technology",
    "description": "Backend development with Node.js"
  }
]

2.Get All Jobs
GET /api/jobs


Response

[
  {
    "_id": "...",
    "title": "Frontend Developer",
    "company": "Tech Corp",
    "description": "React.js UI Development"
  }
]

 Job Application APIs
1.Apply for a Job
POST /api/applications/apply


Headers

Authorization: Bearer <JWT_TOKEN>


Body (form-data)

Key	Type	Value
jobId	Text	Job ID
resume	File	Resume file

Response

{
  "_id": "...",
  "user": "...",
  "job": "...",
  "resume": "resume.pdf",
  "appliedAt": "2025-12-19T10:30:00Z"
}

2.View My Applications
GET /api/applications/my


Headers

Authorization: Bearer <JWT_TOKEN>


Response

[
  {
    "_id": "...",
    "job": {
      "title": "Node.js Developer",
      "company": "Potenz Technology"
    },
    "resume": "resume.pdf",
    "appliedAt": "2025-12-19T10:30:00Z"
  }
]

