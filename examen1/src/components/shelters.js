import React, { Component } from "react";

class Shelter extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foto: props.foto,
        name: props.name,
        animal:props.animal,
        raza: props.raza,
        location:props.location
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.foto}></img>
        <h3>{this.state.animal}-- {this.state.raza}--{this.state.location}</h3>
        
      </div>
    );
  }
}

export default Shelter;
