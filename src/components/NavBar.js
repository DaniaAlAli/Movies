import React from "react";

//Style
import { LogoLink, NavStyled, NavItem } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <LogoLink to="/">
          <img alt="logo" src="/photos/Logo.png" />
        </LogoLink>
        <ul className="navbar-nav ml-auto">
          <NavItem
            className="nav-item "
            to="/movies"
            style={{
              margin: 10,
              float: "right",
              fontFamily: "Faster One, cursive",
              fontSize: "30px",
            }}
          >
            All Movies
          </NavItem>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
