import React from 'react';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className='bg-[#0f0f24]'>
            <div className='w-11/12 mx-auto'>
                <footer className="footer p-10 text-neutral-content">
                    <div>
                        <img src={logo} alt="" />
                        <p>Spare Parts Ltd.</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">car parts</a>
                        <a className="link link-hover">engine</a>
                        <a className="link link-hover">car tire</a>
                        <a className="link link-hover">brake kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <p className='text-gray-200 text-center pb-4'>Copyright © 2022 - All right reserved by Spare Parts</p>
            </div>
        </div>
    );
};

export default Footer;