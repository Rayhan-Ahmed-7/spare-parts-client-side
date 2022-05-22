import React from 'react';
import logo from '../../images/logo.png';
const Header = () => {
    //FFCB00 = yellow
    return (
        <header className='bg-[#383264] h-20 flex items-center bg-opacity-40 border-b border-b-gray-700'>
            <div className='w-11/12 mx-auto'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>

                </nav>
            </div>
        </header>
    );
};

export default Header;