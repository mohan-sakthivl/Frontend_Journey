USE ROODY;

SELECT * FROM employeess WHERE salary > (SELECT avg(salary) as avgsalary FROM employeess);

SELECT * FROM employeess WHERE salary = (SELECT max(salary) FROM employeess);

SELECT * FROM employeess WHERE salary = (SELECT min(salary) FROM employeess);

SELECT * FROM employeess WHERE salary > (SELECT avg(salary) FROM employeess where department = 'IT');

SELECT * FROM employeess WHERE department IN (SELECT department FROM employeess where department in ('IT','HR'));

SELECT * FROM employeess WHERE department IN (SELECT department FROM employeess where department Not in ('HR'));

select * from employeess where salary < (select max(salary) from employeess );