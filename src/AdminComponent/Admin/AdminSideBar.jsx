import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { AdminPanelSettings, Category, Dashboard, Event, Fastfood, Logout, ShoppingBag, ShopTwo } from "@mui/icons-material";

import React from "react";
const menu=[
    {title:"Dashboard", icon:<Dashboard/>,path:"/"},
    {title:"ShoppingBag", icon:<ShoppingBag/>,path:"/orders"},
    {title:"Menu", icon:<ShopTwo/>,path:"/menu"},
    {title:"Food Category", icon:<Category/>,path:"/category"},
    {title:"Ingredients", icon:<Fastfood/>,path:"/ingredients"},
    {title:"Events", icon:<Event/>,path:"/event"},
    {title:"Details", icon:<AdminPanelSettings/>,path:"/details"},
    {title:"Logout", icon:<Logout/>,path:"/"}
  
  ]
export const AdminSideBar = ({ handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  return (
    <div>
      <>
        <Drawer
          onClose={isSmallScreen ? "temporary" : "permanent"}
          variant={handleClose}
          open={true}
          anchor="left"
          sx={{ zIndex: 1 }}
        >
            <div className="w-[70vw] lg:w-[20vw] h-screen flex-col justify-center text-xl space-y-[1.65rem]">
{menu.map((item)=><>
<div>
    {item.icon}
    <span>{item.title}</span>
</div>
<Divider/>
</>)}
            </div>
        </Drawer>
      </>
    </div>
  );
};
