import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const JobDetails = ({ data }) => {
  const {
    company_logo,
    title,
    company_name,
    location,
    salary,
    job_category_one,
  } = data;
  return (
    <div>
      <div className="border flex gap-6 space-x-10 items-center rounded-lg p-4 m-5">
        {/* left  */}
        <div className="w-1/5 rounded-lg p-5">
          <img className="" src={company_logo} alt="" />
        </div>
        <div className="w-3/5">
          <h4 className="font-bold text-2xl">{title}</h4>
          <h6 className=" font-semibold text-2xl">{company_name}</h6>
          <div className="">
            <button className="text-2xl border py-1 px-3 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
              Onsite
            </button>

            <button className="text-2xl border py-1 px-3 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
              {job_category_one}
            </button>
          </div>
          <div className="sm:flex gap-5 font-semibold text-2xl">
            <h5>
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </h5>
            <h5>
              <FontAwesomeIcon icon={faDollarSign} /> Salary : {salary}
            </h5>
          </div>
        </div>
        <div className="w-1/5">
          <button className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">
            <Link to="/singleDetail" key={data.id} data={data}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
