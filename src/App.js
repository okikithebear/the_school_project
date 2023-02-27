import React, {useEffect} from 'react';
import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FloatingButton from "./components/FloatingButton";
import Founder from "./pages/founder";



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <FloatingButton/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about/about-us' element={<About/>}/>
                    <Route path='/about/founder' element={<Founder/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
