import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import SocialLinks from "./pages/SocialLinks";
import Certificate from "./pages/Certificate";
import Blog from "./pages/Blog";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Certificate />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
