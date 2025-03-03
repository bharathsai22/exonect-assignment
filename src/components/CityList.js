import React, { useState } from 'react';

const CityList = ({ state }) => {
  const [cities, setCities] = useState(state.cities);

  // Add a new city
  const addCity = () => {
    const cityName = prompt('Enter city name:');
    if (cityName) {
      setCities([...cities, { id: Date.now(), name: cityName }]);
    }
  };

  // Delete a city
  const deleteCity = (id) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      setCities(cities.filter((city) => city.id !== id));
    }
  };

  return (
    <div>
      <h4>Cities</h4>
      <button className="add-button" onClick={addCity}>Add City</button>
      {cities.map((city) => (
        <div className="city-card" key={city.id}>
          <p>{city.name}</p>
          <button className="delete-button" onClick={() => deleteCity(city.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;