import React from 'react';
import {Routes , Route} from "react-router-dom";
import Navbar from "./components/global/navbar.jsx";
import Samiti from "./components/samiti.jsx";
import Acharya from "./components/acharya.jsx";
import Adhyaksh from "./components/adhyaksh.jsx";

function App() {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Samiti />} />
                <Route path="/acharya" element={<Acharya />} />
                <Route path="/adhyaksh" element={<Adhyaksh />} />
            </Routes>
        </>
    );
}

export default App;