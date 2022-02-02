import React, { useState } from "react";
import styled from "styled-components";
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0, 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, #f8049c, #fdd54f);
  border-bottom: 3px solid #fdd54f;
`;

const Manu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  border-bottom: 3px solid #fdd54f;
  background: white;
  font-family: "Open Sans";
  left: 0;
  top: 60%;
  padding: 8px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    position: relative;
    width: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: black;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setManuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => {
          setManuOpen((s) => !s);
        }}
      >
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Manu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
      </Manu>
    </HeaderWrapper>
  );
}

export default Header;
