import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  const isAuthenticated = true;
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <div
          style={{
            backgroundColor: "lightblue",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            fontWeight: "800",
          }}
        >
          SharedLayout
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
