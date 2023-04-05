import React from 'react';
import './App.css';
import Footer from './components/Footer';
import {Navbar, AlternateNavbar} from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import FloatingButton from "./components/FloatingButton";
import Founder from "./pages/founder";

import Modal from "./components/Modal";
import {useState} from "react";
import Admissions from "./pages/admissions";
import Gallery from './components/Gallery'
import ScrollToTop from "./components/ScrollToTop";



const App = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = (showModal) => {
        setShowModal(!showModal)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                {/*<AlternateNavbar/>*/}
                <FloatingButton modalActions={{handleModal,showModal}}/>
                <ScrollToTop/>
                <Routes>

                    <Route path='/' element={<Home modalActions={{handleModal,showModal}}/>}/>
                    <Route path='/about/about-us' element={<About/>}/>
                    <Route path='/about/founder' element={<Founder/>}/>
                    <Route path='/admissions' element={<Admissions/>}/>
                    <Route path='/school-life' element={<Gallery/>}/>
                </Routes>
                <Footer/>
                <Modal onClose={handleModal} visible={showModal}/>
            </BrowserRouter>
        </>
    );
}

export default App;
