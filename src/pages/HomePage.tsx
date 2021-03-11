import React, { useState, useRef, useEffect } from "react";
import Header from "../parts/Header";
import Main from "../parts/Main";
import Footer from "../parts/Footer";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default HomePage;
