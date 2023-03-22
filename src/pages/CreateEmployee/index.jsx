import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "cedricm_dropdown";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import departments from "../../data/dropdown/departments.json";
import states from "../../data/dropdown/states.json";
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

  function openModal() {
    setIsOpen(true);
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
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
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
          <p>At least one of the fields is empty or wasn't selected.</p>
        ) : (
          <p>Employee Created!</p>
        )}
      </Modal>
    </div>
  );
}
