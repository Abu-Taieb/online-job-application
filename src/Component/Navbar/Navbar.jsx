import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex justify-between px-5 py-5 bg-pink-50'>
            <h2 className='text-3xl font-bold text-left p-0 flex items-center'><Link to="/">Need Jobs</Link></h2>
            <nav className='flex justify-center gap-6 items-center text-2xl font-semibold'>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
                <ActiveLink to="/blog">Blog</ActiveLink>
            </nav>
            <button className='btn bg-gradient-to-r from-pink-500 to-purple-500 border-0'>Star Applying</button>
            
        </div>
    );
};

export default Navbar;