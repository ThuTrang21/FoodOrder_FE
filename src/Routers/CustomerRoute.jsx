import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import Cart from '../component/Cart/Cart'
import RestaurantDetail from '../component/Restaurant/RestaurantDetail'
import Profile from '../component/Profile/Profile'
import { Auth } from '../component/Auth/Auth'

export const CustomerRoute = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='fixed top-0 left-0 w-full z-50'>
        <Navbar />
      </div>
      <div className="mt-[64px] flex-1 overflow-auto">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account/:register' element={<Home/>}/>
          <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetail/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
      </div>
      <Auth />
    </div>
  )
}
