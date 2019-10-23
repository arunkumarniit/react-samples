import React, { Component } from "react";
import { connect } from "react-redux";

class EmpList extends Component {
  render() {
    var mydata = this.props.empdata.map(emp => {
      return (
        <tr key={emp.get("code")}>
          <td>{emp.get("name")}</td>
          <td>{emp.get("code")}</td>
        </tr>
      );
    });

    console.log(this.props.empdata);
    return (
      <div>
        <h3>Employee List</h3>
        <table className="table table-dark">
          <tbody>{mydata}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = data => {
  return { empdata: data.emps };
};

export default connect(mapStateToProps)(EmpList);
