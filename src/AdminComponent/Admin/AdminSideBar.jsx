import { Divider, Drawer, IconButton, useMediaQuery } from "@mui/material";
import {
  AdminPanelSettings,
  Category,
  Dashboard,
  Event,
  Fastfood,
  Logout,
  ShoppingBag,
  ShopTwo,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../State/Authentidation/Action";
const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
  { title: "Menu", icon: <ShopTwo />, path: "/menu" },
  { title: "Food Category", icon: <Category />, path: "/category" },
  { title: "Ingredients", icon: <Fastfood />, path: "/ingredients" },
  { title: "Events", icon: <Event />, path: "/events" },
  { title: "Details", icon: <AdminPanelSettings />, path: "/details" },
  { title: "Logout", icon: <Logout />, path: "/" },
];
export const AdminSideBar = ({open, setOpen, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleNavigate=(item)=>{
navigate(`/admin/restaurants${item.path}`)
if(item.title==="Logout"){
navigate("/")
dispatch(logout())
handleClose() 
}
if (isSmallScreen) {
    setOpen(false); // Đóng menu sau khi ấn
  }
  }
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className="flex">
      <>
     
      <div className="fixed top-2 left-4 p-2 z-50">
          {!open && (
            <IconButton onClick={toggleDrawer}
            className={`absolute z-50 ${!open ? 'block' : 'hidden'}`}>
              <MenuIcon />
            </IconButton>
          )}
        </div>

        <Drawer
         onClose={toggleDrawer} 
         open={open} 
         anchor="left"
         variant={isSmallScreen ? "temporary" : "persistent"} 
         sx={{ zIndex: 1}}
        >
            <div className="flex justify-end pt-2">
          <IconButton onClick={toggleDrawer}>
            <CloseIcon /> 
          </IconButton>
        </div>
          <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center space-y-[1.2rem]">
            {menu.map((item,i) => (
              <>
                <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center gap-5 cursor-pointer text-sm">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i!==menu.length-1 && <Divider/>}
              </>
            ))}
          </div>
        </Drawer>
      </>
    </div>
  );
};
