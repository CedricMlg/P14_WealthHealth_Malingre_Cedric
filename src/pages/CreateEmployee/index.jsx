import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "cedricm-wealthhealth-dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateEmployee() {
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const departments = {
    label: "departments",
    options: [
      { value: "sales", name: "sales" },
      { value: "marketing", name: "marketing" },
      { value: "engineering", name: "engineering" },
      { value: "human resources", name: "human resources" },
      { value: "legal", name: "legal" },
    ],
  };
  const states = {
    label: "state",
    options: [
      {
        name: "Alabama",
        value: "AL",
      },
      {
        name: "Alaska",
        value: "AK",
      },
      {
        name: "American Samoa",
        value: "AS",
      },
      {
        name: "Arizona",
        value: "AZ",
      },
      {
        name: "Arkansas",
        value: "AR",
      },
      {
        name: "California",
        value: "CA",
      },
      {
        name: "Colorado",
        value: "CO",
      },
      {
        name: "Connecticut",
        value: "CT",
      },
      {
        name: "Delaware",
        value: "DE",
      },
      {
        name: "District Of Columbia",
        value: "DC",
      },
      {
        name: "Federated States Of Micronesia",
        value: "FM",
      },
      {
        name: "Florida",
        value: "FL",
      },
      {
        name: "Georgia",
        value: "GA",
      },
      {
        name: "Guam",
        value: "GU",
      },
      {
        name: "Hawaii",
        value: "HI",
      },
      {
        name: "Idaho",
        value: "ID",
      },
      {
        name: "Illinois",
        value: "IL",
      },
      {
        name: "Indiana",
        value: "IN",
      },
      {
        name: "Iowa",
        value: "IA",
      },
      {
        name: "Kansas",
        value: "KS",
      },
      {
        name: "Kentucky",
        value: "KY",
      },
      {
        name: "Louisiana",
        value: "LA",
      },
      {
        name: "Maine",
        value: "ME",
      },
      {
        name: "Marshall Islands",
        value: "MH",
      },
      {
        name: "Maryland",
        value: "MD",
      },
      {
        name: "Massachusetts",
        value: "MA",
      },
      {
        name: "Michigan",
        value: "MI",
      },
      {
        name: "Minnesota",
        value: "MN",
      },
      {
        name: "Mississippi",
        value: "MS",
      },
      {
        name: "Missouri",
        value: "MO",
      },
      {
        name: "Montana",
        value: "MT",
      },
      {
        name: "Nebraska",
        value: "NE",
      },
      {
        name: "Nevada",
        value: "NV",
      },
      {
        name: "New Hampshire",
        value: "NH",
      },
      {
        name: "New Jersey",
        value: "NJ",
      },
      {
        name: "New Mexico",
        value: "NM",
      },
      {
        name: "New York",
        value: "NY",
      },
      {
        name: "North Carolina",
        value: "NC",
      },
      {
        name: "North Dakota",
        value: "ND",
      },
      {
        name: "Northern Mariana Islands",
        value: "MP",
      },
      {
        name: "Ohio",
        value: "OH",
      },
      {
        name: "Oklahoma",
        value: "OK",
      },
      {
        name: "Oregon",
        value: "OR",
      },
      {
        name: "Palau",
        value: "PW",
      },
      {
        name: "Pennsylvania",
        value: "PA",
      },
      {
        name: "Puerto Rico",
        value: "PR",
      },
      {
        name: "Rhode Island",
        value: "RI",
      },
      {
        name: "South Carolina",
        value: "SC",
      },
      {
        name: "South Dakota",
        value: "SD",
      },
      {
        name: "Tennessee",
        value: "TN",
      },
      {
        name: "Texas",
        value: "TX",
      },
      {
        name: "Utah",
        value: "UT",
      },
      {
        name: "Vermont",
        value: "VT",
      },
      {
        name: "Virgin Islands",
        value: "VI",
      },
      {
        name: "Virginia",
        value: "VA",
      },
      {
        name: "Washington",
        value: "WA",
      },
      {
        name: "West Virginia",
        value: "WV",
      },
      {
        name: "Wisconsin",
        value: "WI",
      },
      {
        name: "Wyoming",
        value: "WY",
      },
    ],
  };

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

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <Dropdown {...states} />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <Dropdown {...departments} />
        </form>

        {/* <button onClick="saveEmployee()">Save</button> */}
      </div>
      {/* modal */}
    </div>
  );
}
