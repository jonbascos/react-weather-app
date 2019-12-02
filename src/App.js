import React from 'react';
import './App.css';
import axios from 'axios'

import Title from './components/Title'
import Weather from './components/Weather'
import Form from './components/Form'

const api_key = 'bb6344f3f6338e9d64fe6215b04e9805'
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      city: null,
      country: null,
      temp: null,
      max_temp: null,
      min_temp: null,
      conditions: "",
      weather: {},
    }
    this.getWeather = this.getWeather.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  calCelsius(temp) {
    let celsius = Math.floor(temp - 273.15)
    return celsius
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getWeather(event) {
    event.preventDefault();
    // const city=event.target.elements.city.value;
    // const country=event.target.elements.country.value;

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&units=imperial&appid=${api_key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          weather: data,
          temp: Math.floor(data.list[0].main.temp),
          min_temp: Math.floor(data.list[0].main.temp_min),
          max_temp: Math.floor(data.list[0].main.temp_max),
          conditions: data.list[0].weather[0].description,
        })
        console.log(this.state.temp)
        console.log(this.state.conditions)
        console.log('from weather')
        console.log(this.state.weather)
      })
      
    
    }

    // componentDidMount() {
    //   this.getWeather()
    // }

  render() {
    
    return (
      <div className="App">
        <Title />
        <Form 
          city={this.state.city} 
          country={this.state.country} 
          loadweather={this.getWeather}
          change={this.handleChange}
          />

        <Weather 
          city={this.state.city} 
          country={this.state.country} 
          temp={this.state.temp}
          min_temp={this.state.min_temp} 
          max_temp={this.state.max_temp} 
          conditions={this.state.conditions}
          />
      </div>
    )
  }
  
}

export default App;
