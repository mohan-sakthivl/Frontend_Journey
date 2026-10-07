use roody;
 
CREATE TABLE Students (
    student_id INT PRIMARY KEY auto_increment,
    student_name VARCHAR(50),
    course_id INT,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY auto_increment,
    course_name VARCHAR(50),
    trainer_name VARCHAR(50)
);

