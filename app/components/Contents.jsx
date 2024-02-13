import React from "react";

const Contents = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Top Left*/}
      <div className="col-span-1 relative h-[580px] bg-[rgba(240,240,240,0.8)] border-4 border-white">
        <a href="#" className="relative flex flex-col items-center h-full">
          <Image
            src="https://developer.apple.com/home/images/tile-hello-developer-nobg/feb24-xds/hello-developer-light-medium_2x.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 text-black mt-5 text-center">
            <h2 className="pt-3 text-[40px] font-semibold">Hello Developer</h2>
            <p>
              Your guide to the latest developer activities, stories, and news.
            </p>
          </div>
        </a>
      </div>

      {/* Top Right */}
      <div className="col-span-1 relative h-[580px] border-4 border-white">
        <a href="#" className="relative flex flex-col items-center h-full">
          <Image
            src="https://developer.apple.com/home/images/tile-events-promo/events-coding-medium_2x.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 text-black mt-5 text-center">
            <h2 className="pt-3 text-[35px] lg:text-[40px] font-semibold">
              Meet with Apple Experts
            </h2>
            <p>Explore worldwide activities.</p>
          </div>
        </a>
      </div>

      {/* Bottom Left */}
      <div className="col-span-1 relative h-[580px] border-4 border-white">
        <Image
          src="https://developer.apple.com/home/images/tile-event-asa-2023/w-large_2x.jpg?2"
          alt=""
          className="w-full h-full object-cover"
        />
        <a href="#" className="flex flex-col items-center">
          <div className="absolute top-0 text-black mt-5 text-center">
            <Image
              src="https://developer.apple.com/home/images/tile-event-asa-2023/app-store-awards-2023.svg"
              alt=""
              className=" max-w-[310px] pt-4"
            />
            <p className="text-white">2023</p>
          </div>
        </a>
      </div>
      {/* Bottom Right */}
      <div className="col-span-1 relative h-[580px] bg-[#f0f0f0cc] border-4 border-white">
        <a href="#" className="relative flex flex-col items-center m-1">
          <Image
            src="https://developer.apple.com/home/images/tile-ssc/small_2x.png?2"
            alt=""
            className="w-[516px] h-[490px] md:w-[734px] md:h-[548px] object-cover"
          />
          <div className="absolute top-0 text-black mt-5 text-center mx-auto">
            <h2 className="pt-3 text-[40px] font-semibold">
              Swift Student Challenge
            </h2>
            <p>The future is yours to create.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contents;
