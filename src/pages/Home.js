import "./Home.css";

import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import Logo from "../images/googleLogo.png";
import Search from "../components/Search";

export default function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps style={{ cursor: "pointer" }} />
          <Avatar className="home_header-right-avatar" />
        </div>
      </div>
      <div className="home_body">
        <img src={Logo} alt="" />
        <div className="home_body-inputcontainer">
          <Search />
        </div>
      </div>
    </div>
  );
}
