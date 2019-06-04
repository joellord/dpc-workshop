import React, {Component} from "react";

export default class Small extends Component {
  render() {
    let dayOfWeek = (dt) => {
      let d = new Date(dt * 1000);
      return d.toLocaleDateString(window.navigator.language, {weekday: 'long'});
    };

    return(
      <div className="col center border">
        Weather for {dayOfWeek(this.props.dt)} <br/>
        {this.props.temp.max} C / {this.props.temp.min} C
      </div>
    )
  }
}