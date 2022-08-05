import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import DevicesIcon from '@mui/icons-material/Devices';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
function About() {
  return (
    <div id="about">
        <div className=" my-16 text-3xl lg:text-4xl font-bold  text-center text-[#FF1E00] ">ABOUT</div>
        <div className="grid grid-cols-2 lg:grid-cols-4  item-center my-14 ">

          <div className="flex flex-col   m-3 lg:m-0 items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><SpeedIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
            <div className="font-bold text-[#383838] text-xl" >Fast</div>
            <div className="text-lg lg:text-xl text-[#383838] w-full text-center " >Fast load times my highest priority.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><DevicesIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Responsive</div>
            <div className="text-lg lg:text-xl text-[#383838] w-full text-center " >My layouts will work on any device, big or small.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><LightbulbIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Intuitive</div>
            <div className="text-lg lg:text-xl text-[#383838] w-full text-center " >Strong preference for easy to use, intuitive UX/UI.</div>
          </div>

           <div  className="flex flex-col m-3 lg:m-0  items-center" >
            <div className=" bg-[#FF1E00] rounded-full p-4  "><RocketLaunchIcon sx={{ fontSize: 60 ,color:"white" }}/></div>
             <div className="font-bold text-[#383838] text-xl" >Dynamic</div>
            <div className="text-lg lg:text-xl text-[#383838] w-full text-center " > I love making pages come to life.</div>
          </div>
          
          
         
          
        </div>
    </div>
  )
}

export default About