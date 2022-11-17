import React from "react";
//import {useState} from 'react';
import "../../styles/LeftNavigation.scss";
import Virat from "../../Images/Virat.png";
//import SideHeading from './SideHeading'
import listParameter from "./ListParameter";
import recentlyAdded from "./RecentlyAdded";
import PrimaryButton from "./MenuList";

function LeftNavigation({ toggle }) {
  console.log(toggle);
  return (
    <div className={toggle ? "responsive-view" : "left-navigation"}>
      <div className="profile">
        <img src={Virat} alt="profile" className="profile-photo" />
        <div className="profile-name">
          <b>Virat Kohli</b>
        </div>
      </div>
      <PrimaryButton menuList={listParameter} limit={5} />
      <p>
        <b>Recently added:</b>
      </p>
      <PrimaryButton menuList={recentlyAdded} limit={3} />
    </div>
  );
}
export default LeftNavigation;
