import React, { useState } from "react";
import sendBtn from "../assets/send.png";

const AdminPanel = ({ addJob }) => {
  const [job, setJob] = useState({
    logo: "",
    company: "",
    description: "",
    title: "",
    type: "",
    location: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(job); // Parent component’e yeni job gönder
    setJob({
      logo: "",
      company: "",
      description: "",
      title: "",
      type: "",
      location: "",
      email: "",
    }); // Formu temizle
  };
  // flex flex-col items-center justify-center
  return (
    <>
      <div
        id="postJob"
        className="py-5 px-7 max-w-3xl my-28 mx-4 border-2 border-blue-500 shadow-headerShadow md:m-auto md:my-28 md:w-full rounded-lg"
      >
        <h1 className="font-inter font-bold text-4xl text-center text-black  pt-5 pb-10">
          Post a{" "}
          <span className="text-blue-600 underline font-jakarta font-extrabold">
            Job
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="admin-panel mx-auto min-h-60">
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label
              htmlFor="company"
              className="font-inter font-medium text-base"
            >
              Company
            </label>
            <input
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="text"
              name="company"
              value={job.company}
              placeholder="Your company's name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label htmlFor="logo" className="font-inter font-medium text-base">
              Logo
            </label>
            <input
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="text"
              name="logo"
              value={job.logo}
              placeholder="Company logo"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label htmlFor="title" className="font-inter font-medium text-base">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Open position title"
              value={job.title}
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label
              htmlFor="description"
              className="font-inter font-medium text-base"
            >
              Job Description
            </label>
            <textarea
              rows={3}
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              name="description"
              value={job.description}
              placeholder="Tasks, requirements, benefits"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label htmlFor="type" className="font-inter font-medium text-base">
              Type of Contract
            </label>
            <select
              name="type"
              className="col-start-1 shadow-sm row-start-1 font-inter w-full sm:max-w-sm appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              value={job.type}
              onChange={handleChange}
              required
            >
              <option selected>Contract</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label
              htmlFor="location"
              className="font-inter font-medium text-base"
            >
              Location
            </label>
            <input
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              type="text"
              name="location"
              value={job.location}
              placeholder="City"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between p-2">
            <label htmlFor="email" className="font-inter font-medium text-base">
              Email
            </label>
            <input
              type="email"
              className="block w-full shadow-sm sm:max-w-sm font-inter rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              value={job.email}
              name="email"
              placeholder="Your email adress"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full rounded-md py-2 px-4 my-4 text-white font-inter text-center min-w-52 flex items-center justify-center gap-2 transition-all hover:bg-blue-600"
          >
            Post
            <img src={sendBtn} className="max-w-5 animate-bounce" />
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminPanel;
