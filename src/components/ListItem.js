import * as React from "react";
import StarShiptContent from "./StarShiptContent";
import "./ListItem.css";
import { List, Image } from "semantic-ui-react";
import Collapse from '@material-ui/core/Collapse';
import Affiliation from "../logic/Affiliation";


class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: "none",
      open: false,
    };
  }
  showInfo;

  ShowInfo = () => {
    this.setState({
      open: !this.state.open ,
      show: !this.state.open ? "block" : "none",
    });

    console.log("Show?=" + this.state.show);
  };
  render() {
    return (
      <List.Item
        onClick={() => {
          this.ShowInfo();
        }}
      >
        <Image class="faction" avatar src={Affiliation(this.props.starShip.name)} size="tiny" />
        <List.Content>
          <List.Header>{this.props.starShip.name}</List.Header>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <StarShiptContent
              starShip={this.props.starShip}
              show={this.state.show}
            />
          </Collapse>
        </List.Content>
      </List.Item>
    );
  }
}

export default ListItem;
