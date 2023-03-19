import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { 
  CampaignDetails, CreateCampaign, Home, Profile, 
  Register, Login, 
  Organizations, Organization 
} from './pages';

import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <div className="relative sm:-8 p-4 bg-gray-100 min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/organizations/:id" element={<Organization />} />
          
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
          <Route path="/profile" element={!user ? <Navigate to="/" /> : <Profile />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App