import React, { useState } from "react";
import "./App.css";
import DisplayWeather from "./DisplayWeather.js";

function App() {
  const APIKEY = "972f5bd464b8af03054ba44a08f082f2";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  async function weatherData(event) {
    event.preventDefault();

    if (city === "") alert("Search City Please !");
    else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="search"
          onChange={handleChange}
          placeholder="city"
          className="inputFeild"
          name="city"
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
