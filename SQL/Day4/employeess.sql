use roody;

CREATE TABLE employeess (
    employee_id INT PRIMARY KEY auto_increment,
    employee_name VARCHAR(50),
    department VARCHAR(50),
    city VARCHAR(50),
    salary INT
);

INSERT INTO employeess
(employee_name, department, city, salary)
VALUES
('Arun',   'IT', 'Chennai',   55000),
('Priya',  'IT',  'Chennai',   45000),
('Rahul',  'IT', 'Bangalore', 60000),
('Divya',  'HR',  'Chennai',   40000),
('Karthik','HR',  'Bangalore', 45000),
('Sneha',  'Finance',   'Mumbai',    50000),
('Vijay',  'Finance',   'Mumbai',    55000),
('Anu',    'Finance',   'Chennai',   48000),
('Ravi',   'Sales',     'Delhi',     35000),
('Meena',  'Sales',     'Delhi',     42000),
('Suresh', 'Sales',     'Mumbai',    38000),
('Nisha',  'Marketing', 'Chennai',   65000);

-- 1. Employee count by department
select department , count(*) FROM employeess GROUP BY department;
-- 2. Total salary by department
select department , sum(salary) FROM employeess GROUP BY department;
-- 3. Average salary by department
select department , avg(salary) FROM employeess GROUP BY department;
-- 4. Employee count by city
select city , count(*) FROM employeess GROUP BY city;
SELECT department, COUNT(*) FROM employeess GROUP BY department having COUNT(*) > 2;
SELECT department, avg(salary) FROM employeess GROUP BY department having avg(salary) > 40000;


SELECT department, count(*) as empcount,avg(salary) FROM employeess GROUP BY department having empcount >= 2;

SELECT city, sum(salary) as totalsalary,max(salary) as maxsalary FROM employeess GROUP BY city having sum(salary) > 80000;

SELECT department, count(*) ,sum(salary) ,avg(salary),min(salary),max(salary) 
FROM employeess GROUP BY department having count(*) >= 2 and avg(salary) > 40000 order by avg(salary) desc;


