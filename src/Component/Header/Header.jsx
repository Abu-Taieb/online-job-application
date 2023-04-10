import React from "react";

const Header = () => {
  return (
    <>
      {/* Main Banner Section */}
      <section className=" md:flex justify-between items-center pt-9 bg-pink-50">
        <div className="w-1/2 pr-10">
          <h2 className="text-7xl my-4">
            One Step <br /> Closer To Your <br /> Dream Job
          </h2>
          <p className="my-8 text-2xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-4">
            Get Started
          </button>
        </div>
        <div className="w-1/2">
          <img src={"chairman.png"} alt="Image" />
        </div>
      </section>

      {/* Job Category List  */}
      <section className="">
        <div className="text-center py-10">
          <h3 className="text-3xl font-bold ">Job Category List</h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="md:flex">
          <div className="card w-1/4 bg-pink-50 shadow-xl p-6 justify-start">
            <figure>
              <img src="/accounts 1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">Account & Finance</h2>
              <p className=" ">300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src="../../assets/Icons/accounts 1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src="../../assets/Icons/accounts 1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
          <div className="card w-1/4 bg-base-100 shadow-xl">
            <figure>
              <img src="../../assets/Icons/accounts 1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Account & Finance</h2>
              <p>300 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="text-center py-10">
          <h3 className="text-3xl font-bold ">Featured Jobs</h3>
          <p>Explore thousands of job opportunities with all the information you
            need. Its your future</p>
        </div>
      </section>
    </>
  );
};

export default Header;
