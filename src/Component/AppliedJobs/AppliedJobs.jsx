import React from "react";
import JobDetails from "../JobDetails/JobDetails";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faDollarSign,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const AppliedJobs = () => {
  const dataAll = useLoaderData();
  return (
    <div className="appliedJobs">
      <div className="mx-5">
        <ul className="btn bg-slate-200 text-black hover:text-white border-0 my-3">
          Filter By
          <FontAwesomeIcon icon={faAngleDown} />
        </ul>
      </div>
      {dataAll.map((data) => (
        <JobDetails key={data.id} data={data}></JobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
