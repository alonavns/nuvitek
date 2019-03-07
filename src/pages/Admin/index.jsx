import React, { Component } from "react";
import { withFirebase } from "react-redux-firebase";

class Admin extends Component {
  sampleTodo = { text: "Sample", done: false };
  pushSample = () => firebase.push("todos", sampleTodo);
  render() {
    return (
      <div className="AdminWrapper">
        <h1>Todos</h1>
        <input type="text" ref="newTodo" />
        <button onClick={this.pushSample}>Add</button>
      </div>
    );
  }
}

export default withFirebase(Admin);
