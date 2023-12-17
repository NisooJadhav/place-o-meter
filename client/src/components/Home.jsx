import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="container">
        <br />
        <h2>Home Page</h2>
        <br />
        <br />
        <center>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{ background: "#00000099", alignItems: "center" }}
          >
            <Carousel.Item>
              <img src="https://imr.dypvp.edu.in/assets/img/home/collegeview1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://imr.dypvp.edu.in/images/Infrastructure-gallery/3.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://imr.dypvp.edu.in/images/Infrastructure-gallery/1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://imr.dypvp.edu.in/images/Infrastructure-gallery/10.jpg" />
            </Carousel.Item>
          </Carousel>
        </center>
        <br />
        <br />
        <br />
      </div>
      <hr />
      <div className="text-center">
        <h2>Major Recruiters</h2>
        <img
          src="https://imr.dypvp.edu.in/images/MCA-recruiters.png"
          alt=""
          style={{ width: "50vw" }}
        />
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
