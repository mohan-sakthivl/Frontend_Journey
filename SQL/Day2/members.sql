use governmentoffice;

create table memberinfo(
	member_id int primary key auto_increment,
    member_name varchar(20),
    member_age int,
    member_gender varchar(10),
    member_dept varchar(10),
    mobile_number varchar(20) 
);
alter table memberinfo rename column member_number to mobile_number;
insert into memberinfo (member_name,member_age, member_gender,member_dept,mobile_number) values ("renu",24,"female","jrdev",7890456473);
