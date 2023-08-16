import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/ktworks/KtWorks"
import EducationDetails from "./components/education/EducationDetails"
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <EducationDetails />
       <Portfolio/>
       <Projects />
       <Contact/> 
     </div>
    </div>
  );
}

export default App;
