import React from "react";
import "./styles.css";

/**
 * Define States, a React component of CS142 Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.state = { inputValue: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const states = window.cs142models.statesModel();

    let input = this.state.inputValue.toLowerCase();
    const filteredStates = states.filter((state) => state.toLowerCase().includes(input));

    const stateElements = [];
    filteredStates.forEach((state) => {
      stateElements.push(<li key={state}>{state}</li>);
    });

    return (
      <div className="States">
        <h1>Part 2: States View</h1>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <p>User Input: {this.state.inputValue}</p>
        <ul>{stateElements}</ul>
      </div>
    );
  }
}

export default States;
