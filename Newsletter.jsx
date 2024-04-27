import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";
import WorkExperience from "../Sidebar/WorkExperience";
import EmploymentType from "../Sidebar/EmploymentType";
import JobPostingData from "../Sidebar/JobPostingData";

const Newsletter = ({ handleChange }) => {
  return (
    <div>
      <div className="space-y-5">
        <h3 className="text-lg font-bold mb-2">Job Filters</h3>

        <WorkExperience handleChange={handleChange} />
        <EmploymentType handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Newsletter;
