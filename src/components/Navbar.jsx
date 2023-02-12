import {NavLink} from 'react-router-dom'

import {useState} from 'react'

const Navbar = () => {
    let Links = [
        {name: "Home", link: "/"},
        {name: "About Us", link: "/about"},
        {name: "Admissions", link: "/admissions"},
        {name: "School Life", link: "/"},
    ];
    let [open, setOpen] = useState(false);
    return (

            <nav className='md:flex sticky top-0 z-20 overflow-hidden items-center justify-between bg-darkBlue1 p-4 font-mulish text-white'>
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
                                         className='hover:text-greenVariant'>{link.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
    )
}



export default Navbar;