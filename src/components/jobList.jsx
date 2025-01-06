import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => (
  <div
    id="jobs"
    className="job-list flex justify-center items-center flex-col mx-4 mt-28 gap-8"
  >
    <h1 className="font-inter text-4xl font-bold text-black">
      Latest{" "}
      <span className="text-blue-600 underline font-jakarta font-extrabold">
        Jobs
      </span>
    </h1>
    {jobs.map((job, index) => (
      <JobCard
        key={index}
        logo={job.logo}
        company={job.company}
        title={job.title}
        type={job.type}
        location={job.location}
        email={job.email}
        description={job.description}
      />
    ))}
  </div>
);

export default JobList;
