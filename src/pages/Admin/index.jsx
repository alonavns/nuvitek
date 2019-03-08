import React, { Component } from "react";
import { withFirebase } from "react-redux-firebase";

class Admin extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  sampleTodo = { text: "Sample", done: false };
  pushSample = () => this.props.firebase.push("todos", this.sampleTodo);
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
