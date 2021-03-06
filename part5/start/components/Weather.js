import React, {Component} from "react";
import Large from "./Weather/Large";
import Small from "./Weather/Small";

export default class Weather extends Component {
  render() {
    return (
      <div>
        <h1>Weather for {this.props.city}</h1>

        <Large />

        <br/>

        <div className="row-3">
          <Small />
          <Small />
          <Small />
        </div>
        <div className="row-3">
          <Small />
          <Small />
          <Small />
        </div>
      </div>
    )
  }
}