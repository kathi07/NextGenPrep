import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  font-family: verdana;
  position: relative;
`;

export const SubWrapper = styled.div`
  position: relative;
`;

export const StyledHeader = styled.h1`
  position: absolute;
  left: 0px;
`;

export const StyledLink = styled.p`
  font-size: 1.2rem;
  color: red;
  display: inline-block;
  padding: 0px 10px;
  position: absolute;
  right: 15%;
  width: 10%;
  border: 1px solid #000;
  text-align: center;
`;

export const CustomStyledLink = styled(StyledLink)`
  font-size: 1.2rem;
  color: red;
  padding: 0px 10px;
  position: absolute;
  top: 0px;
  right: 0px;
`;
