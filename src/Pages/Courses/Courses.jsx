import React, { useEffect, useState } from 'react';
import Singlecourse from '../SingleCourse/Singlecourse';

const Courses = () => {
  // console.log(courses)
  const[courses,setCourses] = useState([""]);
  useEffect(()=>{
    fetch('http://localhost:3000/courses')
    .then(res=>res.json())
    .then(data=>setCourses(data))
   },[])
    return (
        <div className="grid grid-cols-3 gap-2">
          {
            courses.map(course=><Singlecourse
            key={course._id}
            course={course}
            >

            </Singlecourse>)
          }

        </div>
    );
};

export default Courses;