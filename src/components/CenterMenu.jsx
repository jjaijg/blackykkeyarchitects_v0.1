import React from "react";

function CenterMenu() {
  const liStyle = "mr-12 cursor-pointer hover:font-bold";
  return (
    <div className="menu flex">
      <ul className="flex w-full justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About Us</li>
        <li className={liStyle}>Services</li>
        <li className={liStyle}>Projects</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
