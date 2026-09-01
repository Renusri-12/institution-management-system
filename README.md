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

### Admin Module

- Admin login
- Student management
- Employee management
- Course management
- Course registration management
- Dashboard with system counts
- Employee approval

### Student Module

- Student registration
- Student login
- View available courses
- Register for courses
- View registered courses
- Student profile

### Employee Module

- Employee registration
- Employee login
- Admin approval system
- View students
- View available courses
- Register for courses
- View employee profile

## Project Structure

```
institution-management-system/
├── backend/
│   └── InstitutionManagementSystem/
└── frontend/
```
# How to Run the Project

## Make sure the following are installed:

- Java 21 or later
- MySQL
- Node.js and npm
- Maven

# 1. Clone the Repository
git clone https://github.com/Renusri-12/institution-management-system.git
cd institution-management-system

# 2. Configure MySQL

- Create a MySQL database named:

- institution_management_system

- The backend uses MySQL for storing application data.

- Configure your database credentials using environment variables.

# For example:

- DB_PASSWORD=your_mysql_password


# 3. Run the Backend

- Open a terminal and run:

- cd backend/InstitutionManagementSystem

Then:

- mvnw spring-boot:run

- The backend will run on:

http://localhost:8080

# 4. Run the Frontend

- Open another terminal and run:

- cd frontend

- Install the required packages:

- npm install

- Start the frontend:

- npm run dev

- The frontend will run using the Vite development server.

# API Documentation

- Swagger is used for API documentation and API testing.

# Swagger UI:

http://localhost:8080/swagger-ui.html
Database

MySQL is used to store:

- Students
- Employees
- Courses
- Course registrations
- Other application data

# Database name:

# institution_management_system
# Backend

- The backend is developed using Spring Boot and provides REST APIs for managing students, employees, courses, registrations, authentication, and administrative operations.

# Frontend

- The frontend is developed using React.js and provides separate interfaces for:

- Admin
- Student
- Employee
- Future Enhancements
- JWT-based authentication
- Role-based access control
- Online fee payment

# Author

- Renu Sri Ramisetti



