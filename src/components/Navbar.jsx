import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h1>CRUD APP</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/add-product"}>Admin</Link>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid gray;
`;
