import React from "react";

const Banner = () => {
  return (
    <div>
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
    </div>
  );
};

export default Banner;
