# 🎫 Event Booking System

A modern, interactive **Event Booking Web Application** built with **React (Frontend)**, **Node.js + Express (Backend)**, and **MySQL**. Users can browse events, book tickets, and view their bookings. Includes **image uploads**, responsive UI, and smooth animations for a premium user experience.

---

## 🚀 Features

- Browse upcoming events with details (date, location, price, available seats)  
- Book tickets with dynamic **quantity selection** and **total price calculation**  
- Modern **3D hover effects** and **glassmorphism UI** for interactive design  
- Ticket popup after booking with **download option**  
- Admin-friendly: store event images and manage bookings  
- Backend powered by **Node.js, Express, MySQL**, and **JWT authentication**

---

## 🛠️ Project Setup

### 1️⃣ Database

1. Open **MySQL Workbench** or command line  
2. Run the provided SQL query file to create the database and tables

```sql
-- Example:
CREATE DATABASE event_booking;
-- Run all other tables and seed data

###  2️⃣ Server Setup

1. Go to the server folder:
      cd server

2. Create a .env file in the server folder:
     DB_HOST=localhost
     DB_USER=root
     DB_PASS=your_password
     DB_NAME=event_booking
     DB_PORT=3306
     JWT_SECRET=supersecret
     PORT=5000

3. Install dependencies:
     npm install

4. Start the server:
     npm run dev

### 3️⃣ Client Setup

1. Go to the client folder:
     cd client

2. Install dependencies:
     npm install

3. Start the client:
     npm run dev

4. Open your browser at http://localhost:5173


