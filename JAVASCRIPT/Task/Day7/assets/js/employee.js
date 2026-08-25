let employees =  [{name:"mohan",salary:20000},{name:"vinoth",salary:35000},{name:"tharun",salary:45000}];

let targetSalary = 40000;

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > targetSalary) {
        console.log("Name:", employees[i].name);
        console.log("Salary:", employees[i].salary);
    }
}