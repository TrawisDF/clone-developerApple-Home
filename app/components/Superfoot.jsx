"use client";
import React, { useState } from "react";

const Superfoot = () => {
  const [langTog, setLangTog] = useState(false);
  const [eng, setEng] = useState("English");
  const langSelection = () => {
    setLangTog(!langTog);
  };
  const langToggle = (lang) => {
    setEng(lang);
    setLangTog(false);
  };
  return (
    <div className="max-w-[746px] flex flex-col my-10 mx-auto w-full text-[#86868b] text-[12px] px-2">
      <div className="w-full  border-b-2 pb-2 flex justify-between">
        <div>
          <p>
            Get the{" "}
            <span className="text-[#06c]">
              <a href="#">Apple Developer app.</a>
            </span>
          </p>
        </div>
        <div>
          <button className="">Somebutton</button>
        </div>
      </div>
      <div className="w-full flex flex-wrap relative pt-2">
        <div>
          Copyright © 2024{" "}
          <a className="hover:underline" href="">
            Apple Inc.
          </a>{" "}
          All rights reserved
        </div>
        <div className="text-black">
          <a href="" className="pr-2 md:px-2 hover:underline">
            Terms of use
          </a>
          <a href="" className="border-x-2 px-2 border-black hover:underline">
            Privacy Policy
          </a>
          <a href="" className="px-2 hover:underline">
            Agreements and Guidelines
          </a>
        </div>
        <div className="absolute top-0 right-0">
          <button
            className="p-2 flex items-center"
            onClick={() => {
              langSelection();
            }}
            type="button"
          >
            {eng}{" "}
            <span>
              <img
                src="/dropdown.png"
                className={`w-3 h-3 ${langTog ? "rotate-180" : null}`}
                alt="none"
              />
            </span>
          </button>
          {langTog && (
            <div
              id="dropdownDelay"
              className="absolute bottom-full left-0 w-full shadow-md rounded-lg z-10"
            >
              <ul className="bg-white">
                <li className="hover:text-white hover:bg-[#06c] rounded-lg">
                  <button
                    href=""
                    className="w-full h-full"
                    onClick={() => {
                      langToggle("English");
                    }}
                  >
                    English
                  </button>
                </li>
                <li className="hover:text-white hover:bg-[#06c] rounded-lg">
                  <button
                    href=""
                    className="w-full h-full"
                    onClick={() => {
                      langToggle("Thai");
                    }}
                  >
                    Thai
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Superfoot;
