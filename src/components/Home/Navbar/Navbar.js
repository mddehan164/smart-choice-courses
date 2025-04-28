import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.png';

const Navbar = (props) => {
    const btnClass = {class: 'btn btn-outline-primary btn-lg text-light'};;
    console.log(props);
    return (
        <div className='container-fluid bg-dark w-100 fixed-top'>
            <nav className="navbar ">
                <div><img className='w-25' src={logo}alt="" />
                </div>
                <div className='d-flex justify-content-around gap-3'>
                    <button onClick={props.onHomeClick} type='button' className={btnClass.class}>Home</button>
                    <button onClick={props.onCourseClick} type='button' className={btnClass.class}>Courses</button>
                    <button type='button' className='btn btn-primary btn-lg btn-custom'>Signup</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;