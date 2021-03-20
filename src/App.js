import React, { useState, useEffect } from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  
  const [submit,setSubmit]=useState(0)

  const fetchCityWeather = () => {
    
  };
  useEffect(() => {
    fetchCityWeather();
  }, []);
  return (
    <div>
      <CityInput city={city} setCity={setCity} setSubmit={setSubmit} submit={submit} />
      {submit!==0?<CityWeather city={city} submit={submit} setSubmit={setSubmit} />:""}
    </div>
  );
}

export default App;
