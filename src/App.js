import React, { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";
import "./styles.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ],
      completedTasks: []
    };
  }

  handleAdd = (text) => {
    this.setState((prevState) => ({
      todos: [{ text }, ...prevState.todos]
    }));
  };

  handleRemove = (text) => {
    const completedTask = this.state.todos.find((todo) => todo.text === text);
    if (completedTask) {
      this.setState((prevState) => ({
        completedTasks: [...prevState.completedTasks, completedTask],
        todos: prevState.todos.filter((todo) => todo.text !== text)
      }));
    }
  };
   
  handleClear = () => {
    this.setState({ completedTasks: [] });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form onAdd={this.handleAdd} />
        <List
          todos={this.state.todos}
          completedTasks={this.state.completedTasks}
          onRemove={this.handleRemove}
          onClear={this.handleClear}
        />
      </div>
    );
  }
}
