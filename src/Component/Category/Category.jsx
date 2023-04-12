import React from "react";

const Category = () => {
  return (
    <div>
      {/* Job Category List  */}
      <section className="px-5">
        <div className="text-center py-20">
          <h3 className="text-4xl font-bold py-4">Job Category List</h3>
          <p className="text-2xl py-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-pink-50 rounded-lg p-5">
            <img className="mb-6" src="accounts1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Account & Finance</h2>
              <p className="">300 Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5">
            <img className="mb-6" src="business 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Creative Design</h2>
              <p className="">100+ Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5">
            <img className="mb-6" src="social-media 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Marketing & Sales</h2>
              <p className="">150 Jobs Available</p>
            </div>
          </div>
          <div className="bg-pink-50 rounded-lg p-5">
            <img className="mb-6" src="chip 1.png" alt="" />
            <div className="text-left ">
              <h2 className="text-2xl font-semibold">Engineering Job</h2>
              <p className="">224 Jobs Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
