import { useState } from "react";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    role: "",
    salary: ""
  });

  const [submittedEmployee, setSubmittedEmployee] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedEmployee(employee);

    setEmployee({
      employeeName: "",
      employeeId: "",
      department: "",
      role: "",
      salary: ""
    });
  };

  return (
    <div>
      <h2>Employee Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employeeName"
          placeholder="Employee Name"
          value={employee.employeeName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={employee.role}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {submittedEmployee && (
        <div>
          <h3>Employee Details</h3>

          <p>Name: {submittedEmployee.employeeName}</p>
          <p>ID: {submittedEmployee.employeeId}</p>
          <p>Department: {submittedEmployee.department}</p>
          <p>Role: {submittedEmployee.role}</p>
          <p>Salary: ₹{submittedEmployee.salary}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;