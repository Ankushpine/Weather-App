import React, { useEffect, useState } from "react";

import "./Wheather.css";
import Description from "../Description/Description";

import { WheatherData } from "../../Data/WheatherData";

export default function Wheather() {
  const [city, setCity] = useState("");
  const [wheather, setWheather] = useState();
  const [units, setUnits] = useState("metric");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      const data = await WheatherData(city, units);
      if (data === 404) {
        setError(true);
        setWheather();
      } else if (data !== 404 && data !== 400) {
        setError(false);
        setWheather(data);
      }
    };

    fetchdata();
  }, [units, city]);

  const handleUnitsClick = async (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcius = currentUnit === "C";
    button.innerText = isCelcius ? "°F" : "°C";
    setUnits(isCelcius ? "metric" : "imperial");
  };

  const enterKeyPress = async (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app">
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input
              type="text"
              name="city"
              placeholder="Enter name of city... "
              required
              onKeyDown={enterKeyPress}
            />
            <button className="typeCon" onClick={(e) => handleUnitsClick(e)}>
              °F
            </button>
          </div>

          {error ? (
            <p className="Error">
              Please enter the correct name of the city...
            </p>
          ) : (
            false
          )}

          {wheather && (
            <>
              <div className="section section__temperature">
                <div className="icon">
                  <h3>{`${wheather.name}, ${wheather.country}`}</h3>
                  <img src={wheather.iconUrl} alt="Wheather Icon" />
                  <h3>{wheather.description}</h3>
                </div>

                <div className="temperature">
                  <h1>{`${wheather.temp.toFixed()}°${
                    units === "metric" ? "C" : "F"
                  }`}</h1>
                </div>
              </div>

              <Description wheather={wheather} units={units} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
