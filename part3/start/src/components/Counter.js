import React, {Component} from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div>
        <h1>The Counter</h1>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button>-</button>
      </div>
    )
  }
}

/***
 React.createElement("div", {},
   React.createElement("h1", {}, "The Counter"),
   React.createElement("button", {onClick: this.handleIncrement}, "+"),
   React.createElement("span", {}, state.counter),
   React.createElement("button", {}, "-")
 )
 **/