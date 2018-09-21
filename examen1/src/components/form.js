import React, { Component } from "react";

import axios from "axios";
import Shelter from './shelters';

class Form extends Component {
  constructor() {
    super();
    this.handleChange2 = this.handleChange2.bind(this);
    this.getShelters = this.getShelters.bind(this);
    this.mostrarShelter = this.mostrarShelter.bind(this);
    this.state = {
      API_KEY: "5c88fc933ac5b6b0326b3539b9c1ae03",
      razas: [],
      animal: "",
      location: "",
      raza: "",
      name: "",
      foto: "",
      shelters: []
    };
  }
  handleChange = event => {
    this.setState({ animal: event.target.value });
    //console.log(event.target.value);
    axios
      .get(
        "http://cors.io/?http://api.petfinder.com/breed.list?key=5c88fc933ac5b6b0326b3539b9c1ae03&animal=" +
          event.target.value +
          "&format=json"
      )
      .then(res => {
        this.setState({
          razas: res.data.petfinder.breeds.breed.map(raza => raza.$t)
        });
        console.log(this.state.razas);
      });
  };
  razasCombobox() {
    let opciones = [];
    opciones = this.state.razas.map(raza => (
      <option value={raza}>{raza}</option>
    ));
    return <select onChange={this.handleChange2}>{opciones}</select>;
  }
  handleChange2(event) {
    this.setState({ raza: event.target.value });
  }

  getShelters(event) {
    event.preventDefault();
    var arrShelters = [];
    let url = `http://api.petfinder.com/pet.find?key=5c88fc933ac5b6b0326b3539b9c1ae03&location=${this.state.location}&animal=${this.state.animal}&breed=${this.state.raza}&format=json`;

    axios.get(url.replace(/ /g,"%20")).then(res => {
      let arrPets = res.data.petfinder.pets.pet;
      let names = arrPets.map(pet => pet.name.$t);
      let fotos = arrPets.map(pet => pet.media.photos.photo[0].$t);

      this.setState({
        name: names,
        foto: fotos,
      });

      for (let i = 0; i < names.length; i++) {
        arrShelters.push(
          // <Shelter
          //   key={i}
          //   name={names[i]}
          //   foto={fotos[i]}
          //   animal={this.state.animal}
          //   raza={this.state.raza}
          //   location={this.state.location}
          // />
          <h1 key={i}>hola</h1>
          );      
        }
    });c
    console.log(arrShelters)
    this.setState({shelters: arrShelters});
  }

  mostrarShelter() {
    return (
      this.state.shelters
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getShelters}>
          <h1>Location</h1>
          <input
            type="text"
            name="firstname"
            onChange={event => this.setState({ location: event.target.value })}
          />
          <h1>Animal</h1>
          <select onChange={this.handleChange}>
            <option value="barnyard">Barnyard</option>
            <option value="bird">Bird</option>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
            <option value="horse">Horse</option>
            <option value="reptile">reptile</option>
            <option value="smallfurry">Smallfurry</option>
          </select>
          <h1>Breed</h1>
          {this.razasCombobox()}
          <button type="submit">
            Buscar!
          </button>
          {this.state.shelters}
          {this.mostrarShelter()}
        </form>
      </div>
    );
  }
}

export default Form;
