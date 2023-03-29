import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "cedricm_dropdown";
import DatePicker from "react-datepicker";
import Modal from "react-modal";
import departments from "../../data/dropdown/departments.json";
import states from "../../data/dropdown/states.json";
import { atom, useAtom } from "jotai";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

export const employeesAtom = atom([]);
export const employeesArray = [];

/**
 * When the user clicks the save button, the saveEmployee function will check if any of the values in
 * the employee object are empty. If they are, the modal will open and the user will be notified that
 * at least one of the fields is empty. If not, the employee object will be pushed to the
 * employeesArray and the employees state will be set to the employeesArray.
 */
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
  const [employees, setEmployees] = useAtom(employeesAtom);

/**
 * When the user clicks on the button, the modal will open.
 */
  function openModal() {
    setIsOpen(true);
  }

/**
 * When the user clicks the close button, the modal will close.
 */
  function closeModal() {
    setIsOpen(false);
  }

/**
 * If any of the values in the employee object are empty, set the isEmpty state to true and open the
 * modal. If not, push the employee object to the employeesArray and set the employees state to the
 * employeesArray.
 * @returns the value of the variable employeesArray.
 */
  function saveEmployee() {
    const employee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate.toLocaleDateString("en-US"),
      startDate: startDate.toLocaleDateString("en-US"),
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

    employeesArray.push(employee);
    setEmployees(employeesArray);
    setIsEmpty(false);
    openModal();
  }

/**
 * The handleStateChange function takes a state as an argument and sets the state to the argument.
 */
  function handleStateChange(state) {
    setState(state);
  }

/**
 * When the department changes, set the department to the new department.
 */
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
