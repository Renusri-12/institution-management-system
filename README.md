# 🏫 Institution Management System

A full-stack web application developed to manage students, employees, courses, registrations, and administrative operations within an educational institution.

## 🛠️ Technologies Used

- **Backend:** Java, Spring Boot, Spring Data JPA, Hibernate
- **Frontend:** React.js, JavaScript, Bootstrap
- **Database:** MySQL
- **API Development:** REST APIs, Swagger
- **Build Tool:** Maven

## ✨ Features

### 👨‍💼 Admin Module
- Admin login
- Student and employee management
- Course management
- Course registration management
- Dashboard displaying system counts
- Employee approval

### 🎓 Student Module
- Student registration and login
- View available courses
- Register for courses
- View registered courses
- Manage student profile

### 👩‍💻 Employee Module
- Employee registration and login
- Admin approval system
- View students and available courses
- Register for courses
- View employee profile

## 📂 Project Structure

```text
institution-management-system/
├── backend/
│   └── InstitutionManagementSystem/
└── frontend/
```

## ⚙️ Prerequisites

Make sure the following are installed:

- Java 21 or later
- MySQL
- Node.js and npm
- Maven (or use the included Maven Wrapper)

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Renusri-12/institution-management-system.git
cd institution-management-system
```

### 2. Configure MySQL

Create a database named:

```sql
CREATE DATABASE institution_management_system;
```

Configure your database credentials using the environment variables expected by your backend configuration. For example:

```text
DB_PASSWORD=your_mysql_password
```

Keep your actual database password private. Never commit credentials to GitHub.

### 3. Run the Backend

Open a terminal and navigate to the backend directory:

```bash
cd backend/InstitutionManagementSystem
```

Start the Spring Boot application using the Maven Wrapper:

```bash
./mvnw spring-boot:run
```

On Windows, use:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend is expected to run at:

```text
http://localhost:8080
```

### 4. Run the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run using the Vite development server. Open the local URL displayed in your terminal.

## 📘 API Documentation

Swagger is used for API documentation and testing.

When the backend is running, try:

```text
http://localhost:8080/swagger-ui.html
```

If that URL does not work, check the Swagger configuration for the correct path.

## 🗄️ Database

MySQL stores application data related to:

- Students
- Employees
- Courses
- Course registrations
- Other application data

**Database name:** `institution_management_system`

## 🏗️ Application Architecture

### Backend
Built with Spring Boot to provide REST APIs for student, employee, course, registration, authentication, and administrative operations.

### Frontend
Built with React.js to provide separate interfaces for administrators, students, and employees.

## 🔮 Future Enhancements

- JWT-based authentication
- Role-based access control
- Online fee payment


## 📸 Project Screenshots

### Admin Dashboard

![Admin Dashboard](admin-dashboard.png)

### Student Dashboard

![Student Dashboard](student-dashboard.png)
## 👩‍💻 Author

**Renu Sri Ramisetti**

- [GitHub Profile](https://github.com/Renusri-12)
- [LinkedIn Profile](https://www.linkedin.com/in/renu-sri-ramisetti-a125a4368/)
