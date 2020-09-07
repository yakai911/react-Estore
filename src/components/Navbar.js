import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { ButtonContainer } from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <navWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" width="50px" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link text-dark ">
              商品
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            购物车
          </ButtonContainer>
        </Link>
      </navWrapper>
    );
  }
}

const navWrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
