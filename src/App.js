import React, {useEffect} from 'react';
import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel';
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



const App = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = (showModal) => {
        setShowModal(!showModal)
    }
    // const galleryImages = [
    //     {
    //       img:  "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //       img:  "https://images.pexels.com/photos/8471799/pexels-photo-8471799.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //       img:  "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //       img:  "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //       img:  "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     },
    //     {
    //       img:  "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
    //     }
    //   ]
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                {/*<AlternateNavbar/>*/}
                <FloatingButton modalActions={{handleModal,showModal}}/>
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
