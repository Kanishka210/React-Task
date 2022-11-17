import React from "react";
import { NavLink } from "react-router-dom";
function SideHeading(props) {
  const value = props.items;
  return (
    <NavLink to= {value.url} className="line">
    <div className="heading-name">
      <div className="icon-feature">
        <div className="icon">{value.icon}</div>
        <div className="name">{value.name}</div>
      </div>
      <div className="count">
        <div>{value.count}</div>
      </div>
    </div>
    </NavLink>
  );
}
export default SideHeading;
