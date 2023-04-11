import React from "react";

const Main = ({job}) => {
  console.log(job);
  return (
    <>
      {/* Main Banner Section */}
      <section className="grid lg:grid-cols-2 items-center pt-9 bg-pink-50">
        <div className=" text-center md:text-left">
          <h2 className="text-7xl my-4 font-bold text-center md:text-left px-5">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-blue-400">Dream Job</span>
          </h2>
          <p className="my-8 text-2xl px-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className=" btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 m-5">
            Get Started
          </button>
        </div>
        <div className=" mt-10">
          <img src={"chairman.png"} alt="Image" />
        </div>
      </section>

      {/* Job Category List  */}
      <section className="px-5">
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold py-4">Job Category List</h3>
          <p className="text-2xl py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="business 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Creative Design</h2>
              <p className="">100+ Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="social-media 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Marketing & Sales</h2>
              <p className="">150 Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5 my-5">
            <img className="mb-6" src="chip 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Engineering Job</h2>
              <p className="">224 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section  */}
      <section className="py-10">
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold py-4">Featured Jobs</h3>
          <p className="text-2xl p-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
          <div className="border rounded-lg p-10">
            <img src="google-1-1 1-1.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Google LLC</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Remote
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
          <div className="border rounded-lg p-10">
            <img src="netflix-4 1.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Netflix</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Onsite
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
          <div className="border rounded-lg p-10">
            <img src="tesla-9 1.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Tesla</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Onsite
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
          <div className="border rounded-lg p-10">
            <img src="google-1-1 1.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Google LLC</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Remote
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
          <div className="border rounded-lg p-10">
            <img src="Group 10021.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Airbnb</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Remote
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
          <div className="border rounded-lg p-10">
            <img src="netflix-4 1.png" alt="" />
            <h4 className="font-bold pt-5 text-2xl">
              Technical Database Engineer
            </h4>
            <h6 className="py-3 font-semibold text-2xl">Netflix</h6>

            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Onsite
              </button>
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                Full Time
              </button>
            </div>

            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5>Dhaka, Bangladesh</h5>
              <h5>Salary: 100K-150K</h5>
            </div>
            <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
              View Details
            </button>
          </div>
        </div>
        <div className="text-center mt-5">
          <button className=" btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 m-5">
            See All Jobs
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;
