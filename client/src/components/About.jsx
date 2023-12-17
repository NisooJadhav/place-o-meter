import React from "react";

const About = () => {
  return (
    <div className="container">
      <br />
      <img src="src/components/p.png" />
      <h2>About place-o-meter</h2>
      <hr/>
      <br />
      <p style={{fontSize:"20px"}}>
        Welcome to place-o-meter - the placement management system at your
        fingertips!
      </p>
      <p style={{fontSize:"20px"}}>
        Our system aims to revolutionize the placement landscape by providing
        seamless management of student placement data and facilitating effective
        communication between institutes and students.
      </p>
      <p style={{fontSize:"20px"}}>
        Through user-friendly interfaces and comprehensive functionalities, we
        strive to optimize career opportunities for students and empower
        institutes in their pursuit of academic excellence.
      </p>
      <p style={{fontSize:"20px"}}>
        Thank you for using place-o-meter. We are committed to enhancing your
        placement experience and fostering success in your professional journey.
      </p>
    </div>
  );
};

export default About;
