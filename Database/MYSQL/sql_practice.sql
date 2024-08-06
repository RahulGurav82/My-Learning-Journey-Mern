-- Create the college database
CREATE DATABASE college;

-- Use the college database
USE college;

-- Create the teachers table with columns for id, name, subject, and salary
CREATE TABLE teachers (
    id INT PRIMARY KEY,
    name VARCHAR(20),
    subject VARCHAR(20),
    salary INT DEFAULT 10000
);

-- Insert data into the teachers table
INSERT INTO teachers (id, name, subject, salary) VALUES
    (1, 'smita', 'AI', 50000),
    (2, 'awinash', 'GP', 40000),
    (3, 'rupali', 'WS', 450000),
    (4, 'shubangi', 'INS', 75000),
    (5, 'Nilam', 'STQA', 60000);

-- Select all data from the teachers table
SELECT * FROM teachers;

-- Select all teachers with a salary greater than or equal to 50000
SELECT * FROM teachers
WHERE salary >= 50000;

-- Change the column name 'salary' to 'ctc' with a default value of 10000
ALTER TABLE teachers
CHANGE COLUMN salary ctc INT DEFAULT 10000;

-- Update the ctc by increasing it by 25%
UPDATE teachers
SET ctc = ctc + (0.25 * ctc);

-- Add a new column 'city' with a default value 'mumbai'
ALTER TABLE teachers
ADD COLUMN city VARCHAR(20) DEFAULT 'mumbai';

-- Drop the 'ctc' column from the teachers table
ALTER TABLE teachers
DROP COLUMN ctc;

-- Create the students table with columns for roll number, name, city, and marks
CREATE TABLE students (
    roll_no INT,
    name VARCHAR(20),
    city VARCHAR(20),
    marks INT
);

-- Insert data into the students table
INSERT INTO students (roll_no, name, city, marks) VALUES
    (110, 'adam', 'delhi', 76),
    (108, 'bob', 'mumbai', 65),
    (124, 'casey', 'pune', 94),
    (112, 'duke', 'pune', 80);

-- Select distinct cities from the students table
SELECT DISTINCT city
FROM students;

-- Select the city and the highest marks in that city
SELECT city, MAX(marks)
FROM students
GROUP BY city;

-- Add a new column 'grade' to the students table
ALTER TABLE students
ADD grade VARCHAR(2);

-- Update the grade based on the marks
UPDATE students
SET grade = 'O'
WHERE marks >= 80;

UPDATE students
SET grade = 'A'
WHERE marks >= 70 AND marks < 80;

UPDATE students
SET grade = 'B'
WHERE marks >= 60 AND marks < 70;
