import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col justify-center max-w-[2560px] mx-auto bg-[rgba(240,240,240,0.8)]">
      {children}
    </div>
  );
};

export default Container;
