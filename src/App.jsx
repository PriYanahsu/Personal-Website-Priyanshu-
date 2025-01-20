import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
   <Navbar/>
   <Home/>
   <SocialLinks/>
   <About/>
   <Portfolio/>
   <Skills/>
   <Contact/>
   </div>
  );
}

export default App;
