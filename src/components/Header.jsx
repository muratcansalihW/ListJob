import React from "react";
import settings from "../assets/settings.png";
import user from "../assets/user.png";

function Header() {
  return (
    <>
      <section className="header fixed p-2 py-5 w-full bg-white z-10 shadow-headerShadow">
        <div className="container m-auto">
          <nav className="flex justify-between items-center">
            <h1 className="font-jakarta font-extrabold text-4xl text-blue-600 pr-5">
              JobList
            </h1>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="/"
                  className="font-jakarta font-medium text-black text-xl transition-all hover:border-b-4 hover:border-indigo-500 pb-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#jobs"
                  className="font-jakarta font-medium text-black text-xl transition-all hover:border-b-4 hover:border-indigo-500 pb-1"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#banner"
                  className="font-jakarta font-medium text-black text-xl transition-all hover:border-b-4 hover:border-indigo-500 pb-1"
                >
                  Info
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
