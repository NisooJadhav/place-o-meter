import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span>
          Place-O-Meter &copy; {new Date().getFullYear()}, All Rights Reserved
        </span>
      </footer>
    </div>
  );
};

export default Footer;
