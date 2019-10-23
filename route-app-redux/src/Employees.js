import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Employee from "./Employee";

class Employees extends Component {
  // componentDidMount() {
  //   console.log("Comp did moutn callled.");
  //   fetch("./employees.json")
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({ employees: responseData });
  //     })
  //     .catch(error => {
  //       console.log("Error fetching and parsing data", error);
  //     });
  // }

  render() {
    console.log(this.props.employees);
    return (
      <div class="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map(emp => (
              <tr>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>x</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { employees: state.emps };
};
export default connect(mapStateToProps)(Employees);
