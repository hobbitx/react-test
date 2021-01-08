import starShipControl from "../logic/StarshipsControl";
import Calculator from "../logic/Calculator";
import React from "react";
class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      startShips: [],
      text: "",
      loading: true,
    };
  }

  componentWillMount() {
    console.log("will");
    this.LoadStartShips();
  }

  componentDidMount() {}

  LoadStartShips = async () => {
    let starShips = await starShipControl();
    console.log(starShips);
    let name = Calculator(1000000, starShips);
    console.log(name);
    this.setState({
      startShips: starShips,
      names: name,
      loading: false,
    });
  };

  render() {
    console.log(this.state.loading);
    if (this.state.loading === true) {
      return <h2>Intializing...</h2>;
    } else {
      return (
        <React.Fragment>
          <h1> Lista de naves </h1>
          {this.state.names.map((starShip) => (
            <div>
              <p>Name: {starShip.name} </p>
              <p>MGLT: {starShip.MGLT}</p>
              <p>Stops: {starShip.stops}</p>
              <hr />
              <hr />
            </div>
          ))}
        </React.Fragment>
      );
    }
  }
}

export default Main;
