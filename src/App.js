import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Register from "./pages/Register";

import "./App.css";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* <Home /> */}
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
