import React from "react";
import "./SearchBar.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { Link, withRouter } from "react-router-dom";


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "Red" };
  } else {
    return { color: "#f2f2f2" };
  }
};

const Search = ({ history }) => {
  return (
    <div>
      <nav>
        <ul>
          <li className="logo">
           <Link to='/' > <Logo className="Svglogo" /> </Link>
            EKart 
          </li>

          <div className="items">
            <li>
              <Link
              style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/")}
               
                to="/"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/shop")}
                to="/shop"
              >
                {" "}
                Shop{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/signIn")}
                to="/signIn"
              >
                {" "}
                SignIn{" "}
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "#f2f2f2", textDecoration: "none" }}
                style={currentTab(history, "/contactus")}
                to="/contactus"
              >
                {" "}
                ContactUs{" "}
              </Link>
            </li>
          </div>

          <li className="search-icon">
            <input type="search" placeholder="Search" />
            <label className="icon">
              <span className="fas fa-search"></span>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Search);
