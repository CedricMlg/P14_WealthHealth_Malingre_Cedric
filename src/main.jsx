import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
const container = document.getElementById("root");
const root = createRoot(container);

/* Rendering the app. */
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-employee" element={<CreateEmployee />} />
        <Route exact path="/employee-list" element={<EmployeeList />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
