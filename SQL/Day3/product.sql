use roody;
 
-- select department,count(department) from employees group by department ;

create table product(
	Sno int primary key auto_increment,
    product_name varchar(30),
    product_price int,
    product_quantity int
    
);

alter table product add product_category varchar(20);

insert into product(product_name,product_price,product_quantity,product_category) values
('Boost',10,5,'health drink'),
('Brush',30,2,'home utility'),
('milk',26,1,'diary products'),
('sugar',50,1,'household'),
('Batter',30,2,'Batter')
;