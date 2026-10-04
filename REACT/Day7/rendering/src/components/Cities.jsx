const Cities = () => {
  const cities = [
    "Chennai",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Hyderabad",
    "Kochi"
  ];

  return (
    <div>
      <h2>Cities</h2>

      {cities.map((city, index) => (
        <p key={index}>{city}</p>
      ))}
    </div>
  );
};

export default Cities;