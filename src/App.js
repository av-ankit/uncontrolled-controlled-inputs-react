import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import RegistrationFormControlled from "./Components/RegistrationFormControlled";
import RegistrationFormUncontrolled from "./Components/RegistraionFormUncontrolled";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleForms: false,
    };
  }
  toggleFormfunc = () => {
    this.setState({ toggleForms: !this.state.toggleForms });
  };
  render() {
    return (
      <div className="App">
        <Button variant="outline-secondary" onClick={this.toggleFormfunc}>
          Toggle Forms
        </Button>

        {this.state.toggleForms ? (
          <RegistrationFormUncontrolled />
        ) : (
          <RegistrationFormControlled />
        )}
      </div>
    );
  }
}

export default App;
