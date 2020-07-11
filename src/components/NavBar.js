import React from "react";
import { LogoA, NavStyled, NavItem } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavTogglerDemo0">
        <LogoA className="navbar-brand" to="/">
          <img src="/photos/show-time.png" alt="logo" width="50" />
        </LogoA>
        <ul className="navbar-nav ml-auto mt-2.lg-0">
          <NavItem to="/movies" style={{ padding: 10 }}>
            Movie List{" "}
          </NavItem>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
