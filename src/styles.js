import styled, { createGlobalStyle } from "styled-components";

export const ListWrapper = styled.div`
  align-item: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 54%;
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
  color: yello;
  background-color: grey;
  border: grey;
  border-radius: 40px;
`;
