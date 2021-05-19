import React from "react";
import "./../App.css";
import { Jumbotron, Form, Button, Card, Row, Col } from "react-bootstrap";

import TableUnControlled from "./TableUnControlled";
class RegistrationFormUncontrolled extends React.Component {
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
    };
    this.myRef = React.createRef();
  }

  getValue = () => {
    // this.setState({ username: this.myRef });
    // console.log('value',this.myRef.current.formEmail.value);
    this.setState({
      username: this.myRef.current.formEmail.value,
      password: this.myRef.current.formPassword.value,
      address: this.myRef.current.formAddress.value,
      city: this.myRef.current.formCity.value,
      state: this.myRef.current.formState.value,
      zip: this.myRef.current.formZip.value,
      // radio:'female'
    });
    if (this.myRef.current === this.myRef.current.radioMale) {
      this.setState({ radio: "male" });
    }
  };

  render() {
    // console.log("frm user", this.state.username);
    // console.log("frm pass", this.state.password);
    // console.log("frm address", this.state.address);
    // console.log("frm state", this.state.state);

    const userDetails = {
      username: this.state.username,
      password: this.state.password,
      address: this.state.address,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      radio: this.state.radio,
    };

    return (
      <div>
        <h1>Uncontrolled Registration Form</h1>
        <Jumbotron>
          <div style={{ marginLeft: "400px" }}>
            <Card border="warning" body style={{ width: "25rem" }}>
              <Form autoComplete="off" ref={this.myRef}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    onChange={this.emailChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={this.passwordChange}
                  />
                </Form.Group>

                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="Hno. Street "
                    onChange={this.addressChange}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="enter city" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formState">
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

                  <Form.Group as={Col} controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="zip code" />
                  </Form.Group>
                </Form.Row>

                {/* Radio Boxes */}
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
                        controlId="radioMale"
                      />
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        controlId="radioFemale"
                      />
                    </Row>
                  </Col>
                </Form.Group>
              </Form>
            </Card>
          </div>
          <div>
            <Button onClick={this.getValue}>Fetch Values</Button>
          </div>
        </Jumbotron>

        <div>
          <TableUnControlled value={userDetails} />
        </div>
      </div>
    );
  }
}

export default RegistrationFormUncontrolled;
