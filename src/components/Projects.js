import React from 'react'

function Projects() {
  return (<div className="bg-gray-100">
     <div className=" my-16 text-3xl lg:text-4xl font-bold pt-8 text-center text-[#FF1E00] ">PROJECTS</div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-0 md:px-20 md:py-10">
       
        <div className=" h-64 relative group transform  ">
            <img className="h-full w-full group-hover:opacity-30 duration-300 " src="https://images8.alphacoders.com/712/712496.jpg" alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >KURD<small>ANIME</small></p>
              <a href="#" className="bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">View</a>
            </div>
        </div>
        
        <div className=" h-64 relative group transform  ">
            <img className="h-full w-full group-hover:opacity-30 duration-300 " src="https://images8.alphacoders.com/712/712496.jpg" alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >KURD<small>ANIME</small></p>
              <a href="#" className="bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">View</a>
            </div>
        </div>

        <div className=" h-64 relative group transform  ">
            <img className="h-full w-full group-hover:opacity-30 duration-300 " src="https://images8.alphacoders.com/712/712496.jpg" alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >KURD<small>ANIME</small></p>
              <a href="#" className="bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">View</a>
            </div>
        </div>

        <div className=" h-64 relative group transform  ">
            <img className="h-full w-full group-hover:opacity-30 duration-300 " src="https://images8.alphacoders.com/712/712496.jpg" alt="project1" />
            <div className=" flex flex-col invisible group-hover:visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
              <p className="text-[#FF1E00] text-2xl font-bold " >KURD<small>ANIME</small></p>
              <a href="#" className="bg-[#FF1E00] p-1 px-8 font-semibold text-gray-200 text-lg rounded-sm mt-8 ">View</a>
            </div>
        </div>

     </div>
    </div>
  )
}

export default Projects