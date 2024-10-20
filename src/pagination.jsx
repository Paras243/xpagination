/*import React, { useState, useEffect } from "react";
import "./page.css";
const PaginationApp = () => {
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const rowsPerPage = 10; // Number of rows to display per page

  // Function to fetch employee data from the API
  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data
        setEmployees(data); // Update the state with fetched data
      } else {
        alert("Failed to fetch data"); // Alert for failed fetch
      }
    } catch (error) {
      alert("Failed to fetch data"); // Alert for errors
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Calculate the index of the first and last employee to display
  const indexOfLastEmployee = currentPage * rowsPerPage; // Last employee index on the current page
  const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage; // First employee index on the current page
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee); // Get the current employees to display

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(employees.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1); // Increment the current page
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the current page
    }
  };

  return (
    <div className="container-div">
      <h1>Employee Data Table</h1>

      <table className="rows" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody >
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>

            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display:"flex",justifyContent:"center" , marginTop: "20px" }}>
        <button className="button" onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="button" style={{ margin: "0 10px", width:"20px",height:"40px"}} > <div> {currentPage} </div> </span>
        <button className="button" onClick={nextPage} disabled={currentPage === Math.ceil(employees.length / rowsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationApp;
*/
import React, { useState, useEffect } from "react";
import "./page.css";

const PaginationApp = () => {
  const [employees, setEmployees] = useState([]); // State to store employee data
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const rowsPerPage = 10; // Number of rows to display per page

  // Function to fetch employee data from the API
  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      if (response.ok) {
        const data = await response.json(); // Parse the JSON data
        setEmployees(data); // Update the state with fetched data
      } else {
        alert("Failed to fetch data"); // Alert for failed fetch
      }
    } catch (error) {
      alert("Failed to fetch data"); // Alert for errors
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Calculate the index of the first and last employee to display
  const indexOfLastEmployee = currentPage * rowsPerPage; // Last employee index on the current page
  const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage; // First employee index on the current page
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee); // Get the current employees to display

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(employees.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1); // Increment the current page
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrement the current page
    }
  };

  return (
    <div className="container-div">
      <h1>Employee Data Table</h1>

      {/* Table to display employee data */}
      <table className="rows" border="1" cellPadding="10" cellSpacing="0">
        <thead style={{color:"antiquewhite",backgroundColor:"green"}}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="button" onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="button" style={{ margin: "0 10px", width: "20px", height: "40px" }}>
          {currentPage}
        </span>
        <button className="button" onClick={nextPage} disabled={currentPage === Math.ceil(employees.length / rowsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationApp;
