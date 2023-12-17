import React, { useEffect, useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allstudents")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <center>
        <br />
        <div className="container">
          <h2>Placement Records</h2>
          <hr />
        </div>
        <br />
        {students ? (
          <>
            <table className="table text-center" style={{ width: "90vw" }}>
              <thead className="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Gender</th>
                  <th scope="col">SSC %</th>
                  <th scope="col">SSC Board</th>
                  <th scope="col">HSC %</th>
                  <th scope="col">HSC Board</th>
                  <th scope="col">HSC Stream</th>
                  <th scope="col">Degree %</th>
                  <th scope="col">Degree Type</th>
                  <th scope="col">Workexp</th>
                  <th scope="col">ETest %</th>
                  <th scope="col">MCA %</th>
                  <th scope="col">Status</th>
                  <th scope="col">Salary</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => {
                  return (
                    <tr key={student._id} scope="row">
                      <td>{index + 1}</td>
                      <td>{student.gender}</td>
                      <td>{student.ssc_p}</td>
                      <td>{student.ssc_b}</td>
                      <td>{student.hsc_p}</td>
                      <td>{student.hsc_b}</td>
                      <td>{student.hsc_s}</td>
                      <td>{student.degree_p}</td>
                      <td>{student.degree_t}</td>
                      <td>{student.workex}</td>
                      <td>{student.etest_p}</td>
                      <td>{student.mca_p}</td>
                      <td>{student.status}</td>
                      <td>{student.salary}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <InfinitySpin width="200" color="#4fa94d" />
        )}
      </center>
    </>
  );
};

export default AllStudents;
