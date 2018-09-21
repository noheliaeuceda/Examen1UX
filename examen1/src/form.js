import React, { Component } from 'react';

class Form extends  Component {
    constructor(props){
        super(props)
            this.state ={
        }
        this.setCity = this.setCity.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }

    componentDidMount() {
        this.setState({
            city: 'Cataratas',
            country: 'Venezuela'

        });
      }

     setCity (e) {
          const value = e.target.value;
        this.setState( {
            city: value
        });
       }

       setCountry (e) {
          const value = e.target.value;
          {console.log(value)}
        this.setState( {
            country: value
        });
       }

   

    render() {
        return (
            <div>
              <input type = "text"
                onChange = {this.setCity}
                name = "city"/>
            <input type = "text"
            onChange = {this.setCountry}
            name = "country"/>
            <button onClick={this.Updatestate}>Obtener Clima</button>
          </div>
        );
    }
  }

  export default Form;