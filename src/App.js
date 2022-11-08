import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState({})
  const [location, setLocation] = React.useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
      
  }
}

  
    return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter location'
        type="text"/>
      </div>
    <div className= "container">
      <div className= "top"></div>
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
        <h1>data.name.temp</h1>
      </div>
      <div className="description">
        <p>clouds</p>
      </div>
      <div className= "bottom">
        <div className="feels">
          <p className="bold">65</p>
          
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">45%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">5 mph</p>
          <p>Wind Speed</p>
        </div>
      </div>
      
    </div>
 
    </div>
  );
}

export default App;
