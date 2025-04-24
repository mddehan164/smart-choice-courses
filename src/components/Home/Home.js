import React from 'react';
import Hero1 from '../Hero/Hero1';
import image from '../../images/hero1.png';
import heroCarousel1 from '../../images/hero-carousel/hero-carousel-1.jpg';
import heroCarousel2 from '../../images/hero-carousel/hero-carousel-2.jpg';
import heroCarousel3 from '../../images/hero-carousel/hero-carousel-3.jpg';
import Achievements from '../Achievements/Achievements';


const Home = () => {
    const heroImages = [heroCarousel1, heroCarousel2, heroCarousel3];
    const heros = [{
        id: 1,
        title: 'Build Your Career Now',
        titleColor: 'fw-bold text-success',
        subtitle: 'Learn from the best instructors in the industry',
        subtitleColor: '#148A61',
        image: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo? Hic omnis repudiandae quidem molestias doloribus aliquam, quod beatae repellendus vero quae adipisci expedita eos magnam nemo similique magni recusandae consequatur, amet suscipit quam id totam placeat veniam eligendi! Praesentium?',
        buttonText: 'Enroll now',
        buttonClass: 'btn btn-outline-success btn-animation btn-lg fw-bold',
    },
    {
        id: 2,
        title: 'Carier Making with Learning',
        titleColor: 'fw-bold text-danger',
        subtitle: 'Learn 100+ courses from the best instructors',
        subtitleColor: '#EE5F43',
        image: heroImages,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo',
        buttonText: 'Enroll now',
        reverse: true,
        buttonClass: 'btn btn-outline-danger btn-lg fw-bold btn-animation',
    }
]
    return (<>
        <div className='w-100'>
            {heros.map((hero)=> <Hero1 hero={hero} key={hero.id}></Hero1>)}
        </div>
        <div className='container-fluid bg-light py-5'>
            <Achievements></Achievements>
        </div>
        </>
    );
};

export default Home;