// App.jsx
import React, { useState } from "react";
import Header from "./components/layouts/header/Header";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/layouts/footer/Footer";

const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
    if (!isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  const handleMouseOverSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(true);
    }
  };

  const handleMouseOutSidebar = () => {
    if (isSidebarToggled) {
      setIsSidebarHovered(false);
    }
  };

  return (
    <div
      className={`${
        isSidebarToggled && !isSidebarHovered ? "toggle-sidebar" : ""
      } ${isSidebarHovered ? "hover-sidebar" : ""}`}
    >
      <Header handleToggleSidebar={handleToggleSidebar} />
      <Sidebar
        handleMouseOverSidebar={handleMouseOverSidebar}
        handleMouseOutSidebar={handleMouseOutSidebar}
        isSidebarHovered={isSidebarHovered}
      />
      <div className="min-vh-100">
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
