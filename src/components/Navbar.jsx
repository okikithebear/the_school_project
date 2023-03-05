import {NavLink, useLocation} from 'react-router-dom'
import {Transition} from "@headlessui/react";

import {useEffect, useState} from 'react'
import React from 'react'

const Navbar = () => {
    const location = useLocation()
    let Links = [
        {name: "Home", link: "/"},
        {name: "About Us", link: "/about/about-us"},
        {name: "Admissions", link: "/admissions"},
        {name: "School Life", link: "/school-life"},
    ];
    const currentLocation = {
        "/about/about-us": "About Us.",
        "/about/founder": "Our Founder.",
        "/home": "Home.",
        "/admissions": "Admissions.",
        "/school-life": "School Life.",
    }
    let [isOpen, setIsOpen] = useState(false);
    let [dropDownOpen, setDropdownOpen] = useState(false);
    let [width, setWidth] = useState(0);
    const toggleOpen = () => {
        // if(isOpen){
        //     setInterval(() => {
        //         setIsOpen(false)
        //     }, 1000);
        // }
        if(width <= 768){
           setIsOpen(!isOpen)
        }

    }
    const toggleDropdown = () => {
        if(width <= 768){

        }
        else{
            setDropdownOpen(!dropDownOpen)
        }
    }
    useEffect(() => {
        if(isOpen){
            setIsOpen(!isOpen)
        }
    },[location.pathname])
    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])
    return (
        <>
            <nav
                className='md:flex sticky top-0 z-20 overflow-hidden items-center justify-between bg-darkBlue p-4 font-mulish text-white'>
                <div className='font-semibold text-xl cursor-pointer text-darkgreenVariant'>
                    Light Workers Academy
                </div>

                <div onClick={() => toggleOpen()}
                     className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={isOpen ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center text-white md:w-auto transition-all duration-1000 ease-in ${isOpen ? ' ' : 'hidden'} text-white`}>
                    {
                        Links.map((link) => (
                            <>
                                {link.name === "About Us" ?
                                    <li key={link.name} className='flex md:ml-8 text-xl'
                                        onMouseLeave={() => setDropdownOpen(false)}
                                        onMouseEnter={() => setDropdownOpen(true)}>
                                        <NavLink to={link.link} className='hover:text-darkgreenVariant'>
                                            {link.name}
                                        </NavLink>
                                        <svg className={"mt-1 ml-1 z-50"} onClick={() => toggleDropdown()}
                                             type="button" id="menu-button" aria-expanded="true"
                                             aria-haspopup="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
                                                fill="#FFFFFF"/>
                                        </svg>
                                        <Transition
                                            className={"fixed"}
                                            show={dropDownOpen}
                                            enter="transition ease-out duration-100 transform"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="transition ease-in duration-100 transform"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <div
                                                className="flex w-56 mt-[2.6em] shadow-xl bg-darkBlue rounded-b ring-1
                                                ring-black ring-opacity-5 divide-y divide-gray-100 text-white font-mulish">
                                                <div className="py-1 w-full">
                                                    <NavLink
                                                        to={"/about/about-us"}
                                                        className="block px-4 py-2 text-sm hover:bg-darkgreenVariant hover:text-white"
                                                    >
                                                        Light Workers Academy
                                                    </NavLink>
                                                    <NavLink
                                                        to="/about/founder"
                                                        className="block px-4 py-2 text-sm  hover:bg-darkgreenVariant hover:text-white"
                                                    >
                                                       Founder
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </Transition>
                                    </li> :
                                    <li key={link.name} className='flex md:ml-8 text-xl' onMouseEnter={() => width >768?"": setIsOpen(false)}>
                                        <NavLink to={link.link} className='hover:text-darkgreenVariant'>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                }
                                </>

                        ))
                    }
                </ul>

            </nav>
            {
                location.pathname !== '/' &&
                <section className='py-4 bg-darkgreenVariant'>

                    <div className='md:px-12 px-4 my-auto'>
                        <h4 className="text-darkBlue text-xl md:text-3xl font-extrabold font-mulish">{currentLocation[location.pathname]}</h4>
                    </div>

                </section>
            }
        </>
    )
}


export default Navbar;