import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <NavLink to="/create-employee">Create Employee</NavLink>
      <NavLink to="/employee-list">Employee List</NavLink>
    </div>
  );
}
