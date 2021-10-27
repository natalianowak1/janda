import React from "react";
import "./Main.css";
import About from "../components/About/About";
import Clients from "../components/Clients/Clients";
import Contact from "../components/Contact/Contact";
import Specs from "../components/Specs/Specs";
import Home from "../components/Home/Home";

const Main = () => {
    return(
        <div className="main">
            <Home/>
            <About/>
            <Specs/>
            <Clients/>
            <Contact/>
        </div>
    );
};

export default Main;