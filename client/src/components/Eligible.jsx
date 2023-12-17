import React, { useState } from "react";
import FormSubmit from "./FormSubmit";
import { IoMdCalculator } from "react-icons/io";

const Eligible = () => {
  const [ssc, setSsc] = useState("");
  const [hsc, setHsc] = useState("");
  const [grad, setGrad] = useState("");
  const [pg, setPg] = useState("");
  const [placementMessage, setPlacementMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      ssc >= 60 &&
      hsc >= 60 &&
      grad >= 60 &&
      pg >= 60 &&
      ssc <= 100 &&
      hsc <= 100 &&
      grad <= 100 &&
      pg <= 100
    ) {
      setPlacementMessage("You are Eligible for Placement 😃");
    } else {
      setPlacementMessage("You are not Eligible for Placement 😔");
    }
  };

  return (
    <div className="container">
      <br />
      <FormSubmit />
      <h2>Eligibility Verifier</h2>
      <hr />
      <br />
      <form style={{ width: "25vw" }} onSubmit={handleFormSubmit}>
        <div className="form-group">
          <h4>Enter 10th %:</h4>
          <br />
          <input
            className="form-control"
            name="ssc"
            type="number"
            required
            onChange={(e) => setSsc(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter 12th %:</h4>
          <br />
          <input
            className="form-control"
            name="hsc"
            type="number"
            required
            onChange={(e) => setHsc(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Graduation %:</h4>
          <br />
          <input
            className="form-control"
            name="grad"
            type="number"
            required
            onChange={(e) => setGrad(e.target.value)}
          />
          <br />
        </div>
        <div className="form-group">
          <h4>Enter Post Graduation %:</h4>
          <br />
          <input
            className="form-control"
            name="pg"
            type="number"
            required
            onChange={(e) => setPg(e.target.value)}
          />
          <br />
        </div>
        <br />
        <button className="btn btn-success" id="submit" type="submit">
          Check{" "}
          <IoMdCalculator style={{ marginLeft: "5px", marginBottom: "2px" }} />
        </button>
        <br />
        <br />
        <h2>{placementMessage}</h2>
      </form>
    </div>
  );
};

export default Eligible;