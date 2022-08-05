import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
    let activeStyle = {
    background: "#FF1E00",
  };

  let activeClassName = "text-[#FF1E00]";
  return (
    <div className="w-full h-12 border-b-2 border-[#FF1E00] bg-[#383838] sticky " >
       <ul className="flex ml-0 lg:ml-16 text-md lg:text-lg text-white justify-between lg:justify-start items-center pt-2.5" >
        <li className=" mx-3  hover:text-[#FF1E00]">
           <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : activeStyle}>
                HOME
              </span>
            )}
          </NavLink>
        </li>
        <li className=" mx-3  hover:text-[#FF1E00]">
          <NavLink to="/about">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : activeStyle}>
                ABOUT
              </span>
            )}
          </NavLink>
        </li>
        <li className=" mx-3  hover:text-[#FF1E00]">
          <NavLink to="/projects">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : activeStyle}>
                PROJECTS
              </span>
            )}
          </NavLink>
        </li>
        <li className=" mx-3  hover:text-[#FF1E00]">
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                CONTACT
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar