import React from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  return (
    <div>
      <aside
        id="sidebar"
        className={`sidebar ${props.isSidebarHovered ? "sidebar-hovered" : ""}`}
        onMouseOver={props.handleMouseOverSidebar}
        onMouseOut={props.handleMouseOutSidebar}
      >
        <div className="sidebar-logo mb-2">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center lg-screen-logo"
          >
            <span className="d-lg-block text-white h4">Awesome</span>
          </a>
          <a
            href="#"
            className="d-flex align-items-center justify-content-center d-none sm-screen-logo"
          >
            <span className="d-lg-block text-white fs-6 p-1 rounded-circle border">
              US
            </span>
          </a>
        </div>
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-tv"></i>
              <span>Tv Stations</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-speaker"></i>
              <span>Radio Stations</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
