import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        toast.success('logedOut successfully.');
    }
    return (
        <header className={`bg-[#110e25] h-20 flex items-center backdrop-blur-md sticky top-0 z-50`}>
            <div className='w-11/12 mx-auto flex items-center justify-between relative'>
                <Link to='/'>
                    <img className='lg:h-auto h-10' src={logo} alt="logo" />
                </Link>
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
                <ul className={`${menuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-0'} lg:scale-100 lg:translate-y-0 lg:opacity-100 transition-all duration-300 flex lg:flex-row flex-col items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 text-white lg:static absolute lg:z-0 -z-10 top-[68px] right-0  lg:bg-transparent bg-[#110e25] lg:bg-opacity-0 bg-opacity-90 lg:backdrop-blur-0 backdrop-blur-lg lg:w-auto w-44 lg:p-0 p-4 rounded-md lg:shadow-none shadow-cShadow`}>
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
                            to='/myPortfolio'
                            className={({ isActive }) => (isActive ? 'nav-item' : ''
                            )}
                        >
                            My Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blogs'
                            className={({ isActive }) => (isActive ? 'nav-item' : ''
                            )}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    {user && <li>
                        <NavLink
                            to='/dashboard'
                            className={({ isActive }) => (isActive ? 'nav-item' : ''
                            )}
                        >
                            Dashboard
                        </NavLink>
                    </li>}
                    {
                        user ?
                            <li className='relative'>
                                <img onClick={() => setProfileOpen(!profileOpen)} src={user.photoURL} className='h-10 w-10 rounded-full cursor-pointer' alt="profile" />
                                {
                                    profileOpen && <div className={`opacity-100 absolute top-12 right-0 bg-[#110e25] bg-opacity-90 backdrop-blur-sm p-4 w-44 rounded-md space-y-4 z-50 shadow-cShadow`}>
                                        <h2 className='text-sm'>{user?.displayName}</h2>
                                        <button onClick={() => logOut()} className='bg-primary px-2 py-1 rounded-md text-sm'>Log Out</button>
                                    </div>
                                }
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