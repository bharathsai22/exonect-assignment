import React, { Component } from 'react';
import CountryList from './components/CountryList';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  // Add a new country
  addCountry = () => {
    const countryName = prompt('Enter country name:');
    if (countryName) {
      this.setState((prevState) => ({
        countries: [
          ...prevState.countries,
          { id: Date.now(), name: countryName, states: [] },
        ],
      }));
    }
  };

  // Edit a country
  editCountry = (id) => {
    const newName = prompt('Enter new country name:');
    if (newName) {
      this.setState((prevState) => ({
        countries: prevState.countries.map((country) =>
          country.id === id ? { ...country, name: newName } : country
        ),
      }));
    }
  };

  // Delete a country
  deleteCountry = (id) => {
    if (window.confirm('Are you sure you want to delete this country?')) {
      this.setState((prevState) => ({
        countries: prevState.countries.filter((country) => country.id !== id),
      }));
    }
  };

  render() {
    return (
      <div className="app-container">
        <h1>Country, State, and City Management</h1>
        <button className="add-button" onClick={this.addCountry}>
          Add Country
        </button>
        <CountryList
          countries={this.state.countries}
          editCountry={this.editCountry}
          deleteCountry={this.deleteCountry}
        />
      </div>
    );
  }
}

export default App;