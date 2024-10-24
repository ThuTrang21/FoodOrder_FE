import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateRestaurantForm } from "../AdminComponent/CreateRestaurant/CreateRestaurantForm";
import { Admin } from "../AdminComponent/Admin/Admin";

export const AdminRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={true?<CreateRestaurantForm/>:<Admin/>}>
        
        </Route>
      </Routes>
    </div>
  );
};
