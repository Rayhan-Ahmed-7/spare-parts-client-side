import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';
const Header = ({opacity}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [user] = useAuthState(auth);
    
    const logOut = ()=>{
        signOut(auth);
    }
    return (
        <header className={`bg-[#383264] h-20 flex items-center ${opacity} backdrop-blur-md sticky top-0 z-50`}>
            <div className='w-11/12 mx-auto flex items-center justify-between relative'>
                <div className="logo">
                    <img className='lg:h-auto h-8' src={logo} alt="logo" />
                </div>
                <div className='lg:hidden block'>
                    <button onClick={() => { setMenuOpen(!menuOpen) }}>
                        {
                            menuOpen ?
                                <CgClose className='text-3xl text-white' />
                                :
                                <HiMenuAlt1 className='text-3xl text-white' />
                        }
                    </button>
                </div>
                <ul className={`${menuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-0'} lg:scale-100 lg:translate-y-0 lg:opacity-100 transition-all duration-300 flex lg:flex-row flex-col items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 text-white lg:static absolute lg:z-0 -z-10 top-[68px] right-0  lg:bg-transparent bg-[#383264] lg:bg-opacity-0 ${opacity} lg:backdrop-blur-0 backdrop-blur-lg lg:w-auto w-44 lg:p-0 p-4 rounded-md lg:shadow-none shadow-cShadow`}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'nav-item' : ''
                            )}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'nav-item' : ''
                            )}
                        >
                            Car Parts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/review'
                            className={({ isActive }) => (isActive ? 'nav-item':''
                            )}
                        >
                            Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/dashboard'
                            className={({ isActive }) => (isActive ? 'nav-item':''
                            )}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    {
                        user ?
                            <li className='relative'>
                                <img onClick={() => setProfileOpen(!profileOpen)} src={user.photoURL} className='h-10 w-10 rounded-full cursor-pointer' alt="profile" />
                                <div className={`${profileOpen ? 'opacity-100' : 'opacity-0'} absolute top-12 right-0 bg-[#383264] ${opacity} backdrop-blur-sm p-4 w-44 rounded-md space-y-4 z-50 shadow-cShadow`}>
                                    <h2 className='text-sm'>Rayhan Ahmed</h2>
                                    <button onClick={()=>logOut()} className='bg-primary px-2 py-1 rounded-md text-sm'>Log Out</button>
                                </div>
                            </li>
                            :
                            <li>
                                <NavLink
                                    to='/login'
                                    className={({ isActive }) => (isActive ? 'nav-item' : ""
                                    )}
                                >
                                    Login
                                </NavLink>
                            </li>
                    }
                </ul>
            </div>
        </header>
    );
};

export default Header;