import React, { useEffect, useState } from "react";
import $, { valHooks } from "jquery";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoUpload } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

import { InfinitySpin } from "react-loader-spinner";

import Students from "./Students";

const AdminAuth = () => {
  let date = new Date();
  let a = date.getDate();
  let b = date.getMonth() + 1;
  let c = date.getFullYear();
  let d = date.getHours();
  let password = "" + a + b + c + d;
  console.log(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredKey = e.target.form.key.value;
    if (enteredKey === password) {
      window.alert("logged in successfully!");
      $(".mainContactForm").hide(1000);
      $(".forHeight").css("min-height", "0");
      $(".onlyForAdmin").fadeIn(2000);
    } else if (enteredKey !== password) {
      window.alert("password is not correct");
    } else if (enteredKey === "") {
      window.alert("check password again");
    } else {
      window.alert("seems you are'nt admin");
    }
  };

  const [students, setStudents] = useState([]);
  const [updatedStudent, setUpdatedStudent] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/allstudents")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteStudent = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    window.location.reload();
  };

  const updateStudent = (student) => {
    console.log(student);
    setUpdatedStudent(student);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedStudent = () => {
    axios
      .put(`http://localhost:3001/update/${updatedStudent._id}`, updatedStudent)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

      handleClose();
      window.location.reload();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container mainContactForm">
        <br />
        <h2>Admin Login</h2>
        <hr />
        <br />
        <form action="" style={{ width: "25vw" }}>
          <div className="form-group">
            <h4>Enter Pass Key:</h4>
            <br />
            <input
              className="form-control"
              name="key"
              placeholder="**********"
              required
              type="password"
            />
            <br />
            <br />
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit{" "}
              <FaPaperPlane
                style={{ marginLeft: "5px", marginBottom: "2px" }}
              />
            </button>
          </div>
        </form>
      </div>

      <div className="onlyForAdmin container" style={{ display: "none" }}>
        <br />
        <br />
        <h2 className="text-center">Manage Placement Records</h2>
        <hr />
        <br />
        <div className="text-center">
          <h4>Insert New Student Detail</h4>
        </div>
        <Students />
        <br />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Placement Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <select
                  className="form-control"
                  name="gender"
                  required
                  value={updatedStudent.gender ? updatedStudent.gender : ""}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
                <br />
                <input
                  type="number"
                  placeholder=" SSC Percentage"
                  name="SSCP"
                  className="form-control"
                  min="0"
                  max="100"
                  mb-1
                  required
                  value={updatedStudent.ssc_p ? updatedStudent.ssc_p : ""}
                  onChange={handleChange}
                ></input>
                <br />
                <select
                  className="form-control"
                  mb-1
                  name="SSCB"
                  required
                  value={updatedStudent.ssc_b ? updatedStudent.ssc_b : ""}
                  onChange={handleChange}
                >
                  <option value="">Select SSC Board</option>
                  <option value="Central">Central</option>
                  <option value="Others">Others</option>
                </select>
                <br />
                <input
                  type="number"
                  placeholder=" HSC Percentage"
                  name="HSCP"
                  className="form-control"
                  min="0"
                  max="100"
                  mb-1
                  required
                  value={updatedStudent.hsc_p ? updatedStudent.hsc_p : ""}
                  onChange={handleChange}
                ></input>
                <br />
                <select
                  className="form-control"
                  mb-1
                  name="HSCB"
                  required
                  value={updatedStudent.hsc_b ? updatedStudent.hsc_b : ""}
                  onChange={handleChange}
                >
                  <option value="">Select HSC Board</option>
                  <option value="Central">Central</option>
                  <option value="Others">Others</option>
                </select>
                <br />
                <select
                  className="form-control"
                  mb-1
                  name="HSCS"
                  required
                  value={updatedStudent.hsc_s ? updatedStudent.hsc_s : ""}
                  onChange={handleChange}
                >
                  <option value="">Select HSC Stream</option>
                  <option value="Science">Science</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
                <br />
                <input
                  type="number"
                  placeholder=" Degree Percentage"
                  name="degreeP"
                  className="form-control"
                  min="0"
                  max="100"
                  mb-1
                  required
                  value={updatedStudent.degree_p ? updatedStudent.degree_p : ""}
                  onChange={handleChange}
                ></input>
                <br />
                <select
                  className="form-control"
                  mb-1
                  name="degreeT"
                  required
                  value={updatedStudent.degree_t ? updatedStudent.degree_t : ""}
                  onChange={handleChange}
                >
                  <option value="">Select Degree Type</option>
                  <option value="Sci&Tech">Science</option>
                  <option value="Comm&Mgmt">Commerce</option>
                  <option value="others">Others</option>
                </select>
                <br />
                <select
                  name="workExp"
                  className="form-control"
                  mb-1
                  required
                  value={updatedStudent.workex ? updatedStudent.workex : ""}
                  onChange={handleChange}
                >
                  <option value="">Have Work Experience?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <br />
                <input
                  type="number"
                  placeholder=" ETest Percentage"
                  name="ETESTP"
                  className="form-control"
                  min="0"
                  max="100"
                  mb-1
                  required
                  value={updatedStudent.etest_p ? updatedStudent.etest_p : ""}
                  onChange={handleChange}
                ></input>
                <br />
                <input
                  type="number"
                  placeholder=" MCAP"
                  name="MCAP"
                  className="form-control"
                  min="0"
                  max="100"
                  mb-1
                  required
                  value={updatedStudent.mca_p ? updatedStudent.mca_p : ""}
                  onChange={handleChange}
                ></input>
                <br />
                <select
                  name="status"
                  className="form-control"
                  mb-1
                  required
                  value={updatedStudent.status ? updatedStudent.status : ""}
                  onChange={handleChange}
                >
                  <option value="">Placement Status</option>
                  <option value="Placed">Yes</option>
                  <option value="Not Placed">No</option>
                </select>
                <br />
                <input
                  type="number"
                  placeholder=" Placement Salary"
                  name="salary"
                  className="form-control"
                  mb-1
                  required
                  value={updatedStudent.salary ? updatedStudent.salary : ""}
                  onChange={handleChange}
                ></input>
                <br />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveUpdatedStudent}>
              Update <GoUpload />
            </Button>
          </Modal.Footer>
        </Modal>
        {students ? (
          <>
            <table className="table">
              <thead>
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
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => updateStudent(student)}
                        >
                          <MdOutlineEdit />
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteStudent(student._id);
                          }}
                        >
                          <RiDeleteBin6Line />
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <InfinitySpin width="200" color="#4fa94d" />
        )}
      </div>
    </>
  );
};

export default AdminAuth;
