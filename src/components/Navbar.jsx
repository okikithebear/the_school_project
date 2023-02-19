import {NavLink, useLocation} from 'react-router-dom'

import {useState} from 'react'
import React from 'react'

const Navbar = () => {
    const location = useLocation()
    let Links = [
        {name: "Home", link: "/"},
        {name: "About Us", link: "/about"},
        {name: "Admissions", link: "/admissions"},
        {name: "School Life", link: "/school-life"},
    ];
    const currentLocation = {
        "/about":"About Us.",
        "/home":"Home.",
        "/admissions":"Admissions.",
        "/school-life":"School Life.",
    }
    let [open, setOpen] = useState(false);
    return (
        <>
            <nav
                className='md:flex sticky top-0 z-20 overflow-hidden items-center justify-between bg-darkBlue1 p-4 font-mulish text-white'>
                <div className='font-semibold text-xl cursor-pointer text-greenVariant'>
                    Logo
                </div>

                <div onClick={() => setOpen(!open)}
                     className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center text-white md:w-auto transition-all duration-500 ease-in ${open ? ' ' : 'hidden'} text-white`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl'>
                                <NavLink to={link.link}
                                         className='hover:text-darkgreenVariant'>{link.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>

            </nav>
            {
                location.pathname !== '/' &&
                <section className='py-4 bg-darkgreenVariant'>

                    <div className='px-12 my-auto'>
                        <h4 className="text-darkBlue text-3xl font-extrabold font-mulish">{currentLocation[location.pathname]}</h4>
                    </div>

                </section>
            }
        </>
    )
}


export default Navbar;