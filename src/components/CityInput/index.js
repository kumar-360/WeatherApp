import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const CityInput = ({ city, setCity,setSubmit, submit }) => {
  const [error, setError] = useState("");
  
  const handleClick = () => {
    if (city === "") {
      setError("City field should not be empty.");
    } else {
      setError("");
      setSubmit(submit+1)
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <h3 className="text-danger">{error}</h3>
        </Form.Group>

        <Button variant="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityInput;
