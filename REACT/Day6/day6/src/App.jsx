import Courses from "./components/Courses";
import Student from "./components/Student";
import Products from "./components/Products";
import Employee from "./components/Employee";

const App = () => {
  const employee = {
    name: "Rahul",
    role: "Frontend Developer",
    salary: 60000,
    city: "Chennai"
  };

  return (
    <div>
      <Courses />

      <Student />

      <Products />

      <Employee employee={employee} />
    </div>
  );
};

export default App;