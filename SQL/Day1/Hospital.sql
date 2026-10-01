use roody;

create table Hospital(
	Hospital_ID INT Primary Key Auto_Increment,
    Hospital_Name VARCHAR(50),
    Doctor_Count INT,
    Bed_Count INT,
    Contact_Number VARCHAR(15)
);

truncate table Hospital;
empdetailsdrop table Hospital;