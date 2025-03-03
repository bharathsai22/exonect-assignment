import React, { useState } from 'react';
import CityList from './CityList';

const StateList = ({ country }) => {
  const [states, setStates] = useState(country.states);

  // Add a new state
  const addState = () => {
    const stateName = prompt('Enter state name:');
    if (stateName) {
      setStates([...states, { id: Date.now(), name: stateName, cities: [] }]);
    }
  };

  // Edit a state
  const editState = (id) => {
    const newName = prompt('Enter new state name:');
    if (newName) {
      setStates(
        states.map((state) =>
          state.id === id ? { ...state, name: newName } : state
        )
      );
    }
  };

  // Delete a state
  const deleteState = (id) => {
    if (window.confirm('Are you sure you want to delete this state?')) {
      setStates(states.filter((state) => state.id !== id));
    }
  };

  return (
    <div>
      <h3>States</h3>
      <button className="add-button" onClick={addState}>Add State</button>
      {states.map((state) => (
        <div className="state-card" key={state.id}>
          <h4>{state.name}</h4>
          <div className="action-buttons">
            <button className="edit-button" onClick={() => editState(state.id)}>Edit</button>
            <button className="delete-button" onClick={() => deleteState(state.id)}>Delete</button>
          </div>
          <CityList state={state} />
        </div>
      ))}
    </div>
  );
};

export default StateList;