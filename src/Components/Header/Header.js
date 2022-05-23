import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const [profileOpen,setProfileOpen] = useState(false);
    
    //FFCB00 = yellow
    return (
        <header className='bg-[#383264] h-20 flex items-center bg-opacity-40 border-b border-b-gray-700 backdrop-blur-sm sticky top-0 z-50'>
            <div className='w-11/12 mx-auto flex items-center justify-between relative'>
                <div className="logo">
                    <img className='lg:h-auto h-8' src={logo} alt="logo" />
                </div>
                <div className='lg:hidden block'>
                    <button onClick={()=>{setMenuOpen(!menuOpen)}}>
                        {
                            menuOpen ? 
                            <CgClose className='text-3xl text-white' />
                            :
                            <HiMenuAlt1 className='text-3xl text-white' />
                        }
                    </button>
                </div>
                <ul className={`${menuOpen? 'opacity-100 translate-y-0 scale-100':'opacity-0 -translate-y-20 scale-0'} lg:scale-100 lg:translate-y-0 lg:opacity-100 transition-all duration-300 flex lg:flex-row flex-col items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 text-white lg:static absolute lg:z-0 -z-10 top-[68px] right-0  lg:bg-transparent bg-[#383264] lg:bg-opacity-0 bg-opacity-40 lg:backdrop-blur-0 backdrop-blur-sm lg:w-auto w-44 lg:p-0 p-4 rounded-md`}>
                    <li>
                        <Link to=''>Home</Link>
                    </li>
                    <li>
                        <Link to=''>Car Parts</Link>
                    </li>
                    <li>
                        <Link to=''>Reviews</Link>
                    </li>
                    <li>
                        <Link to=''>Dashboard</Link>
                    </li>
                    <li>
                        <Link to=''>Login</Link>
                    </li>
                    <li className='relative'>
                        <img onClick={()=>setProfileOpen(!profileOpen)} src="https://i.ibb.co/cx5jTVj/dinner5.png" className='h-10 w-10 rounded-full cursor-pointer' alt="profile"/>
                        <div className={`${profileOpen?'opacity-100':'opacity-0'} absolute top-12 right-0 bg-[#383264] bg-opacity-40 backdrop-blur-sm p-4 w-44 rounded-md space-y-4 z-50`}>
                            <h2 className='text-sm'>Rayhan Ahmed</h2>
                            <button className='bg-primary px-2 py-1 rounded-md text-sm'>Log Out</button>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;