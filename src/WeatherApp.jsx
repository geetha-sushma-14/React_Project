import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import "./WeatherApp.css";
export default function WeatherApp() {
    const [weatherinfo,setweatherinfo]=useState(
        {
            city :"Delhi",
            feelsLike : 24.84,
            temp: 25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"haze"
        }
    );
    
    let updateInfo = (newinfo)=>{
        setweatherinfo(newinfo);
    };
    return (
        <div className='WeatherApp'>
            <h1><i>Weather App</i> </h1>
            <h3>A simple Weather App that displays current weather information.</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherinfo={weatherinfo}/>
        </div>
    );
};