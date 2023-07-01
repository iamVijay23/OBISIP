import React, { Component } from "react";

export class Form extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text.trim() !== "") {
      this.props.onAdd(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
