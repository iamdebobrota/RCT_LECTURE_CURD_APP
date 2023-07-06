import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { deleteProduct } from "../redux/productReducer/action";

export const ProductCard = ({
  id,
  name,
  price,
  brand,
  image,
  category,
  color,
  gender,
  handleDelete
}) => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  console.log("ProductCard components render")
  return (
    <DIV>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <p>Color: {color}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Gender: {gender}</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button>
          <Link to={`/edit/${id}`}>Edit</Link>
        </button>
        {isAuth && (
          <div>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        )}
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  border: 2px solid gray;
  width: 100%;
  padding: 3px;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;
