import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const{title,price,img,description,seats,instructor} = useLoaderData();
    // console.log(title);
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="lg:flex">
                <div className="lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 lg:h-full"
                        src={img}
                        alt={title}
                    />
                </div>
                <div className="lg:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-900 font-bold text-xl">${price}</span>
                        <span className="text-gray-600">{seats} seats available</span>
                    </div>
                    <div className="mb-4">
                        <span className="text-gray-600">Instructor: {instructor}</span>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-4 font-medium tracking-wide text-white bg-indigo-500 hover:bg-indigo-700 rounded transition duration-200"
                        >
                            Check Out
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;