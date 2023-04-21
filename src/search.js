import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    console.log("aa", e);
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    if (searchInput.length > 0) {
      countries.filter((country) => {
        console.log(country.name.match(searchInput), "aa");
        return country.name.match(searchInput);
        // country.continent.match(searchInput);
      });
    }
  }, [searchInput]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Continent</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, id) => (
            <tr>
              <td>{country.name}</td>
              <td>{country.continent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
