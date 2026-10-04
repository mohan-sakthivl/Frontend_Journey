const Languages = () => {
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "TypeScript"
  ];

  return (
    <div>
      <h2>Programming Languages</h2>

      {languages.map((language, index) => (
        <p key={index}>{language}</p>
      ))}
    </div>
  );
};

export default Languages;