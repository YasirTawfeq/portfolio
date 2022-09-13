import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from "framer-motion"

function Footer() {
  return (
    <div className="bg-gray-800">
        <motion.div initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.5,duration:2}} className="flex justify-center pt-8 transform mx-4  " >
           <AnchorLink href="#tsparticles" className="bg-[#FF1E00] p-1 rounded-sm duration-300 hover:bg-orange-600  " ><KeyboardDoubleArrowUpIcon sx={{ fontSize: 25 ,color:"white" }} /></AnchorLink>
        </motion.div>
        <div className="flex justify-center py-8 transform">
            <motion.a initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:2}} href="https://www.linkedin.com/in/yasir-tawfeq-b920261b1" target="_blank" rel="noreferrer" className="bg-gray-600 p-2 rounded-sm mx-4 hover:bg-[#FF1E00] hover:rounded-lg duration-300  " ><LinkedInIcon sx={{ fontSize: 35 ,color:"white" }}/></motion.a>
            <motion.a initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:2}}  href="https://github.com/YasirTawfeq" target="_blank" rel="noreferrer" className="bg-gray-600 p-2 rounded-sm mx-4 hover:bg-[#FF1E00] hover:rounded-lg duration-300  " ><GitHubIcon sx={{ fontSize: 35 ,color:"white" }}/></motion.a>
            <motion.a initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:2}}  href="https://twitter.com/YasirTawfeq" target="_blank" rel="noreferrer" className="bg-gray-600 p-2 rounded-sm mx-4 hover:bg-[#FF1E00] hover:rounded-lg duration-300  " ><TwitterIcon sx={{ fontSize: 35 ,color:"white" }}/></motion.a>
        </div>
        <div className="flex justify-center py-2 transform mx-4  " >
           <div className="text-[#FF1E00] text-lg p-1 " >Yasir Tawfeq <span className="">&copy;{new Date().getFullYear()}</span></div>
        </div>
    </div>
  )
}

export default Footer