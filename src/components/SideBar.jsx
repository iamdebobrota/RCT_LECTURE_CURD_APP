import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

export const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGender = searchParams.getAll("gender");
  const initialColor = searchParams.getAll("color");
  const initialOrder = searchParams.get("order");
  const [gender, setGender] = useState(initialGender || []);
  const [color, setColor] = useState(initialColor || []);
  const [order, setOrder] = useState(initialOrder || "");

  useEffect(() => {
    const params = {
      gender,
      color,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [gender, color, order]);

  const handleGender = (e) => {
    const { value } = e.target;
    let newGender = [...gender];

    if (newGender.includes(value)) {
      newGender = newGender.filter((el) => el !== value);
    } else {
      newGender.push(value);
    }

    setGender(newGender);
  };

  const handleColor = (e) => {
    const { value } = e.target;
    let newColor = [...color];

    if (newColor.includes(value)) {
      newColor = newColor.filter((el) => el !== value);
    } else {
      newColor.push(value);
    }

    setColor(newColor);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  return (
    <DIV>
      <h3>Filter by Gender</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={handleGender}
          checked={gender.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={handleGender}
          checked={gender.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={handleGender}
          checked={gender.includes("kids")}
        />
        <label>Kids</label>
      </div>

      <h3>Filter By Color</h3>
      <div>
        <input
          type="checkbox"
          value={"red"}
          onChange={handleColor}
          checked={color.includes("red")}
        />
        <label>Red</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"black"}
          onChange={handleColor}
          checked={color.includes("black")}
        />
        <label>Black</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"green"}
          onChange={handleColor}
          checked={color.includes("green")}
        />
        <label>Green</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"white"}
          onChange={handleColor}
          checked={color.includes("white")}
        />
        <label>white</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"blue"}
          onChange={handleColor}
          checked={color.includes("blue")}
        />
        <label>Blue</label>
      </div>
      <h3>Sort by price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Low To High</label>
        <br />
        <br />
        <input
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>High To Low</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  padding: 0 20px;
  border-right: 1px solid gray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/*

if(array already have the value)

["male", "female", "kids"]

https://www.abc.com/?sort=asc&page=1&limit=10

*/
