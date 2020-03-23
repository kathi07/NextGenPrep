import React, { Component } from "react";
import styled from "styled-components";
import {
  Wrapper,
  SubWrapper,
  StyledLink,
  CustomStyledLink,
  StyledHeader
} from "../css/HomeStyle";

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <SubWrapper>
          <StyledHeader>Pravallika Kathi</StyledHeader>
          <StyledLink>Cart</StyledLink>
          <CustomStyledLink>LogIn</CustomStyledLink>
        </SubWrapper>
      </Wrapper>
    );
  }
}

export default HomePage;
