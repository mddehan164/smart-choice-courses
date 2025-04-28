import React from 'react';
import './card.css';

const Card = (props) => {
    const { title, description, image, btn ,btnText} = props.course;
    return (
        <div>
            <div className="card" style={{width: '20rem'}} role='button'>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-primary">{title}</h5>
                    <p className="card-text">{description}</p>
                    {btn === true ? <button className="btn btn-primary">{btnText}</button> : null}
                </div>
            </div>
        </div>
    );
};

export default Card;