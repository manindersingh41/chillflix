import React from "react";
import { useNavigate } from "react-router-dom";
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        borderRadius: "1px solid grey",
        width: "250px",
        minWidth: "250px",
        height: "100vh",
        backgroundColor: "lightblue",
        boxSizing: "border-box",
      }}
    >
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
        Sidebar
      </div>
      <div
        style={{
          borderRadius: ".5rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "3rem",
          backgroundColor: "gray",
          margin: ".2rem",
          color: "white",
          fontWeight: "700",
        }}
        onClick={() => {
          navigate("/dashboard/profile");
        }}
      >
        Profile Button
      </div>
      <div
        style={{
          borderRadius: ".5rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "3rem",
          backgroundColor: "gray",
          margin: ".2rem",
          color: "white",
          fontWeight: "700",
        }}
        onClick={() => {
          navigate("/dashboard/setting");
        }}
      >
        Setting Button
      </div>
    </div>
  );
};

export default Sidebar;
