import React, { useState, useEffect } from "react";
import "./page.css";

const PaginationApp = () => {
  const [employees, setEmployees] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const rowsPerPage = 10; 

  const fetchEmployees = async () => {
    try {
      const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      if (response.ok) {
        const data = await response.json(); 
        setEmployees(data); 
      } else {
        alert("Failed to fetch data"); 
      }
    } catch (error) {
      alert("Failed to fetch data"); 
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  
  const indexOfLastEmployee = currentPage * rowsPerPage; 
  const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage; 
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee); 

  const nextPage = () => {
    if (currentPage < Math.ceil(employees.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1); 
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  };

  return (
    <div className="container-div">
      <h1>Employee Data Table</h1>

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
