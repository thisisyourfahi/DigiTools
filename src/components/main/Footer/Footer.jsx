import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 pt-20">
                <nav>
                    <h3 className='text-4xl font-semibold'>DigiTools</h3>
                    <p>Premium digital tools for creators,<br />professionals, and businesses.<br />Work smarter with our suite of<br />powerful tools.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resourses</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex gap-2'>
                        <a href=""><FaSquareFacebook size={30} /></a>
                        <a href=""><RiInstagramFill size={30} /></a>
                        <a href=""><FaTwitterSquare size={30} /></a>
                    </div>
                </nav>
            </footer>
            <p className='bg-neutral text-neutral-content text-center p-10'>© 2026 Digitools. All rights reserved.</p>
        </div>
    );
};

export default Footer;