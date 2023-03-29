import React from "react";
import { NavLink } from "react-router-dom";

/**
 * The Home component is a function that returns a div with two NavLinks.
 * @returns A React element.
 */
export default function Home() {
  return (
    <div className="home">
      <NavLink to="/create-employee">Create Employee</NavLink>
      <NavLink to="/employee-list">Employee List</NavLink>
    </div>
  );
}
