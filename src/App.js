import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Register from "./pages/Register";
import Test from "./pages/Test";

import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* <Home /> */}
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
