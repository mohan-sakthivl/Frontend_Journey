USE ROODY;

CREATE TABLE departments (
    department_id INT PRIMARY KEY auto_increment,
    department_name VARCHAR(50)
);

INSERT INTO departments (department_name) VALUES ('IT'), ('HR'),('Finance'),('Marketing');

CREATE TABLE emp (
    employee_id INT PRIMARY KEY auto_increment,
    employee_name VARCHAR(50),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO emp
(employee_name, salary, department_id)
VALUES
('Arun', 45000, 10),
('Bala', 35000, 20),
('Kumar', 55000, 10),
('Priya', 40000, 30);