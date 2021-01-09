import './Loading.css';
import * as React from "react";
import Rocket from "./images/rocket.png"

class Loading extends React.Component {
  constructor() {
    super();
  }
  render() {

    
      return (
        <React.Fragment>
        <img class="rocket launch"  src={Rocket} />
        </React.Fragment>
       
      );
    }
}

export default Loading;
