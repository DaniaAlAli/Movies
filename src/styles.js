import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const DetailWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;
  
  h1 {
    font-family: 'Codystar', cursive;
    width: 60%;
    font-size: 30px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    text-align: center;
    color: red;
  }
  img {
    &.main {
      width: 300px;
      height: 400px;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    &.RMimage1{
      width: 190px;
      height: 250px;
      border-radius: 20px;
      margin-left: auto;
      margin-right: auto;
      padding: 15px;
      
    }
    &.stars{
      width: 100px;
    }
  }
    p {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      color: yellow;
      text-align: center;
        font-family: "Bungee Inline", cursive;
        color: white;
    
        span{
          color: #00c3ff;
          font-size: 20px;
        }
     
      
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  
    background-image: url("http://jmd.im/black_wallpapers/I/phone/BLACK_I_phone-6.jpg");
    }
`;

export const CarouselImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 17%;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const Wrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
`;
export const ListWrapper = styled.div`
  flex-wrap: wrap;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  text-align: center;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

export const LogoLink = styled(Link)`
  padding: 3em;
  img {
    width: 140px;
  }
`;

export const PLink = styled(Link)`
  text-align: center;
  color: #00bb10;
  font-family: "Cabin Sketch", cursive;
  font-size: 50px;
`;
export const MovieWrapper = styled.div`
  padding: 10px;
  margin-left: 90px;
  margin-right: 70px;
  img {
    width: 220px;
    height: 250px;
    border-radius: 20px;
  }
  p {
    padding: 10px;
    text-align: center;
    color: #ffcf31;
    font-family: "Codystar", cursive;
    font-size: 30px;

    width: 130%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const NavItem = styled(NavLink)`
  &.active {
    color: green;
  }
`;

export const NavStyled = styled.nav`
  // border: 1px solid red;
  // border-radius: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 0.1px;
  font-family: "Hanalei", cursive;
  font-size: 55px;
`;

export const TitleWrap = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  margin-top: 10px;
`;

export const Video = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
  margin-bottom: 25px;
`;

export const ListTitle = styled.div`
  text-align: center;
  color: #ffcf31;
  font-family: "Codystar", cursive;
  font-size: 40px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  align-item: center;
  justify-content: center;
  display: flex;
`;

export const RecommendedWrapper = styled.div`
  align-item: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  img {
    margin-left: 10px;
    margin-right: 10px;
    width: 220px;
    height: 260px;
    border-radius: 20px;
  }
`;
