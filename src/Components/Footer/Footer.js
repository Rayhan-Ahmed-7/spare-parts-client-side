import React from 'react';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <div className='bg-[#0f0f24]'>
            <div className='w-11/12 mx-auto'>
                <footer class="footer p-10 text-neutral-content">
                    <div>
                        <img src={logo} alt="" />
                        <p>ACME Industries Ltd.</p>
                    </div>
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span class="footer-title">Company</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Contact</a>
                        <a class="link link-hover">Jobs</a>
                        <a class="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span class="footer-title">Legal</span>
                        <a class="link link-hover">Terms of use</a>
                        <a class="link link-hover">Privacy policy</a>
                        <a class="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <p className='text-gray-200 text-center pb-4'>Copyright © 2022 - All right reserved by Spare Parts</p>
            </div>
        </div>
    );
};

export default Footer;