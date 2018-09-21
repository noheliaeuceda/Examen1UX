import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class Weather extends Component {
    constructor(props){
        super(props)
            this.state =
            {
                resul : []
        }
    }

  render() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${this.state.API_KEY}&u
      nits=metric`).then(res => {
        this.setState({
          resul: res.data
        })
      })
    return (
      <ul >
        <li>
          <div>
            <h2>CIUDAD</h2>
            <h2>{resul.name}</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>TEMPERATURA</h2>
            <h2>{resul.temp}</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>HUMEDAD</h2>
            <h2>{resul.humidity}</h2>
          </div>
        </li>
      </ul>
    );
  }
}

export default Weather;
