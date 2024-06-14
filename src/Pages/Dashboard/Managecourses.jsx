import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Managecourses = () => {
    const {user} = useAuth();
    const email = user?.email;
    const [courses, setCourses] = useState(['']);

    useEffect(()=>{
        fetch('https://crash-courses-server.onrender.com/courses')
        .then(res=>res.json())
        .then(data=>{
            const filteredCourses = data.filter(course => course.email === email);
                setCourses(filteredCourses);
        })
        .catch(error => console.error('Error fetching courses:', error));
    },[email]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to Delete?");
        if (proceed) {
            const url = `https://crash-courses-server.onrender.com/courses/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remainingCourses = courses.filter(course => course._id !== id);
                    setCourses(remainingCourses);
                });
        }
    };
    return (
        <div className="-mt-14">
            <h1 className="font-semibold text-gray-300">Your added Courses:</h1>
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            {courses.length > 0 ? (
                courses.map(course => (
                    <div key={course._id} className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto mb-4">
                        <div className="relative lg:w-1/2">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="object-cover w-full lg:absolute h-32 lg:h-full"
                            />
                            <svg
                                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                                viewBox="0 0 20 104"
                                fill="currentColor"
                            >
                                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center p-4 bg-white lg:p-6 lg:pl-8 lg:w-1/2">
                            <div>
                                <p className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    {course.title}
                                </p>
                            </div>
                            <h5 className="mb-2 text-2xl text-black font-extrabold leading-none sm:text-3xl">
                                {course.instructor}
                            </h5>
                            <p className="mb-3 text-gray-800">
                                <span className="font-bold">{course.description}</span>
                            </p>
                            <div className="mb-3 text-gray-600">
                                <p className="mb-1"><span className="font-bold">Price:</span> ${course.price}</p>
                                <p><span className="font-bold">Total Seats Available:</span> {course.seat}</p>
                            </div>
                            
                            <div className="flex space-x-4">
                                <Link to={`update/${course._id}`}>
                                <button
                                
                                    type="button"
                                    className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 2.293a1 1 0 00-1.414 0L8 10.586V13h2.414l7.879-7.879a1 1 0 000-1.414l-1-1zm-7.586 8.707H8v-1.707l6.586-6.586 1.707 1.707L9.707 11zM3 6h3V4H3v2zm4 2V5.414l1.293-1.293 6.586 6.586-1.293 1.293H7zm-2 4h2v2H3v-2zm0 4h3v-2H3v2z" />
                                    </svg>
                                    Update
                                </button>
                                </Link>
                                <button
                                onClick={()=>handleDelete(course._id)}
                                    type="button"
                                    className="inline-flex items-center justify-center h-10 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6 2a1 1 0 00-1 1v1H3.5A1.5 1.5 0 002 5.5V6h16v-.5A1.5 1.5 0 0016.5 4H15V3a1 1 0 00-1-1H6zm2 3V4h4v1H8zm1 4a1 1 0 00-1 1v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1H9zm-5 2a1 1 0 011-1h1v5H4v-5zM16 8a1 1 0 011 1v5h-2v-5h1z" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No courses available</p>
            )}
        </div>
    </div>
    );
};

export default Managecourses;
