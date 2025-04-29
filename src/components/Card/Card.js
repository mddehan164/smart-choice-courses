import React from 'react';
import './card.css';
import msg from '../../images/msg.jpg';

const Card = (props) => {
    const { title, description, image, btn ,btnText, cImage} = props.course;
    console.log(props);
    return (
        <div>
            <div className={`${btn=== true ? 'card' : 'card pop-card'}`} style={{width: '20rem'}} role='button'>
            <img src={image || cImage ? image || cImage : msg} className="card-img-top  img-thumbnail" alt={title || "Course image"} onError={(e) => { e.target.src = msg }}
/>
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