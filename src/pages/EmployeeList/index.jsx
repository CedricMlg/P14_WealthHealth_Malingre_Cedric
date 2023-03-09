import React from "react";
import { NavLink } from "react-router-dom";

export default function EmployeeList() {
  return (
    <div>
      {" "}
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        {/* table */}
        <NavLink to="/create-employee">Create Employee</NavLink>
      </div>
    </div>
  );
}
