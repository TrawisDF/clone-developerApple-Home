import React from "react";

const PlatForm = () => {
  return (
    <div className="bg-gradient-to-b from-[#2e3e58] to-[#21283c] mt-2 w-full">
      <div className="text-white  pt-[80px] mx-auto text-center max-w-[680px]">
        <h2 className="text-[40px]">New to Apple platforms?</h2>
        <p className="text-[19px] font-normal">
          Get familiar with the tools and technologies you’ll use to build apps
          and games. The Apple development ecosystem provides everything you
          need to bring incredible experiences to people around the world.
        </p>
      </div>
      <div className=" mx-auto pt-[30px]">
        <ul className="mx-auto grid grid-cols-3 lg:grid-cols-6 pb-[30px] max-w-[680px]">
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-ios-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">iOS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-ipados-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">iPadOS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-macos-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">macOS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-tvos-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">tvOS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-visionos-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">visionOS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div className="flex flex-col text-center justify-center">
                <Image
                  src="https://developer.apple.com/assets/elements/icons/platforms/icon-watchos-i.svg"
                  alt=""
                  className="w-[50px] h-[50px] mx-auto"
                />
                <span className="text-white">watchOS</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlatForm;
