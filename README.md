# Institution Management System

A full-stack web application developed to manage students, employees, courses, registrations, and administrative operations in an educational institution.

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- React.js
- JavaScript
- MySQL
- Bootstrap
- REST APIs
- Maven
- Swagger

## Features

### Admin

- Admin login
- Student and employee management
- Course management
- Course registration management
- Dashboard with system counts
- Employee approval

### Student

- Student registration and login
- View available courses
- Register for courses
- View registered courses
- Student profile

### Employee

- Employee registration and login
- Admin approval system
- View students and courses
- Register for courses
- Employee profile

## Project Structure

text
institution-management-system
├── backend
│   └── InstitutionManagementSystem
└── frontend


How to Run

Backend

cd backend/InstitutionManagementSystem
mvnw spring-boot:run

Backend runs on:
http://localhost:8080

Frontend

cd frontend
npm install
npm run dev

The frontend runs using the Vite development server.

Database

MySQL is used to store students, employees, courses, registrations, and other application data.

Database name:
institution_management_system

API Documentation

Swagger is used for API documentation and testing.

Swagger UI:
http://localhost:8080/swagger-ui.html

Author

Renu Sri Ramisetti