import React from "react";
import { ProductList } from "../components/ProductList";
import { SideBar } from "../components/SideBar";
import { styled } from "styled-components";

export const HomePage = () => {
  return (
    <DIV>
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="product-list">
        <ProductList />
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;

  .sidebar {
    width: 15%;
  }

  .product-list {
    width: 85%;
  }
`;
