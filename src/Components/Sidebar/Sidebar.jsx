import React from 'react';

const Sidebar = () => {
    return (
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Your Profile</a></li>
                        <li><a>Add Courses</a></li>
                        <li><a>Manage Courses</a></li>
                    </ul>

                </div>
        
        
    );
};

export default Sidebar;