import React from 'react';

const Blog = () => {
    return (
        <div className='text-center px-5 py-10'>
            <h2 className='text-3xl py-10 font-bold active'>Blog Page</h2>
            <div className="text-justify py-3">
                <h2 className='text-3xl font-semibold'>Query : When you should use context API?</h2>
                <h5 className='text-2xl font-semibold'>Answer : when some data needs to be accessible by many components at different nesting levels.</h5>
            </div>
            <div className="text-justify py-3">
                <h2 className='text-3xl font-semibold'>Query : What is custom Hook?</h2>
                <h5 className='text-2xl font-semibold'>Answer : A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.</h5>
            </div>
            <div className="text-justify py-3">
                <h2 className='text-3xl font-semibold'>Query : What is useRef?</h2>
                <h5 className='text-2xl font-semibold'>Answer : useRef is used to maintain a mutable reference to a value that persists across renders. It returns an object with a current property that can be assigned to and read from.</h5>
            </div>
            <div className="text-justify py-3">
                <h2 className='text-3xl font-semibold'>Query : What is useMemo?</h2>
                <h5 className='text-2xl font-semibold py-2'>Answer : useMemo is used to memoize a value so that it is only recomputed when one of its dependencies changes. It takes a function and an array of dependencies and returns the memoized value of that function.</h5>
            </div>
        </div>
    );
};

export default Blog;