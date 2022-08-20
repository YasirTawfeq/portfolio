import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MediaQuery from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
   const [side,setSide] =useState(false);
    let activeStyle = {
    background: "#FF1E00",
  };
  let activeClassName = "text-[#FF1E00]";
  return (
    <div className="w-full h-12 border-b-4 border-[#FF1E00] bg-[#383838]  " >
      <MediaQuery minWidth={600}>
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
              <AnchorLink href="#about" className={isActive ? activeClassName : activeStyle}>
                ABOUT
              </AnchorLink>
            )}
          </NavLink>
        </li>
        <li className=" mx-3  hover:text-[#FF1E00]">
          <NavLink to="/projects">
            {({ isActive }) => (
              <AnchorLink href="#project" className={isActive ? activeClassName : activeStyle}>
                PROJECTS
              </AnchorLink>
            )}
          </NavLink>
        </li>
        <li className=" mx-3  hover:text-[#FF1E00]">
          <NavLink to="/contact">
            {({ isActive }) => (
              <AnchorLink href="#contact" className={isActive ? activeClassName : undefined}>
                CONTACT
              </AnchorLink>
            )}
          </NavLink>
        </li>
      </ul>
     </MediaQuery>

      <MediaQuery maxWidth={600}>
      <div onClick={() =>setSide(!side)} className="w-full relative left-0 " > <MenuIcon  sx={{ fontSize: 40 ,color:"white" }} />
       <ul className={side?"min-h-screen bottom-0 flex flex-col bg-[#383838] mt-2 ml-0 lg:ml-16 text-md lg:text-lg text-white  lg:justify-start items-center pt-2.5":"hidden"} >
        <li  onClick={()=>setSide(!side)}className=" m-3  hover:text-[#FF1E00]">
           <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : activeStyle}>
                HOME
              </span>
            )}
          </NavLink>
        </li>
        <li onClick={()=>setSide(!side)} className=" m-3  hover:text-[#FF1E00]">
          <NavLink to="/about">
            {({ isActive }) => (
              <AnchorLink href="#about" className={isActive ? activeClassName : activeStyle}>
                ABOUT
              </AnchorLink>
            )}
          </NavLink>
        </li>
        <li onClick={()=>setSide(!side)} className=" m-3  hover:text-[#FF1E00]">
          <NavLink to="/projects">
            {({ isActive }) => (
              <AnchorLink href="#project" className={isActive ? activeClassName : activeStyle}>
                PROJECTS
              </AnchorLink>
            )}
          </NavLink>
        </li>
        <li onClick={()=>setSide(!side)} className=" m-3  hover:text-[#FF1E00]">
          <NavLink to="/contact">
            {({ isActive }) => (
              <AnchorLink href="#contact" className={isActive ? activeClassName : undefined}>
                CONTACT
              </AnchorLink>
            )}
          </NavLink>
        </li>
      </ul>
      </div>
     </MediaQuery>

    </div>
  )
}

export default Navbar