import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Search</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />

      <p>You are searching for: {search}</p>
    </div>
  );
};

export default SearchInput;