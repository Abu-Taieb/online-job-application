import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import AppliedJobs from "../AppliedJobs/AppliedJobs";

const Header = ({ job, handleJob }) => {
  const { title, company_logo, company_name, job_category_one, location, salary } = job;
 
  return (
    <div>
      {/* Feature Section  */}
      <section className="p-5 ">
        <div className="">
          <div className="border rounded-lg p-10">
            <img className="h-9" src={company_logo} alt="" />
            <h4 className="font-bold pt-5 text-2xl">{title}</h4>
            <h6 className="py-3 font-semibold text-2xl">{company_name}</h6>
            <div className="py-3">
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3  text-blue-500 font-semibold">
                Onsite
              </button>
              
              <button className="text-2xl border py-2 px-4 rounded-lg my-2 mr-3 text-blue-500 font-semibold">
                {job_category_one}
              </button>
            </div>
            <div className="sm:flex gap-5 py-4 font-semibold text-2xl">
              <h5><FontAwesomeIcon icon={faLocationDot} /> {location}</h5>
              <h5><FontAwesomeIcon icon={faDollarSign} /> Salary : {salary}</h5>
            </div>
            <button onClick={() => handleJob(job)} className="btn bg-gradient-to-r from-pink-500 to-purple-500 border-0 my-3">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
