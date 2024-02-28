import React from 'react'
import "./Customers.css"
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../admin-navbar/Navbar";

function Customers() {
  return (
    <div className="admin-Dashboard">
    <div className="admin-SideBar">
      <Sidebar />
    </div>

    <div className="admin-Content">
      <Navbar />
      <div className="dashboard-customers-info">
        <div className="dashboard-customers">
          <h2>Customers</h2>
          <div className="customers-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>email</th>
                <th>joined on</th>
              </tr>
              <tr className="user-data">
                <td>john</td>
                <td>7894561230</td>
                <td>abc@gmail.com</td>
                <td>12-1-2024</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Customers
