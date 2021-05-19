import React from "react";
import "./../App.css";
import { Jumbotron, Form, Card, Row, Col, Button } from "react-bootstrap";

import TableControlled from "./TableControlled";
class RegistrationFormControlled extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      address: "",
      state: "",
      city: "",
      zip: "",
      radio: "",
      load: false,
    };
  }

  emailChange = (e) => {
    this.setState({ username: e.target.value });
  };

  passwordChange = (password) => {
    this.setState({ password: password.target.value });
  };
  addressChange = (address) => {
    this.setState({ address: address.target.value });
  };
  cityChange = (city) => {
    this.setState({ city: city.target.value });
  };
  stateChange = (state) => {
    this.setState({ state: state.target.value });
  };
  zipChange = (zip) => {
    this.setState({ zip: zip.target.value });
  };
  radioMaleChange = (radio) => {
    this.setState({ radio: "male" });
  };
  radioFemaleChange = (radio) => {
    this.setState({ radio: "female" });
  };

  makeApiCall = () => {
    this.setState({ load: true, postData: null });

    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.username,
        job: this.state.address,
      }),
    };
    fetch("https://reqres.in/api/users", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ postData: data, load: false });
      });
  };
  render() {
    // console.log("frm user", this.state.username);
    // console.log("frm pass", this.state.password);
    // console.log("frm address", this.state.address);
    // console.log("frm state", this.state.state);

    // const userDetails = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   address: this.state.address,
    //   state: this.state.state,
    //   city: this.state.city,
    //   zip: this.state.zip,
    //   radio: this.state.radio,
    //   load: this.state.load,
    // };

    return (
      <div>
        <h1>Controlled Registration Form</h1>
        <Jumbotron>
          <div style={{ marginLeft: "400px" }}>
            <Card border="info" body style={{ width: "25rem" }}>
              <Form autoComplete="off">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={this.emailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.passwordChange}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Hno. Street "
                    onChange={this.addressChange}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="enter city"
                      onChange={this.cityChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      as="select"
                      defaultValue="Choose..."
                      onChange={this.stateChange}>
                      <option>state</option>
                      <option>UP</option>
                      <option>AP</option>
                      <option>Rajasthan</option>
                      <option>Tamil Nadu</option>
                      <option>West Bengal</option>
                      <option>Goa</option>
                      <option>Uttrakhand</option>
                      <option>Bihar</option>
                      <option>Mizoram</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="zip code"
                      onChange={this.zipChange}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Col>
                    <Form.Label>Gender</Form.Label>
                  </Col>
                  <Col>
                    <Row>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={this.radioMaleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={this.radioFemaleChange}
                      />
                    </Row>
                  </Col>
                </Form.Group>
              </Form>
            </Card>
          </div>
        </Jumbotron>

        <div>
          <TableControlled value={this.state} data={this.state.postData} />
        </div>

        <Button onClick={this.makeApiCall}>Make Api Call</Button>
      </div>
    );
  }
}

export default RegistrationFormControlled;

// username = value
//  api call || put ||
