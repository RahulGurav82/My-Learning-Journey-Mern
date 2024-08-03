create database college;
drop database college;
use college;

create table student (
	rollno int,
    name varchar(30),
    age int
);

insert into student values
	(101, "Rahul", 21),
    (102, "Rhunal", 20),
    (103, "Sahil", 19);
    
select * from student;

create database if not exists instagram;
drop database if exists instagram;
show databases;
use college;
show tables;

use instagram;

create table user (
	id int,
    age int,
    name varchar(20) not null,
    email varchar(50) unique,
    followers int default 0,
    following int,
    constraint age_check check (age >= 18),
    primary key (id)
);

insert into user
(id, age, name, email, followers, following)
values
(1, 21, "Rahul", "rahul@gamil.com", 1500, 299),
(2, 19, "Rhunal", "rhunal@gamil.com", 500, 2),
(3, 22, "Sahil", "sahli@gamil.com", 100, 100);

select * from user;+

create table post (
 id int primary key,
 content varchar(40),
 user_id int,
 foreign key (user_id) references user(id)
);

