# 🍽️ Online-Catering-System

**First BE Project**

![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![GitHub](https://img.shields.io/badge/GitHub-KingMakerDEV/Online-Catering-System-black?logo=github)
![Build Status](https://img.shields.io/github/actions/workflow/status/KingMakerDEV/Online-Catering-System/ci.yml?branch=main)

---

## 📋 Table of Contents
- [Project Information](#project-information)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)

---

## ℹ️ Project Information

- **👤 Author:** KingMakerDEV
- **📦 Version:** 1.0.0
- **📄 License:** MIT
- **📂 Repository:** [https://github.com/KingMakerDEV/Online-Catering-System](https://github.com/KingMakerDEV/Online-Catering-System)

![Online Catering System](https://via.placeholder.com/800x400/4CAF50/FFFFFF?text=Online+Catering+System)

---

## 🚀 Features

### 👤 User Features
- User Registration & Login (Authentication)
- Browse Catering Services & Menus
- Select Event Type (Wedding, Birthday, Corporate, etc.)
- Dynamic Form based on Event Type
- Booking with Date, Time, and Number of Guests
- Order Summary & Confirmation
- View Booking History

### 🛠️ Admin Features
- Admin Dashboard
- Manage Menu Items (Add, Update, Delete)
- Manage Bookings
- View Customer Details
- Accept/Reject Orders

### 🔔 Additional Features
- Fully Responsive UI (Mobile + Desktop)
- RESTful API Integration
- Real-time form validation
- Secure data handling

---

## ⚙️ Installation

### 📌 Prerequisites
- Node.js (Latest LTS recommended)
- Java (JDK 17 or higher)
- MySQL Database
- Maven

### 🔽 Clone the Repository
```bash
git clone https://github.com/KingMakerDEV/Online-Catering-System.git
cd Online-Catering-System


▶️ Backend Setup (Spring Boot)
Bashcd backend
mvn clean install
mvn spring-boot:run
Database Configuration (backend/src/main/resources/application.properties):
propertiesspring.datasource.url=jdbc:mysql://localhost:3306/catering_db
spring.datasource.username=root
spring.datasource.password=yourpassword
▶️ Frontend Setup (React)
Bashcd frontend
npm install
npm start
Frontend will run on: http://localhost:3000

📖 Usage

Open your browser and go to http://localhost:3000
Register a new account or Login
Select your event type (Wedding, Birthday, Corporate, etc.)
Fill the dynamic form with date, time, and number of guests
Browse and select menu items & services
Review order summary and confirm booking
Admin can login to the dashboard to manage bookings, menu items, and customer details


🛠️ Tech Stack
🌐 Frontend

React.js
HTML5, CSS3, JavaScript
Axios (for API calls)

⚙️ Backend

Spring Boot
RESTful APIs
Spring Security (for authentication)

🗄️ Database

MySQL
JPA / Hibernate (ORM)

🔧 Tools & Platforms

Git & GitHub
Postman (API Testing)
VS Code / IntelliJ IDEA
Maven


👥 Contributing

KingMakerDEV – Backend Developer
Abhay – Frontend & Integration


