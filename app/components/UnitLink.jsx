import React from "react";

const UnitLink = () => {
  return (
    <div className=" text-center pt-[100px] justify-center w-[100%] bg-[rgba(240,240,240,0.8)]">
      <div className=" max-w-[600px] mx-auto">
        <h1 className=" text-5xl font-semibold">Ready, set, submit.</h1>
        <p className=" text-lg mt-7" style={{ fontSize: "27px" }}>
          Learn how to prepare and submit yours apps to the App Store for Apple
          Vision Pro.
        </p>
      </div>
      <img
        className=" mx-auto w-[750px] mt-[70px]"
        src="https://developer.apple.com/home/images/tile-visionos-labs/vision-side_2x.webp"
        alt=""
      />
    </div>
  );
};

export default UnitLink;
