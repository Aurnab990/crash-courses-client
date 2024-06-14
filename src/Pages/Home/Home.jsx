import React from 'react';
import Courses from '../Courses/Courses';
import Headers from '../Header/Headers';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData();
    
    return (
        <div>
            <Headers></Headers>
            <Courses courses={courses}></Courses>
        </div>
    );
};

export default Home;