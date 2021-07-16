// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component {
  
  handleClick = (event) => {
    event.persist()
    const xCoord = event.clientX;
    const yCoord = event.clientY;
    
    const arr = ([xCoord, yCoord]) 

    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Coordinates Button</button>
    )

  }
}