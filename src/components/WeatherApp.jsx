import React, { useState } from "react";
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

const WeatherApp = () => {

    const [weatherInfo, setweatherInfo] = useState("")

    let updateInfo = (weatherResult)=>{
        setweatherInfo(weatherResult);
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Delta</h1>
      <SearchBox updateInfo = {updateInfo}/>
      <InfoBox info = {weatherInfo}/>
    </div>
  );
};

export default WeatherApp;