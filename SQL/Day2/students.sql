SET SQL_SAFE_UPDATES = 0;
use roody;

create table studentdetails(
	student_id int primary key auto_increment,
    student_name varchar(20),
    student_age int,
    student_dept varchar(20),
    city varchar(20)
);
-- Task 1Insert Student  
insert into studentdetails (student_name,student_age,student_dept,city) values ("Mohan",21,"ECE","Chennai");

-- Task 2 – Insert Multiple Students
insert into studentdetails (student_name,student_age,student_dept,city) values ('Arun', 23, 'IT', 'Madurai'),
('Bala', 21, 'ECE', 'Chennai'),
('Priya', 24, 'CSE', 'Coimbatore');

-- Task 3 – Update City
update studentdetails set city ="Bangalore" where student_id=2;

-- Task 4 – Update Age 
update studentdetails set student_age=25 where student_id=3;

-- Task 5 – Update Multiple Columns 
update studentdetails set student_age = 24,student_dept = "IT",city = "Chennai" where student_id = 1;

-- Task 6 – Update Using Department
update studentdetails set city = 'Madurai' where student_dept = 'CSE';

-- Task 7 – Delete One Student
delete from studentdetails where student_id = 4;

-- Task 9 – Timestamp Update
alter table studentdetails add column updated_at TIMESTAMP;
update studentdetails set city = 'Madurai' where student_id = 2;

alter table studentdetails modify column updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP;

update studentdetails set city = 'Salem' where student_id = 2;
insert studentdetails (student_name,student_age,student_dept,city) values ('Keren',22,'AIDS','Mumbai');

-- to change id from 5 to 4
update studentdetails set student_id = 4 where student_id = 5;

-- Task 10 – Complete DML Flow

-- new student 
insert studentdetails (student_name,student_age,student_dept,city) values('Karan',23,'MCA','KK Nagar');

-- Insert another two students.
insert studentdetails (student_name,student_age,student_dept,city) 
values('Naresh',23,'LLB','Vellore'),('Akash',21,'MBA','Thiruvannamalai');
 
-- Update the first student's city.
update studentdetails set city = 'Ramapuram' where city = 'KK Nagar';

-- Update the second student's age and department. 
update studentdetails set student_age = 21,student_dept = 'Law' where student_name = 'Naresh';

-- Delete the third student.
delete from studentdetails where student_name = 'Akash';
