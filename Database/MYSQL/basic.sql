-- Create the college database
CREATE DATABASE college;

-- Drop the college database (this will delete the database if it exists)
DROP DATABASE college;

-- Use the college database
USE college;

-- Create the student table with columns for roll number, name, and age
CREATE TABLE student (
    rollno INT,
    name VARCHAR(30),
    age INT
);

-- Insert data into the student table
INSERT INTO student VALUES
    (101, "Rahul", 21),
    (102, "Rhunal", 20),
    (103, "Sahil", 19),
    (104, "Aman", 22),
    (105, "Priya", 20),
    (106, "Rohit", 23);

-- Select all data from the student table
SELECT * FROM student;

-- Create the instagram database if it does not already exist
CREATE DATABASE IF NOT EXISTS instagram;

-- Drop the instagram database if it exists
DROP DATABASE IF EXISTS instagram;

-- Show all databases
SHOW DATABASES;

-- Use the college database
USE college;

-- Show all tables in the college database
SHOW TABLES;

-- Use the instagram database
USE instagram;

-- Create the user table with various columns and constraints
CREATE TABLE user (
    id INT,
    age INT,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT age_check CHECK (age >= 18),
    PRIMARY KEY (id)
);

-- Insert data into the user table
INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 21, "Rahul", "rahul@gmail.com", 1500, 299),
(2, 19, "Rhunal", "rhunal@gmail.com", 500, 2),
(3, 22, "Sahil", "sahil@gmail.com", 100, 100),
(4, 24, "Aman", "aman@gmail.com", 2000, 150),
(5, 23, "Priya", "priya@gmail.com", 1800, 300);

-- Select the first 2 rows from the user table
SELECT * FROM user
LIMIT 2;

-- Select the name and email of users whose email is in the specified list
SELECT name, email FROM user 
WHERE email IN ("sahil@gmail.com", "ssss@gmail.com", "hhh@gmail.com");

-- Create the post table with a foreign key reference to the user table
CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(40),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Insert data into the post table
INSERT INTO post (id, content, user_id) VALUES
(1, 'Hello World!', 1),
(2, 'Just had a great day!', 2),
(3, 'Happy Birthday to me!', 3),
(4, 'Enjoying the vacation', 4),
(5, 'Back to work', 5);

-- Select the maximum number of followers from the user table
SELECT MAX(followers)
FROM user;

-- Count the number of users who are 21 years old
SELECT COUNT(age)
FROM user
WHERE age = 21;

-- Select all data from the user table ordered by followers in descending order
SELECT * FROM user
ORDER BY followers DESC;

-- Select the name and number of followers of users who have more than 200 followers
SELECT name, followers FROM user 
WHERE followers > 200;

-- Select the age and count the number of users for each age group
SELECT age, COUNT(id)
FROM user
GROUP BY age;
