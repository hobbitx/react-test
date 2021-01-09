import * as React from "react";
import "./StarShiptContent.css";
import { Image } from "semantic-ui-react";
import crew from "./images/crew.png";
import people from "./images/people.png";
import cargo from "./images/cargo.png";
import stop from "./images/stops.png";
import speed from "./images/speed.png";

class StarShiptContent extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.starShip);
    return (
      <React.Fragment>
        <div
          class="content"
          style={{
            display: this.props.show,
          }}
        >
          <div class="item">
            <Image avatar id="icon" src={crew} size="mini" />
            Crew: {this.props.starShip.crew}
          </div>
          <div class="item">
            <Image avatar id="icon" src={people} size="mini" />
            Passengers: {this.props.starShip.passengers}
          </div>
          <div class="item">
            {" "}
            <Image avatar id="icon" src={cargo} size="mini" />
            Cargo: {this.props.starShip.cargo}
          </div>
          <div class="item">
            <Image avatar id="icon" src={stop} size="mini" />
            Stops: {parseInt(this.props.starShip.stops)}
          </div>
          <div class="item">
            <Image avatar id="icon" src={speed} size="mini" />
            Mglt: {this.props.starShip.mglt}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default StarShiptContent;
