function WeatherInterface({ weather }) {
    if (
        !weather ||
        !weather.main ||
        !weather.weather ||
        !Array.isArray(weather.weather) ||
        weather.weather.length === 0
    ) {
        return <p>Getting weather data!</p>;
    }

    const { name, main, weather: details } = weather;
    const icon = details[0].icon;
    return (
        <div className="weather-interface">
            <h2>{name}</h2>
            <p>{main.temp}&deg;C</p>
            <p>{details[0].description}</p>
            <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
            />
        </div>
    );
}
export default WeatherInterface;
