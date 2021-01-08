import starShipControl from "../logic/StarshipsControl";
import Calculator from "../logic/Calculator";
import * as React from "react";
import Button from "@material-ui/core/Button";

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      starShips: [],
      value: 0,
      loading: true,
      loadingScreen: "none",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    console.log("will");
  }

  componentDidMount() {}

  Calculate = async () => {
    this.setState({
      loadingScreen: "block",
    });
    await this.LoadStartShips();
  };
  LoadStartShips = async () => {
    let starShipsAll = await starShipControl();
    let starShips = Calculator(this.state.value, starShipsAll);
    this.setState({
      starShips: starShips,
      loading: false,
      loadingScreen: "block",
    });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    console.log(this.state.loading);
    if (this.state.loading === true) {
      return (
        <React.Fragment>
          <div>
            Nome:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <Button
            onClick={() => {
              this.Calculate();
            }}
            variant="contained"
          >
            Calculate
          </Button>
          <div
            style={{
              display: this.state.loadingScreen,
            }}
          >
            <h2>Calculando...</h2>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1> Starship List </h1>
          {this.state.starShips.map((starShip) => (
            <div>
              <p>Name: {starShip.name} </p>
              <p>Crew: {starShip.crew}</p>
              <p>Passengers: {starShip.passengers}</p>
              <p>Cargo: {starShip.cargo}</p>
              <p>Stops: {parseInt(starShip.stops)}</p>
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
