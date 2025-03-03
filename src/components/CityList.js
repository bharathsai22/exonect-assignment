import React, { Component } from 'react';

class CityList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: props.state.cities,
    };
  }

  // Add a new city
  addCity = () => {
    const cityName = prompt('Enter city name:');
    if (cityName) {
      this.setState((prevState) => ({
        cities: [...prevState.cities, { id: Date.now(), name: cityName }],
      }));
    }
  };

  // Delete a city
  deleteCity = (id) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      this.setState((prevState) => ({
        cities: prevState.cities.filter((city) => city.id !== id),
      }));
    }
  };

  render() {
    return (
      <div>
        <h4>Cities</h4>
        <button className="add-button" onClick={this.addCity}>
          Add City
        </button>
        {this.state.cities.map((city) => (
          <div className="city-card" key={city.id}>
            <p>{city.name}</p>
            <button className="delete-button" onClick={() => this.deleteCity(city.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;