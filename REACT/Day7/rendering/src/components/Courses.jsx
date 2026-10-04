const Courses = () => {
  const courses = [
    "HTML & CSS",
    "JavaScript",
    "React JS",
    "Python",
    "Node JS"
  ];

  return (
    <div>
      <h2>Available Courses</h2>

      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course}</h3>
        </div>
      ))}
    </div>
  );
};

export default Courses;