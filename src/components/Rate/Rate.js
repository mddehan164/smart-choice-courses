import React from 'react';
import './Rate.css';

const Rate = (props) => {
    const {title, description, get, price, features} = props.plan;
    return (
        <div className='border-top border-5 border-primary rounded my-5 col-md-4 custom'>
            <div className='bg-dark text-white p-5'>
                <h4>{title}</h4>
                <p><small>{description}</small></p>
                <p><small>{get}</small></p>
            </div>
            <div className='p-5 row'>
                <h5 className='fs-4'>Starting at {price} per month</h5>
                <p><small>Billed monthly or annually. Cancel anutime</small></p>
                <button className='btn btn-primary'>Try it for free</button>
                <ol className='p-3 m-3 text-primary fs-5'>
                    {
                        features.map((feature, index) => {
                            return (
                                <li key={index}>{feature}</li>
                            );
                        })
                    }
                </ol>
            </div>
        </div>
    );
};

export default Rate;