import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Certificate from "./components/Certificate";



function App() {
  return (
    <div>
   <Navbar/>
   <Home/>
   <SocialLinks/>
   <About/>
   <Portfolio/>
   <Skills/>
   <Certificate/>
   <Contact/>
   </div>
  );
}

export default App;
