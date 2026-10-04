use roody;

create table employees(
    employee_id INT primary key auto_increment,
    emp_name VARCHAR(50),
    department VARCHAR(30),
    salary INT,
    city VARCHAR(30)
);

insert into employees (emp_name,department,salary,city)
 values('Arun', 'IT', 55000, 'Chennai'),
 ('Priya', 'Finance', 45000, 'Chennai'),
 ('Karthik', 'HR', 38000, 'Bangalore'),
('Anjali', 'IT', 42000, 'Chennai'),
('Prakash', 'Marketing', 32000, 'Mumbai'),
('Rahul', 'Finance', 48000, 'Hyderabad'),
('Sneha', 'HR', 50000, 'Chennai'),
('Aakash', 'Finance', 36000, 'Coimbatore'),
('Deepak', 'IT', 60000, NULL),
('Pooja', 'IT', 39000, 'Chennai'),
('Vijay', 'Finance', 52000, 'Chennai'),
('Aravind', 'HR', 41000, NULL),
('Meena', 'Marketing', 35000, 'Chennai'),
('Ajay', 'IT', 47000, 'Bangalore'),
('Ramesh', 'Finance', 34000, 'Chennai');


-- employees whose salary is greater than 40000 and city is Chennai. 
select * from employees where salary > 40000 and city = 'Chennai';

-- whose salary is between 35000 and 50000 and whose department is not HR.
select * from employees where salary between 35000 and 50000 and department NOT IN ('HR');

--  who belong to IT or Finance using the IN operator, and show only their name, department, and salary.
select  emp_name, department,  salary from employees where department in ('IT','Finance');

-- whose name starts with A or P and whose city is not NULL
 select * from employees where emp_name like %A or %P and city != Null;
 
 -- all unique departments and rename the output column from department to department_name using DISTINCT and AS.
 select distinct department as dept from employees;
 
-- Day3 task

use roody;

-- Display all columns and all records from the employees table.
SELECT * FROM  employees;

-- Display only the name, salary, and city of all employees. 
SELECT emp_name,salary,city FROM  employees;

-- Display all employees whose city is Chennai. 
SELECT * FROM employees where city = 'Chennai'; 

-- Display employees whose salary is greater than 45,000.
 SELECT * FROM employees where salary > 45000 ;
 
ALTER TABLE employees DROP COLUMN city;
TRUNCATE TABLE employees;

INSERT INTO employees
(emp_name, department, salary, age, city)
VALUES
('Arun', 'IT', 55000, 27, 'Chennai'),
('Priya', 'Finance', 45000, 29, 'Madurai'),
('Karthik', 'HR', 38000, 23, 'Chennai'),
('Anjali', 'IT', 42000, 25, 'Salem'),
('Prakash', 'Marketing', 32000, 24, 'Chennai'),
('Rahul', 'Finance', 48000, 31, 'Madurai'),
('Sneha', 'HR', 50000, 28, NULL),
('Aakash', 'Finance', 36000, 24, 'Salem'),
('Deepak', 'IT', 60000, 32, 'Chennai'),
('Pooja', 'IT', 39000, 26, NULL),
('Vijay', 'Finance', 52000, 30, 'Madurai'),
('Aravind', 'HR', 41000, 27, 'Salem'),
('Meena', 'Marketing', 35000, 26, 'Chennai'),
('Ajay', 'IT', 47000, 29, 'Madurai'),
('Ramesh', 'Finance', 34000, 30, 'Chennai');

-- Display employees whose age is less than 28.
SELECT * FROM employees WHERE age < 28; 

-- Display employees whose salary is greater than or equal to 40,000.
SELECT * FROM employees WHERE salary >= 40000 ; 

-- Display employees whose department is not HR.
SELECT * FROM  employees WHERE department != 'HR';

-- Display employees who belong to the IT department AND live in Chennai.
SELECT * FROM employees WHERE department = 'IT' AND city = 'Chennai';

-- Display employees who live in Chennai OR Madurai.
SELECT * FROM employees WHERE city = 'Chennai' OR city = 'Madurai';

-- Display employees whose salary is above 40,000 AND age is below 30.
SELECT * FROM employees WHERE salary > 40000 AND age < 30;

-- Display employees whose city is Chennai, Madurai, or Salem using IN.
SELECT * FROM employees WHERE city IN ('Chennai','Madurai','Salem');

-- Display employees whose department is not IT or HR using NOT IN.
 SELECT * FROM employees WHERE department NOT IN ('IT','HR');
 
 -- Display employees whose city IS NULL.
 SELECT * FROM employees WHERE city IS Null;
 
 -- Display employees whose city IS NOT NULL
 SELECT * FROM employees WHERE city IS NOT Null;
 
 -- Display employees whose salary is BETWEEN 35,000 AND 50,000.
 SELECT * FROM employees WHERE salary BETWEEN 35000 AND 50000;
 
 -- Display employees whose age is BETWEEN 25 AND 30 and city is Chennai. 
 SELECT * FROM employees WHERE age BETWEEN 25 AND 30 AND City = 'Chennai';
 
 -- Display employees whose name starts with A using LIKE.
 SELECT * FROM employees WHERE emp_name LIKE 'A%';
 
 -- Display employees whose name contains vi anywhere using LIKE.
 SELECT * FROM employees WHERE emp_name LIKE '%vi%';
 
 -- 19. Display all unique department names using DISTINCT.
 SELECT DISTINCT department FROM employees;
 
-- Display name,dep,salary & rename them as employee_name, department_name, and monthly_salary using AS.
 SELECT emp_name AS employee_name,department AS department_name,salary AS monthly_salary from employees;
