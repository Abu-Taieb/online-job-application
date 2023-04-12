import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleDetail = () => {
    const singleData = useLoaderData([]);
    console.log(singleData);
    const {description, responsibilities, education_req, experience, salary, title, email, phone, location } = singleData[0];
    return (
        <div className='m-5 py-10  '>
            <h2 className='text-center '>Job Details</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 justify-evenly w-9/12 mx-auto">
                <div className="">
                    <p className='mb-4'><span className='font-bold'>Job Description : </span>{description}</p>
                    <p className='mb-4'><span className='font-bold'>Job Responsibility : </span><br />{responsibilities[0]}. <br /> {responsibilities[1]}. <br /> {responsibilities[2]}. <br /></p>
                    <p className='mb-4'><span className='font-bold'>Education Background : </span>{education_req}</p>
                    <p className='mb-4'><span className='font-bold'>Experience : </span>{experience}</p>
                </div>
                <div className="bg-slate-200 p-5 rounded-lg ">
                    <h3 className='font-bold pb-4'>Job Details</h3>
                    <hr className='border-slate-300 mb-2' />
                    <div className="">
                        <p><span className='font-semibold'>Salary :</span> {salary} {`{ per month }`}</p>
                        <p><span className='font-semibold'>Job Title :</span> {title}</p>
                    </div>
                    <h3 className='font-bold py-4'>Contact Information</h3>
                    <hr className='border-slate-300 mb-2' />
                    <div className="">
                        <p><span className='font-semibold'>Phone :</span> {phone}</p>
                        <p><span className='font-semibold'>Email :</span> {email}</p>
                        <p><span className='font-semibold'>Address :</span> {location}</p>
                    </div>
                    <button className='btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 mt-7 w-full'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleDetail;