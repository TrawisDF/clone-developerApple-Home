import React from "react";

const BuildYourApp = () => {
  return (
    <div className="bg-gradient-to-b from-[#00172b] to-[#0f72c5] mt-2 w-full max-h-[546px]">
      <div className="text-white  pt-[80px] mx-auto text-center max-w-[680px] ">
        <h2 className="text-[40px]">Buid apps. Build your future.</h2>
        <p className="text-[19px] font-normal">
          Whether you’re just entering the workforce or you‘re an experienced
          developer or entrepreneur, take advantage of free resources to gain
          skills that help you succeed in Apple’s growing app economy, which
          provides millions of jobs in technology across the globe.
        </p>
      </div>
      <div>
        <img
          className="w-[1680px] aspect-[auto 2560/376] mx-auto"
          src="https://developer.apple.com/home/images/hero-build-apps/build-apps_2x.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BuildYourApp;
