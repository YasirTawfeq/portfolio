import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { motion } from "framer-motion"

function Projects() {
  return (
  <div className="bg-gray-100">
     <motion.h1 initial={{x:-350,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{duration:2}} id="project" className=" my-16 text-3xl lg:text-4xl font-bold pt-8 text-center text-[#FF1E00] ">PROJECTS</motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0 md:px-20 md:py-10">
       
        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full rounded-md w-full group-hover:opacity-40 duration-300 "  src={require("../imgs/kurdanime.png")} alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >KURD<small>ANIME</small></p>
              <small className="text-[#FF1E00] font-bold " >Tailwind / React / Typescript</small>
              <a href="https://kurdanime.netlify.app/"  target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
        </motion.div>
        
        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full  rounded-md w-full group-hover:opacity-60 duration-300 " src={require("../imgs/yona.png")} alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >Yona</p>
              <small className="text-[#FF1E00] font-bold " >MUI / Nextjs / Typescript</small>
               <a href="https://yona-next.vercel.app/" target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
        </motion.div>

        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:0.8,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full  rounded-md w-full group-hover:opacity-60 duration-300 " src={require('../imgs/sushi.png')} alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >SUSHI</p>
              <small className="text-[#FF1E00] font-bold " >Tailwind / React</small>
               <a href="https://soshiss.netlify.app/"  target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
        </motion.div> 

        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:1.2,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full  rounded-md w-full group-hover:opacity-60 duration-300 " src={require("../imgs/sono.png")} alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >SONO</p>
              <small className="text-[#FF1E00] font-bold " >Tailwind / React</small>
              <a href="https://bright-pie-465b71.netlify.app/" target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
        </motion.div>

        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:1.4,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full  rounded-md w-full group-hover:opacity-60 duration-300 " src={require("../imgs/todo.png")} alt="project5" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >Todo App</p> 
              <small className="text-[#FF1E00] font-bold " >Tailwind / React</small>
               <a href="https://todoprogect.netlify.app/"  target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
        </motion.div> 

        <motion.div initial={{x:-100,opacity:0}} viewport={{ once: true }} whileInView={{x:0,opacity:1}} transition={{delay:1.8,duration:1}} className=" h-64 relative m-1 group transform  ">
            <img className="h-full  rounded-md w-full group-hover:opacity-60 duration-300 " src={require("../imgs/calculator.png")}alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >Calculator</p>
              <small className="text-[#FF1E00] font-bold " >Tailwind / React</small>
              <a href="https://genuine-melba-ee8bf5.netlify.app/" target="_blank" rel="noreferrer" className="flex hover:bg-orange-500 duration-100 bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">
                <div className="px-1" ><RemoveRedEyeIcon sx={{ fontSize: 25 ,color:"white" }} /></div>
                <span className="mt-0.5" > View</span>
              </a>
            </div>
         </motion.div> 
          
      </div>
    </div>
  )
}

export default Projects