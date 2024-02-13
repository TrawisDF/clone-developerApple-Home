import React from "react";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className=" m-1 py-[30px]  bg-[rgba(240,240,240,0.8)]">
        <a
          href="#visionOS"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[32px] font-semibold pb-[30px]">visionOS</h3>
          <div className="w-[308px] md:w-[440px] aspect-[auto 440/257]">
            <Image
              src="https://developer.apple.com/home/images/tile-vision-dev/vision-home-large.png?1"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="m-1 py-[30px] bg-[rgba(240,240,240,0.8)]">
        <a
          href="#iOS 17"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[32px] font-semibold pb-[30px]">iOS 17</h3>
          <div className="w-[115.5px] md:w-[165px] aspect-[auto 165 / 330]">
            <Image
              src="https://developer.apple.com/home/images/tile-ios-17/ios-17-large.png?1"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className="m-1 py-[30px] bg-[rgba(240,240,240,0.8)]">
        <a
          href="#iPadOS 17"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[32px] font-semibold pb-[30px]">iPadOS 17</h3>
          <div className="w-[307.3px] aspect-[auto 439/318]">
            <Image
              src="https://developer.apple.com/home/images/tile-ipados-17/ipados-17-b-large.png?1"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className=" m-1 py-[30px]  bg-[rgba(240,240,240,0.8)]">
        <a
          href="#macOS Sonoma"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[32px] font-semibold pb-[30px]">macOS Sonoma</h3>
          <div className="w-[576px] aspect-[auto 576/336]">
            <Image
              src="https://developer.apple.com/home/images/tile-macos-14/macos-14-c-large.png"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className=" m-1 py-[30px]  bg-[rgba(240,240,240,0.8)]">
        <a
          href="#macOS Sonoma"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[35px] font-semibold pb-[30px]">watchOS 10</h3>
          <div className="w-[133.7px] md:w-[191px	]  aspect-[auto 191/319]">
            <Image
              src="https://developer.apple.com/home/images/tile-watchos-10/watchos-10-large.png?1"
              alt=""
            />
          </div>
        </a>
      </div>
      <div className=" m-1 py-[30px]  bg-[rgba(240,240,240,0.8)]">
        <a
          href="#macOS Sonoma"
          className="w-full hi-full flex flex-col items-center justify-center relative"
        >
          <h3 className="text-[35px] font-semibold pb-[30px]">tvOS 17</h3>
          <div className="w-[350px] lg:w-[500px] aspect-[auto 500/279]">
            <Image
              src="https://developer.apple.com/home/images/tile-tvos/tvos-device-b.png"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Products;
