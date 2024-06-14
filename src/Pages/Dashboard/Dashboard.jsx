import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaBook, FaPlus, FaArrowLeft } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen bg-purple-600">
            <div className="col-span-2 bg-gray-800 text-white p-8 sticky top-0 h-screen">
                <ul className="space-y-6">
                    <li className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        <FaHome className="mr-3" />
                        <Link to="home" className="w-full">Dashboard</Link>
                    </li>
                    <li className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        <FaBook className="mr-3" />
                        <Link to="manage-course" className="w-full">Manage Courses</Link>
                    </li>
                    <li className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        <FaPlus className="mr-3" />
                        <Link to="add-course" className="w-full">Add Courses</Link>
                    </li>
                    <li className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
                        <FaArrowLeft className="mr-3" />
                        <Link to="/" className="w-full">Home</Link>
                    </li>
                </ul>
            </div>
            <div className="col-span-10 p-20">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
