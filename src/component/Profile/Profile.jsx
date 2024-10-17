import React, { useState } from 'react';
import { ProfileNavigation } from './ProfileNavigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Order from './Order';
import Address from './Address';
import Favorite from './Favorite';
import Event from './Event';

const Profile = () => {
  const [open, setOpen] = useState(true); // Khai báo trạng thái open và setOpen

  return (
    <div className='lg:flex justify-between'>
      <ProfileNavigation open={open} setOpen={setOpen} />
      <div className={`transition-all duration-300 ${
          open ? 'lg:w-[78%]' : 'lg:w-[100%]'
        } w-full`}>
        <Routes>
          <Route path='/' element={<UserProfile />} />
          <Route path='/orders' element={<Order />} />
          <Route path='/address' element={<Address />} />
          <Route path='/favorites' element={<Favorite />} />
          <Route path='/events' element={<Event />} />
        </Routes>
      </div>
    </div>
  );
}

export default Profile;
