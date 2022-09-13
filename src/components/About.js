import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SkillBar from "react-skillbars";
import { motion } from "framer-motion"

function About() {

    const SKILLS6 = [
  {
    type: "HTML",
    level: 100,
    color: { bar: "#FF1E00", title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "CSS",
    level: 90,
    color: { bar: "#FF1E00", title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "Javascript",
    level: 85,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "Typescript",
    level: 60,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "React",
    level: 85,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "Nextjs",
    level: 80,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  }]

  return (
    <div  className="md:mx-10">
        <motion.h1 initial={{x:-350,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:2}}  id="about" className=" my-16 text-3xl lg:text-4xl font-bold  text-center text-[#FF1E00] ">ABOUT</motion.h1>
       
        <div className="grid grid-cols-2 lg:grid-cols-4  item-center my-14 ">

          <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4}} className="flex flex-col   m-3 lg:m-0 items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><SpeedIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
            <div className="font-bold text-[#383838] text-xl" >Fast</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " >Fast load times my highest priority.</div>
          </motion.div>

           <motion.div  initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.7}} className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><DevicesIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Responsive</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " >My layouts will work on any device, big or small.</div>
          </motion.div>

           <motion.div  initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.1}} className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><LightbulbIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Intuitive</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52  text-center " >Strong preference for easy to use, intuitive UX/UI.</div>
          </motion.div>

           <motion.div  initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.5}} className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><RocketLaunchIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Dynamic</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " > I love making pages come to life.</div>
          </motion.div>
          
        </div>

        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:4}}  className=" grid gride-cols-1 lg:grid-cols-2 xl:mx-20 ">

          <div className="flex flex-col items-center my-8 md:flex-row text-center w-full " >
            <img className="w-60 h-60 border-8 border-[#FF1E00]  rounded-full" src="https://yasirtawfeq.netlify.app/img/pro.jpg" alt="" />
            <p className=" font-serif w-full lg:w-80 text-center lg:text-left  text-lg p-5 pt-3 " >Hi, I'm <span className="text-[#FF1E00]" >Yasir</span>, I graduated from the University of Charmo in 2022 with a bachelor degree in Computer Science. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.</p>
          </div>
          
          <div  className="my-16 mx-4">
            <SkillBar skills={SKILLS6} height={20} />
          </div>
        </motion.div>  

       <motion.div initial={{y:300,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:3}} className="flex justify-center w-full  ">

        <div className="flex flex-col items-center " >
         <div className="bg-[#FF1E00] p-1 rounded-full text-white px-2 text-3xl font-bold" >
           UI
         </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8 flex-wrap" >
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1 " >Tailwind</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Material UI</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Bootstrap</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Bulma</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Ant Design</div>
            <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Materialize </div>
         </div>
       </div>

      </motion.div>       
    </div>
  )
}

export default About