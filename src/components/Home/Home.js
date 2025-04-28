import React from 'react';
import Hero1 from '../Hero/Hero1';
import image from '../../images/hero1.png';
import heroCarousel1 from '../../images/hero-carousel/hero-carousel-1.jpg';
import heroCarousel2 from '../../images/hero-carousel/hero-carousel-2.jpg';
import heroCarousel3 from '../../images/hero-carousel/hero-carousel-3.jpg';
import Achievements from '../Achievements/Achievements';
import achievement1 from '../../images/achievements/achievement-1.jpg';
import achievement2 from '../../images/achievements/achievement-2.jpg';
import achievement3 from '../../images/achievements/achievement-3.jpg';
import Trending from '../Trending/Trending';
import Hero3 from '../../images/hero3.png';
import './Home.css';


// hero component to display the hero section and achievements section
const Home = () => {
    const heroImages = [heroCarousel1, heroCarousel2, heroCarousel3];
    const heros = [{
        id: 1,
        title: 'Build Your Career Now',
        titleColor: 'fw-bold text-primary',
        subtitle: 'Learn from the best instructors in the industry',
        subtitleColor: '#38AAE3',
        image: image,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo? Hic omnis repudiandae quidem molestias doloribus aliquam, quod beatae repellendus vero quae adipisci expedita eos magnam nemo similique magni recusandae consequatur, amet suscipit quam id totam placeat veniam eligendi! Praesentium?',
        buttonText: 'Enroll now',
        buttonClass: 'btn btn-outline-primary btn-animation btn-lg fw-bold',
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

// achievements data to display the achievements section
    const achievements = [
        {
            
            id: 1,
            name: 'John Doe',
            profession: 'Technical co-Founder, CEO at Dimensional',
            image: achievement1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo? Hic omnis repudiandae quidem molestias doloribus aliquam, quod beatae repellendus vero quae.'
        },
        {
            id: 2,
            name: 'Alex Samantha',
            profession: 'Partner Account Manager at Amazon Web Services',
            image: achievement2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo? Hic omnis repudiandae quidem molestias doloribus aliquam, quod beatae repellendus vero quae adipisci expedita eos magnam.'
        },
        {
            id: 3,
            name: 'William A. Wachlin',
            profession: 'Head of Capability Development, North America at Publicis Sapient',
            image: achievement3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati vitae enim amet eligendi fuga culpa architecto modi praesentium nemo? Hic omnis repudiandae quidem molestias doloribus .'
        }
    ]

    // hero component to display the hero section and achievements section
    const hero3 = [{
        id: 1,
        title: 'Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling',
        titleColor: 'fw-bold text-primary',
        subtitle: `93% of employees say they are more likely to stay with their employer because of the training and development opportunities they receive.`,
        subtitleColor: '#38AAE3',
        image: Hero3,
        buttonText: 'Get Full Story',
        buttonClass: 'btn btn-outline-primary btn-lg fw-bold mt-3',
    }]
    return (<>
        <div className='w-100 mt-5 pt-5'>
            {heros.map((hero)=> <Hero1 hero={hero} key={hero.id}></Hero1>)}
        </div>
        <div className='container-fluid bg-light py-5'>
            <div className="container py-1">
                <h1>See What others are Achieving by <span className='text-primary'>Learning</span></h1>
                <div className="row py-2">
                    {achievements.map(achievement => <Achievements achievement={achievement} key={achievement.id}></Achievements>)}
                </div>
            </div>
        </div>
        <div className='container py-5'>
            <h1>Trending <span className='text-primary'>Now</span></h1>
            <hr />
            <Trending></Trending>
        </div>
        <div>
            {
                hero3.map((hero) => <Hero1 hero={hero} key={hero.id}></Hero1>)
            }
        </div>
        </>
    );
};

export default Home;