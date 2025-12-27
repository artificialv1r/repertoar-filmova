import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        background: "#FBFBFB",
        padding: "20px 40px",
        borderRadius: "6px",
        boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.1)",
      }}
    >
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: "0px",
            justifyContent: "center",
          }}
        >
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
              to="/movies"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
              }}
              to="/movies/new"
            >
              Add Movie
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
