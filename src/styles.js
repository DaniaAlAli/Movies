import styled, { createGlobalStyle } from "styled-components";

export const DetailWrapper = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width 80;
`;

export const GlobalStyle = createGlobalStyle`
body{
    align-item: center;
    justify-content: center;
    display: flex;
    background-image: url("http://jmd.im/black_wallpapers/I/phone/BLACK_I_phone-6.jpg");
    }
`;

export const ListWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  text-align: center;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 54%;
`;

export const MovieWrapper = styled.div`
  padding: 20px;
  img {
    width: 220px;
    height: 250px;
    border-radius: 20px;
  }
  p {
    text-align: center;
    color: #ffcf31;
    font-family: "Bungee Inline", cursive;
    font-size: 25px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
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
  margin-bottom: 10px;
  margin-top: 60px;
  text-align: center;
  color: yellow;
  background-color: grey;
  border: grey;
  border-radius: 40px;
`;
