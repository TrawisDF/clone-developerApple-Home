"use client";

import { useState } from "react";

const Navbar = () => {
  const [hambergToggle, setHambergToggle] = useState(false);
  const [hambergMenu, setHambergMenu] = useState("");
  const hambergHandler = () => {
    setHambergToggle(!hambergToggle);
    if (hambergToggle) {
      setHambergMenu("block");
    } else {
      setHambergMenu("hidden");
    }
  };
  return (
    <div className="pd-5 bg-[#e3e1e1] min-w-1024px max-w-[100%] mx-auto sticky top-0 z-20 backdrop-filter backdrop-blur-sm">
      <ul className="justify-between max-w-[980px] mx-auto items-center hidden lg:flex">
        <li>
          <a href="#">
            <img
              style={{ width: "135px", height: "44px" }}
              src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg"
            />
          </a>
        </li>
        <li>
          <a href="#news">News</a>
        </li>
        <li>
          <a href="#sidcover">Discover</a>
        </li>
        <li>
          <a href="#design">Design</a>
        </li>
        <li>
          <a href="#develop">Develop</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
        <li>
          <a href="#account">Account</a>
        </li>
        <li>
          <a href="#search">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='44' viewBox='0 0 16 44'%3E%3Cpath d='M15.27 28.29l-4.06-4.06a6.113 6.113 0 0 0 1.35-3.83c0-3.39-2.76-6.15-6.15-6.15-3.39 0-6.15 2.76-6.15 6.15s2.76 6.15 6.15 6.15c1.43 0 2.75-.5 3.8-1.33l4.06 4.06 1-.99zM6.4 25.33a4.93 4.93 0 0 1-4.92-4.92c0-2.71 2.2-4.92 4.92-4.92s4.92 2.21 4.92 4.92c.01 2.71-2.2 4.92-4.92 4.92z' fill='%23666666'/%3E%3C/svg%3E"
              alt="seach Icon"
            />
          </a>
        </li>
      </ul>
      <div className="flex justify-between mx-10 lg:hidden">
        <button
          onClick={() => {
            hambergHandler();
          }}
          className="lg:hidden text-[#7e7e7e]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          <img
            style={{ width: "135px", height: "44px" }}
            src="https://developer.apple.com/assets/elements/icons/brandmark/apple-developer-brandmark.svg"
          />
        </div>
        <div></div>
      </div>
      <div className={`lg:hidden ${hambergMenu} w-[980px]`}>
        <ul className="p-4 bg-[#f4f0f0] z-20 absolute inset-x-0 }">
          <li>
            <div className="border-b-2 border-[#817c7c] pb-2 flex justify-center">
              <div className="w-full">
                <input type="text" placeholder="Search" className="w-full mx-2 rounded-md bg-[#d7d7d7]"/>
              </div>
            </div>
          </li>
          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#news">News</a>
            </div>
          </li>

          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#sidcover">Discover</a>
            </div>
          </li>

          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#design">Design</a>
            </div>
          </li>

          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#develop">Develop</a>
            </div>
          </li>

          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#support">Support</a>
            </div>
          </li>

          <li>
            <div className="p-2 flex justify-start mx-2 border-b-2">
              <a href="#account">Account</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
