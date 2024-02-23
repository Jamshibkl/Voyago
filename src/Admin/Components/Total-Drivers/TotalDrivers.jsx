import React from "react";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function TotalDrivers() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <Sidebar />
      </div>

      <div className="admin-Content">
        <Navbar />
      </div>
    </div>
  );
}

export default TotalDrivers;
