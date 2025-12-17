import React from "react";
import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.1)",
          background: "#C6E7FF",
          padding: "20px",
          borderRadius: "0px 6px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "16px",
          }}
          to="app"
        >
          Application Info
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "16px",
          }}
          to="author"
        >
          Author Info
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default About;
