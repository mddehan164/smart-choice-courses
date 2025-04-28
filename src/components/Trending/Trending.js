import React from 'react';
import './Trending.css';
import Card from '../Card/Card';
import web from '../../images/trending/web.jpg';
import pythone from '../../images/trending/pythone.jpg';
import data from '../../images/trending/data.jpg';
import blender from '../../images/trending/blender.jpg';
import graphics from '../../images/trending/graphics.jpg';
import ux from '../../images/trending/ux.jpg';
import pm from '../../images/trending/pm.jpg';
import pmp from '../../images/trending/pmp.jpg';
import bi from '../../images/trending/bi.jpg';

const Trending = () => {
    const trendingCoursesDev = [
        {
            id: 1,
            title: 'Web Development',
            description: '14,049,409 learners',
            image: web,
        },
        {
            id: 2,
            title: 'Data Science',
            description: '7,822,240 learners',
            image: pythone,
        },
        {
            id: 3,
            title: 'Data Science',
            description: '47,983,703 learners',
            image: data, 
        },
    ];
    const trendingCoursesDesign = [
        {
            id: 1,
            title: 'Blender',
            description: '2,926,172 learners',
            image: blender,
        },
        {
            id: 2,
            title: 'Graphic Design',
            description: '4,508,149 learners',
            image: graphics,
        },
        {
            id: 3,
            title: 'UX Design',
            description: '2,075,969 learners',
            image: ux, 
        },
    ];
    const trendingCoursesBusiness = [
        {
            id: 1,
            title: 'Project Management Professional(PMP)',
            description: '2,589,447 learners',
            image: pmp,
            btn : false            
        },
        {
            id: 2,
            title: 'Microsoft Power BI',
            description: '4,675,846 learners',
            image: bi,
            btn : false
        },
        {
            id: 3,
            title: 'Project Management',
            description: '4,010,938 learners',
            image: pm, 
            btn : false,
            btnText: 'Enroll Now' 
        },
    ];

    return (
        <div>
            <div className="d-flex justify-content-space-between gap-4 align-items-center flex-wrap my-3">
                <h3 className='w-100'>Development</h3>
                {trendingCoursesDev.map((course) => <Card course={course} key={course.id}></Card>)}
            </div>
            <div className="d-flex justify-content-space-between gap-4 align-items-center flex-wrap my-3">
                <h3 className='w-100'>Design</h3>
                {trendingCoursesDesign.map((course) => <Card course={course} key={course.id}></Card>)}
            </div>
            <div className="d-flex justify-content-space-between gap-4 align-items-center flex-wrap my-3">
                <h3 className='w-100'>Business</h3>
                {trendingCoursesBusiness.map((course) => <Card course={course} key={course.id}></Card>)}
            </div>
        </div>
    );
};

export default Trending;