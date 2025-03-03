import React, { Component } from 'react';
import StateList from './StateList';

class CountryList extends Component {
  render() {
    const { countries, editCountry, deleteCountry } = this.props;
    return (
      <div>
        {countries.map((country) => (
          <div className="country-card" key={country.id}>
            <h2>{country.name}</h2>
            <div className="action-buttons">
              <button className="edit-button" onClick={() => editCountry(country.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteCountry(country.id)}>
                Delete
              </button>
            </div>
            <StateList country={country} />
          </div>
        ))}
      </div>
    );
  }
}

export default CountryList;