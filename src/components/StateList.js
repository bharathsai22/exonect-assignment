import React, { Component } from 'react';
import CityList from './CityList';

class StateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: props.country.states,
    };
  }

  // Add a new state
  addState = () => {
    const stateName = prompt('Enter state name:');
    if (stateName) {
      this.setState((prevState) => ({
        states: [
          ...prevState.states,
          { id: Date.now(), name: stateName, cities: [] },
        ],
      }));
    }
  };

  // Edit a state
  editState = (id) => {
    const newName = prompt('Enter new state name:');
    if (newName) {
      this.setState((prevState) => ({
        states: prevState.states.map((state) =>
          state.id === id ? { ...state, name: newName } : state
        ),
      }));
    }
  };

  // Delete a state
  deleteState = (id) => {
    if (window.confirm('Are you sure you want to delete this state?')) {
      this.setState((prevState) => ({
        states: prevState.states.filter((state) => state.id !== id),
      }));
    }
  };

  render() {
    return (
      <div>
        <h3>States</h3>
        <button className="add-button" onClick={this.addState}>
          Add State
        </button>
        {this.state.states.map((state) => (
          <div className="state-card" key={state.id}>
            <h4>{state.name}</h4>
            <div className="action-buttons">
              <button className="edit-button" onClick={() => this.editState(state.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => this.deleteState(state.id)}>
                Delete
              </button>
            </div>
            <CityList state={state} />
          </div>
        ))}
      </div>
    );
  }
}

export default StateList;