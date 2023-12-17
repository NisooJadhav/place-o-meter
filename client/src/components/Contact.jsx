import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import FormSubmit from "./FormSubmit";

export const Contact = () => {
  return (
    <div className="container">
      <br />
      <FormSubmit />
      <h2>Contact Us</h2>
      <hr />
      <br />
      <form
        className="gform"
        method="POST"
        data-email="nishantvedjadhav@gmail.com"
        action="https://script.google.com/macros/s/AKfycbye86W056T_xBWeIquC5sdX5zF_0c9uiMZUEE2Qf9gN_2vMg0SPNDq5eLVZplBLbcw_4A/exec"
        style={{ width: "25vw" }}
      >
        <div className="form-group">
          <h4>Enter Name:</h4>
          <br />
          <input className="form-control" name="name" type="text" required />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Email:</h4>
          <br />
          <input className="form-control" name="email" type="text" required />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Mobile:</h4>
          <br />
          <input className="form-control" name="mobile" type="text" required />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Address:</h4>
          <br />
          <input className="form-control" name="address" type="text" required />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Message:</h4>
          <br />
          <textarea
            cols="30"
            rows="5"
            className="form-control"
            name="message"
            type="text"
            required
          ></textarea>
          <br />
        </div>
        <br />
        <button className="btn btn-success" id="submit" value="Submit">
          Send{" "}
          <FaPaperPlane style={{ marginLeft: "5px", marginBottom: "2px" }} />{" "}
        </button>
        <div style={{ display: "none" }} className="thankyou_message">
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Contact;
