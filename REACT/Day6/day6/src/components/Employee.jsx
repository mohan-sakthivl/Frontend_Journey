const Employee = (props) => {
  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {props.employee.name}</p>
      <p>Role: {props.employee.role}</p>
      <p>Salary: ₹{props.employee.salary}</p>
      <p>City: {props.employee.city}</p>
    </div>
  );
};

export default Employee;