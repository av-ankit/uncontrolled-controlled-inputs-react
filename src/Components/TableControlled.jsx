import React from "react";
import "./../App.css";
import { Table, Spinner } from "react-bootstrap";
class TableControlled extends React.Component {
  render() {
    return (
      <div className="App">
        <Table variant="info" striped bordered hover>
          <thead>
            <tr>
              <th>Input Fields</th>
              <th>First Name</th>
              <th>Password</th>
              <th>Address</th>
              <th>City</th>

              <th>State</th>
              <th>Zip</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Values</b>
              </td>

              <td>
                {this.props.data ? (
                  this.props.data.name
                ) : this.props.value.load ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                    `loading`
                  </Spinner>
                ) : (
                  "not received"
                )}
              </td>
              <td>{this.props.value.password}</td>
              <td>{this.props.data ? this.props.data.job : "npt received"}</td>
              <td>{this.props.value.city}</td>
              <td>{this.props.value.state}</td>
              <td>{this.props.value.zip}</td>
              <td>{this.props.value.radio}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableControlled;
