import React from 'react';
import Hero1 from '../Hero/Hero1'
import heroCourse from '../../images/course-hero.png'

const Course = () => {
    const hero = {
        title: "Getting Started Now with Our Interesting Course",
        subtitle: "Helps you to reach on your goals Faster.",
        subtitleColor: "#5e98fb",
        image: heroCourse,
        description: "This course is designed to help you get started with the basics of programming. You will learn the fundamentals of coding, including syntax, data types, and control structures. By the end of this course, you will have a solid understanding of programming concepts and be able to write simple programs.",
        buttonText: "Learn More",
        buttonClass: "btn btn-outline-primary btn-lg",
        titleColor: "text-primary",
        reverse: false
    };

    return (
        <div className='mt-5 pt-5'>
            <Hero1 hero={hero}></Hero1>
        </div>
    );
};

export default Course;