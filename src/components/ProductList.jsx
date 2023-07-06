import React, { useEffect } from "react";
import { deleteProduct, getProducts } from "../redux/productReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

export const ProductList = () => {
  const dispatch = useDispatch();
  const [serachParams, setSearchParams] = useSearchParams();
  const products = useSelector((store) => store.productReducer.products);

  let paramsObj = {
    params: {
      gender: serachParams.getAll("gender"),
      color: serachParams.getAll("color"),
      _sort: serachParams.get("order") && "price",
      _order: serachParams.get("order"),
    },
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getProducts(paramsObj));
  }, [serachParams]);

  return (
    <DIV>
      {products.length > 0 &&
        products.map((el) => {
          return (
            <ProductCard key={el.id} {...el} handleDelete={handleDelete} />
          );
        })}
    </DIV>
  );
};

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 10px;
`;
