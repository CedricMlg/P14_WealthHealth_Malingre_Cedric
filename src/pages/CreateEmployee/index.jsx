import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "cedricm_dropdown";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

export default function CreateEmployee() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function saveEmployee() {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    };

    if (
      Object.values(employee).find((element) => element === "") != undefined
    ) {
      setIsEmpty(true);
      openModal();
      return;
    }

    setIsEmpty(false);
    openModal();
  }

  function handleStateChange(state) {
    setState(state);
  }

  function handleDepartmentChange(department) {
    setDepartment(department);
  }

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
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

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
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />

            <Dropdown {...states} onChange={handleStateChange} />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <Dropdown {...departments} onChange={handleDepartmentChange} />
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Response Modal"
        className="modal"
      >
        <button
          type="button"
          title="Close modal"
          className="close-modal"
          onClick={closeModal}
        ></button>

        {isEmpty ? (
          <p>
            One of the field is empty or wasn't selected, don't forget to select
            the right state / department even if the preview showed it selected
          </p>
        ) : (
          <p>Employee Created!</p>
        )}
      </Modal>
    </div>
  );
}
