import React from "react";

const DevPrograms = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-600 to-indigo-900 mt-2 w-full pb-[35px]">
      <div className="pt-[80px] my-2">
        <Image
          className="w-[144px] aspect-[auto 144/72] mx-auto"
          src="https://developer.apple.com/app-store/features/images/members.svg"
          alt=""
        />
      </div>
      <div className="text-white  mx-auto text-center max-w-[680px]">
        <h2 className=" text-[40px]">App Developer Program</h2>
        <p className="text-[19px] font-normal">
          Join the Apple Developer Program to reach custommers around the world
          on the App store for iPhone, iPad, Mac, Apple TV, and Apple Watch.
          You'll also get access to beta software, advanced app capabilities,
          extensive beta testing tools, and app analytics.
        </p>
      </div>
    </div>
  );
};

export default DevPrograms;
