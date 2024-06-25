import React from "react";

const Page2Content = () => {
  return (
    <div className="px-[7.5vw] mt-[8vw] w-full">
      <div className="flex gap-36 items-start ">
        <div className="w-3/5">
          <h1 className="text-[2vw] leading-[2.5vw] font-regular">
            Helping brands to stand out in the digital era. <br />
            Together we will set the new status quo. No <br />
            nonsense, always on the cutting edge.
          </h1>
        </div>
        <div>
          <p className="text-[1.2vw]">
            The combination of my passion <br />
            for design, code & interaction <br />
            positions me in a unique place in <br />
            the web design world.
          </p>

          <div className="h-52 w-52 mt-20 rounded-full flex items-center justify-center text-white bg-stone-950">
            <h4 className="text-xl">About me</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Content;
