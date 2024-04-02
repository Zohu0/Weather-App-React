import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

const SearchBox = ({updateInfo}) => {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "af5781cd917c6f9fc8e057bbe6f49096";

    let getWeatherInfo = async () =>{
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            minTemp: jsonResponse.main.temp_min,
            maxTemp: jsonResponse.main.temp_max, 
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        }
        // console.log(result)
        return result;
    } catch{err}{
      // setError("")
      throw err;
    }
        

    }

    let handleChange = (e)=>{
        setCity(e.target.value)
    }

    let handleSubmit = async (e)=>{
    try{
        e.preventDefault();
        // console.log(city);
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
        // alert(`Your city is ${city}`);
    }catch(err){
      setError(true)
    }
        
    }

  return (
    <div className='searchBox'>
      <form  onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      {error && <p style = {{color: "red", fontSize: "24px"}}>No such place found!</p>}
      </form>
    </div>
  )
}

export default SearchBox
