import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Main from '../Main/Main';

const Blog = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl'>Blog</h2>

            {
                jobs.map(job => <Main 
                key={job.id}
                job={job}
                ></Main> )
            }
        </div>
    );
};

export default Blog;