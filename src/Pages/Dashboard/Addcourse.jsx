import React from 'react';
import { FaBook, FaChalkboardTeacher, FaDollarSign, FaUsers, FaAlignLeft, FaImage } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const Addcourse = () => {
    const {user} = useAuth();
    const email = user?.email;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const instructor = form.instructor.value;
        const price = form.price.value;
        const seat = form.seat.value;
        const description = form.description.value;
        const image = form.imageUrl.value;

        const courseData = {email,title,instructor,price,seat,description,image}
        console.log(courseData);

        fetch('https://crash-courses-server.onrender.com/courses', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(courseData)
        })
        .then(res => res.json())
        .then(data => {
            toast.success("New Course Added");
        })
        .catch(error => {
            console.error('Error:', error);
            toast.error('Failed to add. Please try again.');
        });
    };

    return (
       <div>
        <Toaster/>
        <div className="bg-purple-600 min-h-screen p-8 -mt-14">
            <h1 className="text-5xl font-bold text-center text-white mb-8">Add a Course</h1>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                
                    <div className="mt-4 flex items-center">
                        <FaBook className="text-purple-600 mr-3" />
                        <input
                            className="bg-gray-200 text-black p-4 w-full border border-gray-300 rounded-lg"
                            type="text"
                            name="title"
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <FaChalkboardTeacher className="text-purple-600 mr-3" />
                        <input
                            className="bg-gray-200 text-black  p-4 w-full border border-gray-300 rounded-lg"
                            type="text"
                            name="instructor"
                            placeholder="Instructor Name"
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <FaDollarSign className="text-purple-600 mr-3" />
                        <input
                            className="bg-gray-200 text-black  p-4 w-full border border-gray-300 rounded-lg"
                            type="text"
                            name="price"
                            placeholder="Price"
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <FaUsers className="text-purple-600 mr-3" />
                        <input
                            className="bg-gray-200 text-black  p-4 w-full border border-gray-300 rounded-lg"
                            type="text"
                            name="seat"
                            placeholder="Total Seats"
                            required
                        />
                    </div>
                    <div className="mt-4 flex items-center">
                        <FaAlignLeft className="text-purple-600 mr-3" />
                        <textarea
                            className="bg-gray-200 text-black  p-4 w-full border border-gray-300 rounded-lg"
                            name="description"
                            placeholder="Description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="mt-4 flex items-center">
                        <FaImage className="text-purple-600 mr-3" />
                        <input
                            className="bg-gray-200 text-black  p-4 w-full border border-gray-300 rounded-lg"
                            type="text"
                            name="imageUrl"
                            placeholder="Image URL"
                            required
                        />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
                            type="submit"
                        >
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
       </div>
    );
};

export default Addcourse;
