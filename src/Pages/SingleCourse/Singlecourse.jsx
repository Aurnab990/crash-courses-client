import React from 'react';
import { Link } from 'react-router-dom';

const Singlecourse = ({course}) => {
    // console.log(course);
    const {_id,title,price,description,seat,instructor,img} = course;
    console.log(_id)
    return (
        <div>
            <div className=" lg:flex">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-sm md:px-24 lg:px-8 lg:py-20">
      <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <img
          className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
          src={img}
          alt=""
        />
        <a
          href="/"
          aria-label="Play Video"
          className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
        >
          
        </a>
      </div>
      <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
        <h2 className="mb-5 font-sans text-xl text-white font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          {title}
        </h2>
        <p className="mb-5 text-base text-gray-700 md:text-lg">
          {description}
        </p>
        <div className="flex items-center md:justify-center">
          <Link to={`/details/${_id}`}>
          <a
            
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            See Details
          </a>
          
          </Link>
          
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Singlecourse;