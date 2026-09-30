CREATE database roody;

use roody;

CREATE TABLE empdetails(

employeeid int primary key auto_increment,
employeename varchar(20),
employeeage varchar(20),
employeerole varchar(20),
joiningdate date
);

ALTER table empdetails drop column joiningdate;
