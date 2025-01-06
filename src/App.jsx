import "./App.css";
import AdminPanel from "./components/AdminPanel";
import JobList from "./components/JobList";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [jobs, setJobs] = useState(
    JSON.parse(localStorage.getItem("jobs")) || []
  );

  const addJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="app">
      <Header />
      <Banner />
      <JobList jobs={jobs} />
      <AdminPanel addJob={addJob} />
      <Footer />
    </div>
  );
};
export default App;
