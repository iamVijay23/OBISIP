import React, { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {

  handleClear = () => {
    // Call a function to clear the completed tasks
    this.props.onClear();
  };

  render() {
    return (
      <div className="container">
        <div className="list">
          <h3>Task To Complete</h3>
          {this.props.todos &&
            this.props.todos.map((todo, i) => (
              <Todo key={i} todo={todo} onRemove={this.props.onRemove} />
            ))}
        </div>

        <div className="completed-task">
          <h3>Completed Tasks</h3>
          {this.props.completedTasks &&
            this.props.completedTasks.map((completedTask, i) => (
              <Todo key={i} todo={completedTask} />
            ))}
         <button type="reset" onClick={this.handleClear}>Clear</button>
        </div>
      </div>
    );
  }
}
