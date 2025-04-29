import React, { useRef, useState } from 'react';
import Hero1 from '../Hero/Hero1'
import heroCourse from '../../images/course-hero.png'
import Card from '../Card/Card';
import './Course.css';
import Rate from '../Rate/Rate';



const Course = () => {
    // course hero data
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
    // course card data
    const courseCards = [{
        id: 0,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=1',
        category: "Java Script",
    },
    {
        id: 1,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=2',
        category: "Java Script",
    },
    {
        id: 2,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=3',
        category: "Java Script",
    },
    {
        id: 3,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=4',
        category: "Java Script",
    },
    {
        id: 4,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=4',
        category: "Java Script",
    },
    {
        id: 5,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=6',
        category: "Java Script",
    }
    ,
    {
        id: 6,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=7',
        category: "Java Script"
    },
    {
        id: 7,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=8',
        category: "Java Script",
    },
    {
        id: 8,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=9',
        category: "Java Script",
    },
    {
        id: 9,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=10',
        category: "Java Script",
    }
    ,
    {
        id: 10,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=11',
        category: "Java Script",
    },
    {
        id: 11,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=12',
        category: "Java Script",
    },
    {
        id: 12,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=13',
        category: "Java Script",
    },
    {
        id: 13,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=14',
        category: "Java Script",
    },
    {
        id: 14,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=15',
        category: "Java Script",
    },
    {
        id: 15,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=16',
        category: "Java Script",
    },
    {
        id: 16,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=17',
        category: "Java Script",
    },
    {
        id: 17,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=18',
        category: "Java Script",
    },
    {
        id: 18,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=19',
        category: "Java Script",
    },
    {
        id: 19,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=20',
        category: "Java Script",
    },
    {
        id: 20,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=21',
        category: "Python",
    },
    {
        id: 21,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=22',
        category: "C++",
    },
    {
        id: 22,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=23',
        category: "C++",
    },
    {
        id: 23,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=24',
        category: "React",
    },
    {
        id: 24,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=25',
        category: "HTML",
    },
    {
        id: 25,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=26',
        category: "Python",
    },
    {
        id: 26,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=27',
        category: "React",
    },
    {
        id: 27,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=28',
        category: "React",
    },
    {
        id: 28,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=29',
        category: "HTML",
    },
    {
        id: 29,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=30',
        category: "C++",
    },
    {
        id: 30,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=31',
        category: "Python",
    },
    {
        id: 31,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=32',
        category: "HTML",
    },
    {
        id: 32,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=33',
        category: "React",
    },
    {
        id: 33,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=34',
        category: "C++",
    },
    {
        id: 34,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=35',
        category: "C++",
    },
    {
        id: 35,
        title: "Course Title",
        description: "This is a brief description of the course.",
        btn: true,
        btnText: "Enroll Now",
        cImage:'https://picsum.photos/200/250?random=36',
        category: "Python",
    }
];
// handle scroll left and right
const scrollRef = useRef(null);

        const handleScrollLeft = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
            }
        };

        const handleScrollRight = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
            }
        };

        //course tn names
        const btnNames = ['Java Script', 'React', 'HTML', 'Python', 'C++'];

        //btn click handler
        const [selectedCategory, setSelectedCategory] = useState(null);

        const filteredCourses = selectedCategory ? courseCards.filter(course => course.category === selectedCategory) : courseCards;

// plans
        const plans = [
            {
                id:1,
                title: "Personal Plan",
                description: "For you",
                get:'individual',
                price: "$11.00",
                features: [
                    "Access to 12,000+ top Courses",
                    "Certification perp",
                    "Goal-focused recommendations",
                    "AI-powered coding exercises"
                ]
            },
            {
                id:2,
                title: "Business Plan",
                description: "For your team",
                get:'2 to 20 people',
                price: "$99.00",
                features: [
                    "Access to 12,000+ top Courses",
                    "Certification perp",
                    "Goal-focused recommendations",
                    "Analytics and adoption reports"
                ]
            }
        ,
            {
                id:3,
                title: "Enterprise Plan",
                description: "For your organization",
                get:'More than 20 people',
                price: "$999.00",
                features: [
                    "Access to 27,000+ top courses",
                    "Certification perp",
                    "Customizable content",
                    "Advanced analytics and insights"
                ]
            }
        ];

    return (
        <>
        <div className='mt-5 pt-5'>
            <Hero1 hero={hero}></Hero1>
        </div>
        <div className='container mt-5 mb-5 position-relative w-100'>
            <h1>Join the Courses</h1>
            <div className='d-flex gap-3 overflow-hidden py-2'>
                {
                    btnNames.map((btnName, index) => (
                        <button key={index} className={`btn rounded ${selectedCategory === btnName ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setSelectedCategory(btnName)}>{btnName}</button>

                    ))
                }
            </div>
            <div className='d-flex gap-4 overflow-hidden py-2 ' ref={scrollRef}>
                <div className='d-flex justify-content-between w-100 position-absolute top-50 z-index'>
                    <button onClick={handleScrollLeft} className='btn btn-sm btn-outline-primary rounded fs-4' style={{width: '2rem'}}>&laquo;</button>
                    <button onClick={handleScrollRight} className='btn btn-sm btn-outline-primary rounded fs-4' style={{width: '2rem'}}>&raquo;</button>
                </div>
            {
                filteredCourses.map( (card) => <Card key={card.id} course={card}></Card>)
            }
            </div>
        </div>
        <div className="container-fliud bg-light">
        <div className='container mt-5 py-5 '>
            <h1>Visit our Subscriptions and Buy on <span className='text-primary'>Lowest</span> Price</h1>
            <p className='text-muted fs-5'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
            <div className='d-flex align-items-center justify-content-center gap-4'>
            {
                plans.map((plan) => <Rate plan={plan}></Rate>)
            }
            </div>
        </div>
        </div>
        </>
    );
};

export default Course;