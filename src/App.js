import React from 'react';
import './App.css';
import axios from 'axios';

function App() {

  /*const url='https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=137f22e6047c3b6fec57becb0acd9e87
'
  */return (
    <div className="app">
      
    <div className= "container">
      <div className= "top"></div>
      <div className="location">
        <p>Dallas</p>
      </div>
      <div className="temp">
        <h1>60</h1>
      </div>
      <div className="description">
        <p>clouds</p>
      </div>
      <div className= "bottom">
        <div className="feels">
          <p>65</p>
        </div>
        <div className="humidity">
          <p>45%</p>
        </div>
        <div className="wind">
          <p>5 mph</p>
        </div>
      </div>

    </div>
 
    </div>
  );
}

export default App;
