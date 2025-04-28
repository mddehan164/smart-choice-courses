import React from 'react';
import './Achievements.css';
import { PiStudentFill } from "react-icons/pi";


const Achievements = (props) => {
    console.log(props);
    const {name, profession, image, description} = props.achievement;
    return (
        <div className="col-md-3 border-4 border-primary rounded border-top p-4 box-shadow m-4">
                    <h2><PiStudentFill className='fs-1 border border-primary p-2 rounded-circle'/></h2>
                    <p className='descrip'><small>{description}</small></p>
                    <div className='d-flex align-items-start justify-content-space-between my-5'>
                        <img className='w-50 rounded-circle border border-2 border-primary col-md-6' src={image} alt="" />
                        <div className='col-md-6 mx-4 profession'>
                            <p><strong>{name}</strong></p>
                            <p><small>{profession}</small></p>
                        </div>
                    </div>

                    <a href="/history" className='text-decoration-none'>View full story</a>
        </div>
    );
};

export default Achievements;