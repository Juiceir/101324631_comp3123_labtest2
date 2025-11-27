//Labtest2
//Jaeden Salandanan 101324631
import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherInterface from "./WeatherInterface";
import SearchBar from "./SearchBar";

const API_KEY = "27bba0c95ca65ed36e0a85bd9297140d";

function App() {
    const [city, setCity] = useState("Toronto");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.cod !== 200) {                
                    setWeather(null);
                    setError("City or weather not found");
                } else {
                    setWeather(data);
                    setError(""); 
                }
            })
    }, [city]);
    return (
        <div className="app">
            <h1>Comp3123 Weather Application</h1>
            <SearchBar setCity={setCity} />
            {weather && <WeatherInterface weather={weather} />}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default App;
