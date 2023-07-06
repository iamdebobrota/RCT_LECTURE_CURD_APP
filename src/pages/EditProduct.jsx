import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProduct } from "../redux/productReducer/action";

export const EditProduct = () => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const { id } = useParams();
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.find((el) => el.id === +id);
    setPrice(data.price);
    setName(data.name);
  }, []);

  const handleUpdate = () => {
    const newData = { price: +price, name: name };
    dispatch(updateProduct(newData, id));
  };
  return (
    <div>
      <h1>Id: {id}</h1>
      <div>
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
