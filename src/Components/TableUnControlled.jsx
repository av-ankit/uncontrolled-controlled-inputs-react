import React from 'react';
import './../App.css';
import {Table} from 'react-bootstrap';
class TableUnControlled extends React.Component {

  render(){
  return (
    <div className="App">
     
     <Table size='sm' variant='warning' striped bordered hover>
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
                <td>{this.props.value.username}</td>
                <td>{this.props.value.password}</td>
                <td>{this.props.value.address}</td> 
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

export default TableUnControlled;
