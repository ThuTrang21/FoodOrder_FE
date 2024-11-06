import React, { useEffect, useState } from "react"; // Import useState
import { AdminSideBar } from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Orders } from "../Orders/Orders";
import { Menu } from "../Menu/Menu";
import { Events } from "../Events/Events";
import { Ingredients } from "../Ingredients/Ingredients";
import { FoodCategory } from "../FoodCategory/FoodCategory";
import { RestaurantDetails } from "./RestaurantDetails";
import { CreateMenuForm } from "../Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantsCategory,
} from "../../State/Restaurant/Action";
import { fetchRestaurantsOrder } from "../../State/Restaurant Order/Action";

export const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const [open, setOpen] = useState(true); // Khai báo trạng thái open và setOpen

  const handleClose = () => {
    setOpen(false); // Khi đóng, set open = false
  };

  useEffect(() => {
    dispatch(
      getRestaurantsCategory({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurantId: restaurant.usersRestaurant?.id,

    }))
    // dispatch(getMenuItemsByRestaurantId());
    // dispatch(getRestaurantById());
  }, []);
  return (
    <div className="lg:flex justify-between relative">
      <div>
        <AdminSideBar open={open} setOpen={setOpen} handleClose={handleClose} />
      </div>
      <div
        className={`transition-all duration-300 lg:w-[${
          open ? "80%" : "100%"
        }]`}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events sidebarOpen={open} />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/category" element={<FoodCategory />} />
          <Route path="/details" element={<RestaurantDetails />} />
          <Route path="/add-menu" element={<CreateMenuForm />} />
        </Routes>
      </div>
    </div>
  );
};
