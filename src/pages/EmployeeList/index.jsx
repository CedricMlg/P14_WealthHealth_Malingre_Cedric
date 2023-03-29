import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useAtom } from "jotai";
import { employeesAtom } from "../../pages/CreateEmployee";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
  },
];

/* The above code is a React component that is using the useAtom hook to get the employeesAtom from the
store. It is then using the useState hook to set the filterText state. It is then using the useMemo
hook to create a subHeaderComponentMemo. The subHeaderComponentMemo is then used in the DataTable
component. */
export default function EmployeeList() {
  const [employees] = useAtom(employeesAtom);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  
/* Filtering the employees array by the lastName property. */
  const filteredItems = employees.filter(
    (item) =>
      item.lastName &&
      item.lastName.toLowerCase().includes(filterText.toLowerCase())
  );

/* Creating a subHeaderComponentMemo that is used in the DataTable component. */
  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <>
        <input
          id="search"
          type="text"
          placeholder="Filter By Last Name"
          aria-label="Search Input"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button type="button" onClick={handleClear}>
          X
        </button>
      </>
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      {" "}
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataTable
          title="Contact List"
          columns={columns}
          data={filteredItems}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
        <NavLink to="/create-employee">Create Employee</NavLink>
      </div>
    </div>
  );
}
