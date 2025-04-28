import React from 'react';
import './Hero1.css';

const Hero1 = (props) => {
    const { title, subtitle, subtitleColor, image, description, buttonText, buttonClass, titleColor, reverse } = props.hero;
    console.log(image);
    return (
      <div className={`${reverse ? 'bg-white' : 'bg-light'}`}>
            <div className={`py-5 container d-flex align-items-center justify-content-between gap-5 ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className={`col-md-6 fs-5 mx-2`}>
                <h1 className={titleColor}>{title}</h1><br />
                <h4 style={{color : subtitleColor}}>{subtitle}</h4>
                <p className={`${reverse ? 'text-gray' : 'text-dark'}`}>{description}</p>
                <button className={buttonClass}>{buttonText}</button>
            </div>
    
            <div className="col-md-6 mx-2">
                {reverse ? (
                   <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={image[0]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={image[1]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={image[2]} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    </div> 
                ) : (
                    
                <img className="w-100" src={image} alt="" />)}
            </div>

            </div>
      </div>
    );
  };
  

export default Hero1;