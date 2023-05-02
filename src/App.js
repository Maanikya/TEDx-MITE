import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages";

import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";
import { homeObjOne } from "./components/AboutUs/Data";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
            {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
            {/* <Navbar toggle={toggle} /> */}
            <Home />
            {/* <AboutUs {...homeObjOne}/> */}
        </BrowserRouter>
    );
}

export default App;
