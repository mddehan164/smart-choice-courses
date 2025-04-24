import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = () => {
    const btnClass = {class: 'btn btn-outline-success btn-lg'};
    const navClass = {class: 'nav-link text-light fs-5'};
    return (
        <div className='container-fluid bg-dark w-100'>
            <nav className="navbar">
                <div><img className='w-25' src={logo}alt="" />
                </div>
                <div className='d-flex justify-content-around gap-3'>
                    <button type='button' className={btnClass.class}><a href="/home" className={navClass.class}>Home</a></button>
                    <button type='button' className={btnClass.class}><a href="courses" className={navClass.class}>Courses</a></button>
                    <button type='button' className='btn btn-success btn-lg btn-custom'><a href="sign-up" className={navClass.class}>Signup</a></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;