import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SkillBar from "react-skillbars";

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
    type: "Javascrips",
    level: 85,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "React",
    level: 80,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "Nextjs",
    level: 35,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  },
  {
    type: "SCSS",
    level: 70,
    color: { bar: "#FF1E00" , title: { text: "#fff", background: "#333333" } }
  }]

  return (
    <div  className="md:mx-10">
        <div id="about" className=" my-16 text-3xl lg:text-4xl font-bold  text-center text-[#FF1E00] ">ABOUT</div>
       
        <div className="grid grid-cols-2 lg:grid-cols-4  item-center my-14 ">

          <div className="flex flex-col   m-3 lg:m-0 items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><SpeedIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
            <div className="font-bold text-[#383838] text-xl" >Fast</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " >Fast load times my highest priority.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><DevicesIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Responsive</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " >My layouts will work on any device, big or small.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><LightbulbIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Intuitive</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52  text-center " >Strong preference for easy to use, intuitive UX/UI.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><RocketLaunchIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Dynamic</div>
            <div className="text-sm lg:text-lg text-[#383838] w-44 lg:w-52 text-center " > I love making pages come to life.</div>
          </div>
          
        </div>

        <div  className=" grid gride-cols-1 lg:grid-cols-2 xl:mx-20 ">

          <div className="flex flex-col items-center my-8 md:flex-row text-center w-full " >
            <img className="w-60 h-60 border-8 border-[#FF1E00]  rounded-full" src="https://yasirtawfeq.netlify.app/img/pro.jpg" alt="" />
            <p className=" font-serif w-full lg:w-80 text-center lg:text-left  text-lg p-5 pt-3 " >Hi, I'm <span className="text-[#FF1E00]" >Yasir</span>, I graduated from the University of Charmo in 2022 with a bachelor degree in Computer Science. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.</p>
          </div>
          
          <div  className="my-16 mx-4">
            <SkillBar skills={SKILLS6} height={20} />
          </div>
        </div>  

       <div className="flex justify-center w-full  ">

        <div className="flex flex-col items-center " >
         <div className="bg-[#FF1E00] p-1 rounded-full text-white px-2 text-3xl font-bold" >
           UI
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-5 mt-4 flex-wrap" >
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1 " >Tailwind</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Material UI</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Bootstrap</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Bulma</div>
           <div className="text-2xl font-semibold text-[#383838] mx-4 lg:mx-6 my-1" >Ant Design</div>
         </div>
       </div>

      </div>       
    </div>
  )
}

export default About