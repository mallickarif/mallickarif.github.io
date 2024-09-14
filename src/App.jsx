import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./components/style/global.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
       <Navbar />
       <Home />
       <About />
       <Experience />
       <Portfolio />
       <Skills />
       <Contact />
       <Footer />
       <SocialLinks />
      </div>
      </ThemeProvider>
  )
}

export default App;
