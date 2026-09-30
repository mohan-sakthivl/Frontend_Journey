use roody;

CREATE TABLE ProductDetails(
	Product_ID int primary key auto_increment,
    Product_Name varchar(20),
    Price varchar(20),
    Quantity int unique,
    Supplier varchar(20),
    Manufacturing_Date date,
    Expiry_Date date
);
-- adding new column 
alter table ProductDetails add Contact_Number varchar(20);
alter table ProductDetails add Rating varchar(20);

-- rename 
alter table ProductDetails rename column Contact_Number to Mobile_Number;

-- modify data type
alter table ProductDetails modify column  Price int;

-- drop 
alter table ProductDetails drop column Rating;

-- rename table 
rename table ProductDetails to Product_Details;
