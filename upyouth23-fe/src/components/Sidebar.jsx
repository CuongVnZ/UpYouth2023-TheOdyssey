import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../redux/userRedux"

import { logo, sun } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`shadow-md w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)



const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  const user = useSelector(state => state.user.currentUser)

  const dispatch = useDispatch();

  const logoutHandler = () => {
      dispatch(logout())
  }

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon styles="w-[52px] h-[52px] bg-white" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-white rounded-[20px] w-[76px] py-4 mt-12 shadow-md">
        <div className="flex flex-col justify-center items-center gap-3">
          {/* {navlinks.map((link) => (
            <Icon 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))} */}


          <Icon 
            key={navlinks[0].name}
            {...navlinks[0]}
            isActive={isActive}
            handleClick={() => {
              if(!navlinks[0].disabled) {
                setIsActive(navlinks[0].name);
                navigate(navlinks[0].link);
              }
            }}
          />
          <Icon 
            key={navlinks[1].name}
            {...navlinks[1]}
            isActive={isActive}
            handleClick={() => {
              if(!navlinks[1].disabled) {
                setIsActive(navlinks[1].name);
                navigate(navlinks[1].link);
              }
            }}
          />
          {/* <Icon 
            key={navlinks[2].name}
            {...navlinks[2]}
            isActive={isActive}
            handleClick={() => {
              if(!link.disabled) {
                setIsActive(link.name);
                navigate(navlinks.link);
              }
            }}
          /> */}
          <Icon 
            key={navlinks[3].name}
            {...navlinks[3]}
            isActive={isActive}
            handleClick={() => {
              if(!navlinks[3].disabled) {
                setIsActive(navlinks[3].name);
                navigate(navlinks[3].link);
              }
            }}
          />
          <Icon 
            key={navlinks[4].name}
            {...navlinks[4]}
            isActive={isActive}
            handleClick={() => {
              if(!navlinks[4].disabled) {
                setIsActive(navlinks[4].name);
                navigate(navlinks[4].link);
              }
            }}
          />
          {user && (<Icon 
            key={navlinks[5].name}
            {...navlinks[5]}
            isActive={isActive}
            handleClick={() => {
              if(!navlinks[5].disabled) {
                // setIsActive(navlinks[5].name);
                // navigate(navlinks[5].link);
                
              }
              logoutHandler()
            }}
          />)}


        </div>

        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar