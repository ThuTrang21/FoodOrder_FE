import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { Divider, Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../State/Authentidation/Action";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import styled from "@emotion/styled";
import Navbar from "../Navbar/Navbar";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payment", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];

export const ProfileNavigation = ({ open, setOpen }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
    if (isSmallScreen) {
      setOpen(false); // Đóng menu sau khi ấn
    }
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3, 1),
    justifyContent: "flex-end",
  }));
  return (
    <div className="flex flex-col">
    <div className="fixed top-0 left-0 p-2 z-50">
        {!open && ( // Hiển thị MenuIcon chỉ khi Drawer đóng
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <Drawer
        onClose={toggleDrawer}
        open={open}
        anchor="left"
        sx={{ zIndex: 1, position: "absolute" }}
        variant={isSmallScreen ? "temporary" : "persistent"}
      >
        <DrawerHeader>
          <div className="flex justify-end"></div>
        </DrawerHeader>
        <Divider />
        <DrawerHeader className="pt-72">
          <div className="flex justify-end">
            <IconButton onClick={toggleDrawer}>
              <CloseIcon /> {/* Icon để đóng Drawer */}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <div className="pt-4 w-[50vw] lg:w-[20vw] h-[calc(100vh-8rem)] overflow-y-auto flex flex-col text-xl gap-8">
          {menu.map((item, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
