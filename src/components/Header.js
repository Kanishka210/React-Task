import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.scss";

function Header({ setdisplay }) {
  return (
    <div className="header">
      <div className="top-navigation">
        <FontAwesomeIcon icon={faArrowLeft} className="left-arrow" />
        <div className="dash-board">Dashboard</div>
        <FontAwesomeIcon icon={faAngleRight} className="right-arrow" />
        <div className="social-feed">Social Feed</div>
      </div>
      <div className="menu-navigation">
        <FontAwesomeIcon icon={faBars} onClick={setdisplay} className="icon" />
      </div>
    </div>
  );
}
export default Header;
