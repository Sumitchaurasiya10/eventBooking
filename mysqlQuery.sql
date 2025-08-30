-- 1. Create database
CREATE DATABASE IF NOT EXISTS event_booking;
USE event_booking;

-- 2. Show databases (optional)
SHOW DATABASES;

-- 3. Show tables (optional)
SHOW TABLES;

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Events Table
CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT,
  location VARCHAR(150),
  date DATETIME,
  total_seats INT NOT NULL,
  available_seats INT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  img_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT NOT NULL,
  user_id INT NOT NULL,
  quantity INT NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('confirmed','cancelled') DEFAULT 'confirmed',
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 7. Insert a sample admin user (bcrypt hash of "admin123")
INSERT INTO users (name, email, password, role) 
VALUES (
  'Admin User', 
  'admin@example.com', 
  '$2b$10$fUDF7jBKHGQVh7TihtA9xepITwZkzKOaEVfdAO4wRS.0bnS6u/bMi',
  'admin'
);

-- 8. Insert sample events
INSERT INTO events (title, description, location, date, total_seats, available_seats, price, img_url)
VALUES
('Music Concert', 'A live music concert with famous bands.', 'New York', '2025-10-15 19:00:00', 100, 100, 50.00, 'concert.jpg'),
('Tech Conference', 'Annual technology conference for developers.', 'San Francisco', '2025-11-05 09:00:00', 200, 200, 150.00, 'conference.jpg'),
('Comedy Night', 'Stand-up comedy show with popular comedians.', 'Los Angeles', '2025-12-01 20:00:00', 150, 150, 30.00, 'comedy.jpg');






-- 9. Update admin password (if needed again)
UPDATE users 
SET password = '$2b$10$fUDF7jBKHGQVh7TihtA9xepITwZkzKOaEVfdAO4wRS.0bnS6u/bMi'
WHERE email = 'admin@example.com';

-- 10. Alter table column name (if table already existed with 'img')
ALTER TABLE events CHANGE COLUMN img img_url VARCHAR(500);
