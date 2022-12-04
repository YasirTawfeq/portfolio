import Particles from "react-tsparticles";
import "../index.css"
import { loadFull } from "tsparticles";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { saveAs } from 'file-saver';
import { motion } from "framer-motion"

function BackGround() {
     
    const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
   
  };
   const downloadImage = (url) => {
        saveAs(url, 'Yasir') 
        }

  return (<>
      <div className=" flex  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full items-center justify-center ">
       <motion.div initial={{y:-150,opacity:0}} viewport={{ once: true }} whileInView={{y:0,opacity:1}}  className="flex flex-col justify-center text-center ">
         <p className="text-xl md:text-2xl lg:text-3xl font-mono  text-white">Hello, I'm <span style={{color:"#FF1E00"}} >Yasir Tawfeq</span>.<br />
           I am a Front End Developer.
         </p>
         
          <div className="flex justify-center " >
            <AnchorLink  href="#about" >
              <motion.a initial={{y:60,opacity:0}} viewport={{ once: true }} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.5}} className=" flex justify-center bg-none hover:bg-[#FF1E00] transform duration-200 hover:border-[#FF1E00] border-2 p-0.5 lg:p-2 px-2 lg:px-5 mx-1  m-4 text-white  text-sm lg:text-lg border-white rounded-sm " >View my work</motion.a> 
            </AnchorLink>
           <motion.button initial={{y:60,opacity:0}} viewport={{ once: true }} whileInView={{y:0,opacity:1}} transition={{duration:1.2,delay:0.9}} onClick={() =>downloadImage(require('../imgs/yasir.jpg'))}  className=" flex justify-center bg-none hover:bg-[#FF1E00] transform duration-200 hover:border-[#FF1E00] border-2 p-0.5 lg:p-2 px-2 lg:px-5   m-4 text-white  text-sm lg:text-lg border-white rounded-sm ">
             Download CV
           </motion.button>
          </div>
          
        </motion.div>    
    </div>
     <Particles
       height={"650px"}
       id="tsparticles"
       init={particlesInit}
       loaded={particlesLoaded}
       options={{
        fullScreen: {
        enable: false,
        zIndex: -999
        },
        background: {
          color: {
            value: "#2C3333",
          },
          
        },
        fpsLimit: 160,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode:"bubble"
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#FF1E00",
          },
          links: {
            color: "#FEFBF6",
            distance: 140,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value:2,
          },
        },
        detectRetina: true,
      }}
    />
  
        </>
   
  )
}

export default BackGround