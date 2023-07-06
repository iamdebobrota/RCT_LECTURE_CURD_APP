import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

export const postProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/products", newProduct)
    .then((res) => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE, payload: err.message });
    });
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE, payload: err.message });
    });
};

export const updateProduct = (newData, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .patch(`http://localhost:8080/products/${id}`, newData)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE, payload: err.message });
    });
};
export const deleteProduct = (id) => (dispatch) => {
  // console.log("ID: " + id);
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch(getProducts())
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE, payload: err.message });
    });
};
