import {NavLink} from 'react-router-dom'

import {useState} from 'react'

const Navbar = () => {
    let Links = [
        {name: "HOME", link: "/"},
        {name: "ABOUT US", link: "/about"},
        {name: "ADMISSIONS", link: "/admissions"},
        {name: "SCHOOL LIFE", link: "/"},
        {name: "PORTAL", link: "/"},
    ];
    let [open, setOpen] = useState(false);
    return (

        <div className='shadow-md w-full fixed top-0 left-0 font-mulish z-50'>
            <div className='md:flex items-center justify-between bg-darkBlue py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>

          <span>

          </span>
                    Logo
                </div>

                <div onClick={() => setOpen(!open)}
                     className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl'>
                                <NavLink to={link.link}
                                         className='text-gray-800 hover:text-red-600 duration-500'>{link.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar