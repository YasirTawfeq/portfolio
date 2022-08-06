import './index.css';
import BackGround from "./components/BackGround"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
function App() {
  return (
  <>
   <BackGround/>
   <Navbar/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
  </>
  );
}

export default App;
