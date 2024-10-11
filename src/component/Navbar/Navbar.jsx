import { Avatar, Badge, Box, IconButton } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Navbar() {
  const {auth, cart}=useSelector((store)=>store)
  const navigate=useNavigate()

  const handleAvatarClick=()=>{
    if(auth.user?.role==="ROLE_CUSTOMER"){
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurant")
    }
  }
  return (
    <Box
      className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#1c9fca] lg:px-20 flex
    justify-between"
    >
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <li onClick={()=>navigate("/")}
            className="logo font-semibold text-gray-300 text-2xl"
            style={{ listStyle: "none" }}
          >
            Trang Food
          </li>
        </div>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }}></SearchIcon>
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullName[0].toUpperCase()}</Avatar>
          ) : (
            <IconButton onClick={()=>navigate("/account/login")}>
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton onClick={()=>navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.item.length}>
              <ShoppingCartIcon
                sx={{ color: "black", fontSize: "1.5rem" }}
              ></ShoppingCartIcon>
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
