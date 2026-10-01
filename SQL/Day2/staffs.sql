create database governmentoffice;

use governmentoffice;
create table staffs(
	staff_id int primary key auto_increment,
    staff_name varchar(20),
    staff_age int,
    staff_gender varchar(10),
    staff_dept varchar(10),
    mobile_number varchar(20) 
);
 
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("Mohan",21,"Male","FullStack",9345396700);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("Vinothini",20,"female","frontend",3759295746);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("Anbumadhi",20,"female","React dev",3759603746);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("ram",45,"Male","ui",7685589674);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("ravi",56,"Male","ux",574835867);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("sam",65,"Male","js",4758037465);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("som",34,"Male","FullStack",4567893210);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("madhu",24,"female","dotnet",0984538596);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("madhi",26,"female","java",0983453217);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("kumar",76,"Male","python",4536728476);
insert into staffs (staff_name,staff_age,staff_gender,staff_dept,mobile_number) values ("kiran",35,"Male","FullStack",5746354755);





delete from staffs where staff_id = 11;





