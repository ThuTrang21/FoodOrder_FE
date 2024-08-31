import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar() {
  return (
    <Box className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#1c9fca] lg:px-20 flex
    justify-between'>
      <div className='flex items-center space-x-4'>
        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
          <li className='logo font-semibold text-gray-300 text-2xl' style={{listStyle:"none"}}>
            Trang Food
          </li>
        </div>
      </div>
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div className=''>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }}></SearchIcon>
          </IconButton>
        </div>
        <div className=''>
          <Avatar sx={{ bgcolor: "white", color:pink.A400 }}>C</Avatar>
        </div>
        <div className=''>
          <IconButton>
            <Badge color="primary" badgeContent={3}>
            <ShoppingCartIcon sx={{color:"black", fontSize: "1.5rem" }}></ShoppingCartIcon>
            </Badge>
            
          </IconButton>
        </div>
      </div>


    </Box >
  )
}
