import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Main Banner Section */}
      <section className=" md:flex justify-between items-center pt-9 bg-pink-50">
        <div className="md:w-1/2 md:pr-10 text-center md:text-left">
          <h2 className="text-7xl my-4 text-center md:text-left p-0">
            One Step Closer To Your Dream Job
          </h2>
          <p className="my-8 text-2xl p-0">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className=" btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-4">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 mt-10">
          <img src={"chairman.png"} alt="Image" />
        </div>
      </section>

      {/* Job Category List  */}
      <section className="">
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold py-4">Job Category List</h3>
          <p className="text-2xl py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="md:flex gap-10">
          <div className="md:w-1/4 bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
          <div className="md:w-1/4 bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
          <div className="md:w-1/4 bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
          <div className="md:w-1/4 bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold py-4">Featured Jobs</h3>
          <p className="text-2xl py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
