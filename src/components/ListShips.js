import * as React from "react";
import ListItem from "./ListItem";
import { List } from 'semantic-ui-react';
import './ListShips.css';

class ListShips extends React.Component {
  constructor() {
    super();
  }
  render() {

    
      return (
        <React.Fragment>
           <div class="Title">Starship List </div>
          <List animated verticalAlign='middle'  size="massive">
         {this.props.starShips.map((starShip) => (
           <ListItem starShip= {starShip} />
         ))}
         </List>
        </React.Fragment>
       
      );
    }
}

export default ListShips;
