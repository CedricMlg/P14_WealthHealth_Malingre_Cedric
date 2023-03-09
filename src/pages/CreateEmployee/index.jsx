import React from "react";
import { NavLink } from "react-router-dom";

export default function CreateEmployee() {
  return (
    <div className="create-employee">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/employee-list">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          {/* <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />
          date */}

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            {/* select */}

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          {/* select */}
        </form>

        <button onclick="saveEmployee()">Save</button>
      </div>
      {/* modal */}
    </div>
  );
}
