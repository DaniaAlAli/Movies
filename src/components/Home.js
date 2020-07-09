import React from "react";
import logo from "../photos/Logo.png";

//Style
import { Title, TitleWrap, Logo } from "../styles";

const Home = () => {
  return (
    <TitleWrap>
      <Title> Welcome to : </Title>
      <Logo src={logo} alt="Movies" />
    </TitleWrap>
  );
};

export default Home;
