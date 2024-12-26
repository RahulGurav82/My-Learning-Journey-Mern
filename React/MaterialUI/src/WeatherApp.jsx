import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city : "Mumbai",
        feelslike : 24.65,
        temp : 25.05,
        tempMin : 25.05,
        humidity : 47,
        Weather : "haze",
    });

    return (
        <div>
            <h3>Weather App</h3>
            <SearchBox />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}