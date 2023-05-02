import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages";

import "./App.css";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
}

export default App;
