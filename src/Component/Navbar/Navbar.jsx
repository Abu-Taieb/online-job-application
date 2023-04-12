import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='md:flex justify-center lg:justify-between px-5 py-5 bg-pink-50'>
            <h2 className='text-3xl font-bold text-center md:text-left p-0 md:flex items-center'><Link to="/">Need Jobs</Link></h2>
            <nav className='flex justify-center gap-4 mx-3 items-center md:text-2xl font-semibold'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
            <div className="text-center my-3">
            <button className='btn btn-sm md:btn-md bg-gradient-to-r from-pink-500 to-purple-500 border-0 '>Star Applying</button>
            </div>
            
        </div>
    );
};

export default Navbar;