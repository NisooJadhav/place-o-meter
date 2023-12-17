import React, { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  <h3 className="text-center">Add Student</h3>;

  const [student, setStudent] = useState({
    gender: "",
    SSCP: "",
    SSCB: "",
    HSCP: "",
    HSCB: "",
    HSCS: "",
    degreeP: "",
    degreeT: "",
    workExp: "",
    ETESTP: "",
    MCAP: "",
    status: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    axios
      .post("http://localhost:3001/create", student)
      .then((res) => {
        window.alert("Data inserted successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <form className="px-4 py-3">
          <div className="row">
            <div className="col-md-4 mb-1">
              <select
                value={student.gender}
                className="form-control"
                onChange={handleChange}
                name="gender"
                required
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="col-md-4 mb-1">
              <input
                type="number"
                placeholder=" SSC Percentage"
                name="SSCP"
                value={student.SSCP}
                className="form-control"
                min="0"
                max="100"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="col-md-4 mb-1">
              <select
                value={student.SSCB}
                className="form-control"
                onChange={handleChange}
                name="SSCB"
                required
              >
                <option value="">Select SSC Board</option>
                <option value="central">Central</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                type="number"
                placeholder=" HSC Percentage"
                name="HSCP"
                value={student.HSCP}
                className="form-control"
                min="0"
                max="100"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="col-md-4 mb-1">
              <select
                value={student.HSCB}
                className="form-control"
                onChange={handleChange}
                name="HSCB"
                required
              >
                <option value="">Select HSC Board</option>
                <option value="central">Central</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="col-md-4 mb-1">
              <select
                value={student.HSCS}
                className="form-control"
                onChange={handleChange}
                name="HSCS"
                required
              >
                <option value="">Select HSC Stream</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-1">
              <input
                type="number"
                placeholder=" Degree Percentage"
                name="degreeP"
                value={student.degreeP}
                className="form-control"
                min="0"
                max="100"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="col-md-4 mb-1">
              <select
                value={student.degreeT}
                className="form-control"
                onChange={handleChange}
                name="degreeT"
                required
              >
                <option value="">Select Degree Type</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="col-md-4 mb-1">
              <select
                name="workExp"
                value={student.workExp}
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">Have Work Experience?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-1">
              <input
                type="number"
                placeholder=" ETest Percentage"
                name="ETESTP"
                value={student.ETESTP}
                className="form-control"
                min="0"
                max="100"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="col-md-3 mb-1">
              <input
                type="number"
                placeholder=" MCAP"
                name="MCAP"
                value={student.MCAP}
                className="form-control"
                min="0"
                max="100"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="col-md-3 mb-1">
              <select
                name="status"
                value={student.status}
                className="form-control"
                onChange={handleChange}
                required
              >
                <option value="">Placement Status</option>
                <option value="placed">Yes</option>
                <option value="not placed">No</option>
              </select>
            </div>
            <div className="col-md-3 mb-1">
              <input
                type="number"
                placeholder=" Placement Salary"
                name="salary"
                value={student.salary}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary mb-1" onClick={handleClick} type="submit">
              Add Student +
            </button>
          </div>
        </form>
        <hr />
      </div>
    </div>
  );
};

export default Students;