
export default function Weather() {
  let weatherData = {
    city: "London",
    date: "06 May 2021",
    temperature: 8,
    forecast: "Fog",
    humidity: 80,
    wind: 4,
    imgUrl: "http://openweathermap.org/img/wn/50d@2x.png"
  };
  return (
    <div className="row">
      <div className="col-4">
        <div className="city">
          <span className="MainCity">{weatherData.city}</span>
          <br />
          <span className="date">{weatherData.date}</span>
          <br />
          <br />
        </div>
      </div>
      <div className="col-4">
        <div className="forecast">
          <span className="dayForecast">{weatherData.forecast}</span>
          <img src={weatherData.imgUrl} alt="" id="icon" />
        </div>
      </div>
      <div className="col-4">
        <div className="temperature">
          <span className="currentTemperature">
            {weatherData.temperature}°C
          </span>
          <br />
          <span className="conditions">
            Humidity:<span id="humidity">{weatherData.humidity}</span>
            <br />
            Wind: <span id="wind">{weatherData.wind}</span>mph
          </span>
        </div>
      </div>
    </div>
  );
}
