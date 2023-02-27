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
import MyModal from "./components/MyModal";
import {useState} from "react";



const App = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = (showModal) => {
        setShowModal(!showModal)
    }
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <FloatingButton modalActions={{handleModal,showModal}}/>
                <Routes>
                    <Route path='/' element={<Home modalActions={{handleModal,showModal}}/>}/>
                    <Route path='/about/about-us' element={<About/>}/>
                    <Route path='/about/founder' element={<Founder/>}/>
                </Routes>
                <Footer/>
                <MyModal onClose={handleModal} visible={showModal}/>
            </BrowserRouter>
        </>
    );
}

export default App;
