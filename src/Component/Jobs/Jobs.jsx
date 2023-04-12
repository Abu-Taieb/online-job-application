import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Jobs = () => {
  const jobs = useLoaderData();
  const [jobData, setJobData] = useState([]);
  const handleJob = job => {
    const newJob = [...jobData, job];
    setJobData(newJob);
  };

  return (
    <div>
      <div className="text-center py-20">
        <h3 className="text-4xl font-bold py-4">Featured Jobs</h3>
        <p className="text-2xl p-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {jobs.map((job) => (
          <Header key={job.id} job={job} handleJob={handleJob}></Header>
        ))}
      </div>

      {/* <AppliedJobs jobData={jobData}></AppliedJobs> */}

      <div className="text-center mt-5">
        <button className=" btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 m-5">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Jobs;
