import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin-Dashboard">
      <div className="admin-SideBar">
        <div className="admin-brand">
          <h3>VOYAGO</h3>
        </div>

        <div className="dashboard-section">
          <div className="dashboard-options">
            <div className="dashboard-head">
              {/* icons */}
              <h5>Dashboard</h5>
            </div>

            <div className="dashboard-span">
              <span>Client Facing</span>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Drivers</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5> Customers</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Transactions</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Total Drivers</h5>
            </div>

            <div className="dashboard-span">
              <span>Sales</span>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Overview</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5> Daily</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Monthly</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Breakdown</h5>
            </div>

            <div className="dashboard-span">
              <span>Management</span>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Admins</h5>
            </div>

            <div className="dashboard-items">
              {/* icons */}
              <h5>Performance</h5>
            </div>

            <hr />

            <div className="profile-section">
              <div className="profile-content">
                <div className="admin-profile">
                  <img src="" alt="vrw" />
                </div>

                <div className="admin-settings">
                  <h3>❄️</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-Content">
      </div>
    </div>
  );
}

export default Admin;
