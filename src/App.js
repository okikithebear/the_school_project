import './App.css';
import BootstrapCarousel from './components/BootstrapCarousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
    return (
        <>
            <BrowserRouter>
                <Navbar/>

                

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
