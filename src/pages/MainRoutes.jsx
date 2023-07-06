import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage";
import { LoginPage } from "./LoginPage";
import { PrivateRoute } from "../components/PrivateRoute";
import { EditProduct } from "./EditProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 Page Not Found!</h1>} />
    </Routes>
  );
};

// A --> C  --> Login --> C
// M --> N  --> Login --> N
