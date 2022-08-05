import './index.css';
import BackGround from "./components/BackGround"
import Navbar from "./components/Navbar"
import About from "./components/About"
function App() {
  return (
  <>
   <div className=""><BackGround/></div>
   <Navbar/>
   <About/>
  </>
  );
}

export default App;
