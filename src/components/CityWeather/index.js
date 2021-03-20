import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const CityWeather = ({ city, submit,setSubmit }) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e587a3a75ff2c9d419e6ce32132ac4c9`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Some error occurred.");
        } else return response.json();
      })
      .then((data) => {
          //console.log(data)
        setWeather(data);
        setClicked(true);
        
      })
      .catch((e) => {setError(e.message);setClicked(false)});
  }, [submit]);
  //console.log(weather.weather[0].description);
  return  clicked === true ? (
    <Container>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Temperature</th>
            <th>Max Temperature</th>
            <th>Min Temperature</th>
            <th>Humidity</th>
            <th>Wind Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weather.weather[0].description}</td>
            <td>{weather.main.temp}°C</td>
            <td>{weather.main.temp_max}°C</td>
            <td>{weather.main.temp_min}°C</td>
            <td>{weather.main.humidity}%</td>
            <td>{weather.wind.speed} m/s</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  ) : (
    <Container>
    {error}
    </Container>
  );
};

export default CityWeather;
