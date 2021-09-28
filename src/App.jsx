import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu"
import "./App.scss"
import { useState } from "react"

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="sections">
                <Intro/>
                <Portfolio/>
                <Works/>
                <Skills/>
                {/* <Contact/> */}
            </div>
        </div>
    );
}

export default App;