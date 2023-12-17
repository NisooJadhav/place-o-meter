import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiAdminLine, RiHome4Line } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Header = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active-link" : "";
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link
            to="/home"
            className={`nav-link ${isActive("/home")} navbar-brand`}
            href="#"
          >
            <img
              src="src/components/p.png"
              style={{ borderRadius: "50%", width: "100px" }}
              alt="Logo"
            />
            &nbsp;&nbsp;<b>Place-O-Meter</b> - placement management at fingertips
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "white",
              fontSize: "22px",
            }}
          >
            <Link
              to="/home"
              className={`nav-link ${isActive("/home")}`}
              style={{ marginRight: "30px" }}
            >
              <RiHome4Line /> Home
            </Link>
            <Link
              to="/admin"
              className={`nav-link ${isActive("/admin")}`}
              style={{ marginRight: "30px" }}
            >
              <RiAdminLine /> Admin
            </Link>
            <Link
              to="/eligible"
              className={`nav-link ${isActive("/admin")}`}
              style={{ marginRight: "30px" }}
            >
              <IoIosCheckmarkCircleOutline /> Eligibility Verifier
            </Link>
            <Link
              to="/all"
              className={`nav-link ${isActive("/admin")}`}
              style={{ marginRight: "30px" }}
            >
              <GoDatabase /> Records
            </Link>
            <Link
              to="/analytics"
              className={`nav-link ${isActive("/analytics")}`}
              style={{ marginRight: "30px" }}
            >
              <TbBrandGoogleAnalytics /> Analytics
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact")}`}
              style={{ marginRight: "30px" }}
            >
              <MdOutlineEmail /> Contact
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive("/about")}`}
              style={{ marginRight: "30px" }}
            >
              <IoBulbOutline />
              About
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
