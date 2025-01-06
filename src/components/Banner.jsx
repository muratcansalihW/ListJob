import React from "react";

function Banner() {
  return (
    <section
      id="banner"
      className="bg-hero-pattern bg-cover bg-left md:bg-center min-h-full"
    >
      <div className="container m-auto relative">
        <div className="min-h-[100vh] flex justify-center items-center">
          <div className="grid-rows-1">
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold font-jakarta text-center text-gray-950">
              The Best{" "}
              <span className="text-blue-600 underline font-jakarta font-extrabold">
                Tech Jobs
              </span>
              ,<br></br> All in One Place.
            </h1>
            <br></br>
            <p className="font-medium font-jakarta text-center text-xl lg:text-2xl text-gray-700">
              Unlock Your Potential with the Perfect Job.<br></br>
              Join Top Companies Looking for Developers Like You.
            </p>
            <div className="button flex items-center justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
              <a
                href="#postJob"
                className="bg-blue-600 animate-bounce font-inter font-medium text-white rounded-md text-lg transition-all hover:bg-blue-600 px-5 py-3 w-full"
              >
                Post a Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
