import React from "react";

const Subfooter = () => {
  return (
    <div className=" bg-[rgba(240,240,240,0.8)] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-[980px]">
        <div className="flex flex-col justify-start text-center group hover:pointer-events-auto mt-10 px-5 md:px-7">
          <a href="#">
            <div className="flex justify-center">
              <img
                className="w-[50px] h-[50px]"
                src="https://developer.apple.com/assets/elements/icons/wwdr-unified/download-c.svg"
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[200px]">
              <h3 className="py-4 font-semibold">Downloads</h3>
              <p>
                Get the latest SDKs and beta operating systes for all Apple
                platforms.
              </p>
              <div className="my-4">
                <p className="text-[#0066CC] group-hover:underline">
                  Download resources{" >"}
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Another */}
        <div className="flex flex-col justify-start text-center group hover:pointer-events-auto mt-10">
          <a href="#">
            <div className="flex justify-center">
              <img
                className="w-[50px] h-[50px]"
                src="https://developer.apple.com/assets/elements/icons/wwdr-unified/documentation-c.svg"
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[200px] ">
              <h3 className="py-4 font-semibold">Documentations</h3>
              <p>
                Browse the latest docdumentation including API reference,
                articles, and sample code.
              </p>
              <div className="my-4">
                <p className="text-[#0066CC] group-hover:underline">
                  Read documentation{" >"}
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Another */}
        <div className="flex flex-col justify-start text-center group hover:pointer-events-auto mt-10">
          <a href="#">
            <div className="flex justify-center">
              <img
                className="w-[50px] h-[50px]"
                src="https://developer.apple.com/assets/elements/icons/wwdr-unified/play-c.svg"
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[200px] ">
              <h3 className="py-4 font-semibold">Videos</h3>
              <p>
                Learn about the latest technologies presented at Apple developer
                events.
              </p>
              <div className="my-4">
                <p className="text-[#0066CC] group-hover:underline">
                  Watch videos{" >"}
                </p>
              </div>
            </div>
          </a>
        </div>
        {/* Another */}
        <div className="flex flex-col justify-start text-center group hover:pointer-events-auto mt-10">
          <a href="#">
            <div className="flex justify-center">
              <img
                className="w-[50px] h-[50px]"
                src="https://developer.apple.com/assets/elements/icons/wwdr-unified/forum-c.svg"
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[200px] ">
              <h3 className="py-4 font-semibold">Videos</h3>
              <p>
                Ask questions and discuss development topics with Apple
                engineers and other developers.
              </p>
              <div className="my-4">
                <p className="text-[#0066CC] group-hover:underline">
                  View forums{" >"}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
