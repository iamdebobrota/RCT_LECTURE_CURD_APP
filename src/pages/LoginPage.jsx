import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { login } from "../redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuth, isError } = useSelector((store) => {
    return {
      isAuth: store.authReducer.isAuth,
      isError: store.authReducer.isError,
    };
  }, shallowEqual);
  const location = useLocation();
  const navigate = useNavigate();

  const pathComingFrom = location.state?.from?.pathname || "/";
  console.log("pathComingFrom: ", pathComingFrom);
  // location.state
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };

    dispatch(login(userData)).then(() => {
      navigate(pathComingFrom, { replace: true });
    });
  };

  return (
    <DIV iserror={isError.toString()}>
      <h1>Log In</h1>
      {isAuth && <h2>Login Successfull...!</h2>}
      {isError && <h2>Invalid Credentials...!</h2>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 40px auto;
  gap: 10px;

  input {
    height: 40px;
    font-size: large;
    border: ${({ iserror }) =>
      iserror === "true" ? "1px solid red" : "1px solid gray"};
  }

  button {
    height: 35px;
  }
`;
