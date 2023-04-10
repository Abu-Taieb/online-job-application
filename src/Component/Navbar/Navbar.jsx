import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex py-6 bg-pink-50'>
            <h2 className='text-3xl font-bold'><Link to="/header">Need Jobs</Link></h2>
            <nav className='flex gap-7 justify-center items-center text-2xl font-semibold'>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </nav>
            <button className='btn bg-gradient-to-r from-pink-500 to-purple-500 border-0'>Star Applying</button>
            
        </div>
    );
};

export default Navbar;