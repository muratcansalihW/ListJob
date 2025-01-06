import React, { useState } from "react";
import { motion } from "framer-motion";
import Clock from "../assets/clock.png";
import arrow from "../assets/arrow.png";

const JobCard = ({
  logo,
  company,
  title,
  type,
  location,
  description,
  email,
  clock,
}) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  return (
    <div className="job-card w-full max-w-3xl mt-3 mb-7 rounded-3xl shadow-headerShadow">
      <div className="justify-between flex flex-col md:flex-row items-center py-3 px-5">
        <div className="flex justify-center gap-1 items-center">
          <div>
            <img
              src={logo}
              alt={`${company} logo`}
              className="job-logo w-full max-w-28 m-4 transition-all duration-500 hover:-translate-y-2 drop-shadow-lg"
            />
          </div>
          <div className="m-4 flex flex-col">
            <h3 className="font-inter font-bold text-md text-blue-600 hover:text-slate-950 cursor-pointer transition-all">
              {company}
            </h3>
            <p className="font-inter font-medium text-2xl text-slate-950 hover:text-blue-600 transition-all duration-500 hover:-translate-y-0.5 cursor-pointer">
              {title}
            </p>
            <p className="font-inter font-light text-sm flex items-center gap-2 cursor-pointer bg-blue-600 text-white p-2 rounded-md drop-shadow-sm justify-center mt-2 w-full min-w-[217px]">
              <img src={Clock} className="w-full max-w-5" alt="Clock icon" />
              {type}
            </p>
            <p
              className="flex gap-1 font-inter underline underline-offset-4 font-normal text-black text-base cursor-pointer py-3"
              onClick={toggleDetails}
            >
              More details <img src={arrow} alt="arrow" />
            </p>
          </div>
        </div>
        <div className="m-4 font-inter">
          <p className="font-jakarta font-medium text-sm uppercase text-white bg-yellow-400 px-3 py-2 w-full min-w-32 text-center rounded-md drop-shadow-sm">
            {location}
          </p>
        </div>
        {}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isDetailsVisible
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="font-inter font-normal text-base sm:text-lg px-6 py-5">
          <span className="text-xl sm:text-2xl font-semibold">
            Job description
          </span>
          <br></br>
          <br></br>
          {description}
        </p>
        <br></br>
        <p className="font-inter font-medium text-base sm:text-lg px-6 py-5">
          Email: <span className="underline underline-offset-4">{email}</span>
        </p>
      </motion.div>
    </div>
  );
};

export default JobCard;
