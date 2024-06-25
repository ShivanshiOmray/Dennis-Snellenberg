import React from "react";
import "remixicon/fonts/remixicon.css";

const HeroFlex = () => {
  return (
    <div className="flex items-center justify-between absolute top-1/3 w-full">
      <div className="bg-stone-900 w-72 rounded-e-full p-4 justify-between items-center text-white flex">
        <h2 className="text-xl ml-5 leading-none">
          Located <br />
          in the <br />
          Netherlands
        </h2>
        <div className="bg-gray-400 p-3 rounded-full">
          <i className="ri-global-line rotate-12 text-5xl inline-block"></i>
        </div>
      </div>
      <div className="flex flex-col gap-10 mr-32">
        <i className="text-white ri-arrow-right-down-line text-4xl"></i>
        <h4 className="text-white text-4xl font-regular">
          Freelancer <br />
          Designer & Developer
        </h4>
      </div>
    </div>
  );
};

export default HeroFlex;
