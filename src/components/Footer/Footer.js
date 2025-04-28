import React from 'react';
import { FaFacebook, FaTwitter, FaSquareInstagram  } from "react-icons/fa6";


const Footer = () => {
    return (
        
        <>
           <footer>
                <div className="container-fluid text-center py-3 bg-dark">
                    <p className="text-light">© 2023 Your Company. All rights reserved.</p>
                    <p className="text-light">Follow us on social media: 
                        <a className=' text-decoration-none fs-3 text-info' href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer"> <FaTwitter/> </a> | 
                        <a className=' text-decoration-none fs-3 text-info' href="https://facebook.com/yourcompany" target="_blank" rel="noopener noreferrer"> <FaFacebook /></a> | 
                        <a className=' text-decoration-none fs-3 text-info' href="https://instagram.com/yourcompany" target="_blank" rel="noopener noreferrer"> <FaSquareInstagram/></a>
                    </p>
                </div>
           </footer>
        </>
    );
};

export default Footer;