import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const CityWeather = ({ city, submit, setSubmit }) => {
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e587a3a75ff2c9d419e6ce32132ac4c9`
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
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setClicked(false);
        setLoading(false);
      });
  }, [submit]);
  //console.log(weather.weather[0].description);
  return loading === true ? (
    <Container>
      <h2>Loading...</h2>
    </Container>
  ) : clicked === true ? (
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
    <Container><h2 className="text-danger">{error}</h2></Container>
  );
};

export default CityWeather;
