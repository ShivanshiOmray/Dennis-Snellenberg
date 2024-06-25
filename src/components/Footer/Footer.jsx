import React from "react";

const Footer = () => {
  return (
    <div className="relative w-full h-screen pt-20 pr-[20vw] pl-[20vw] bg-[#1C1D20] text-white">
      <div className="flex gap-2">
        <img
          className="w-[7vw] rounded-full"
          src="https://dennissnellenberg.com/assets/img/DSC07033-Cut-Color-1080.jpg"
          alt=""
        />
        <h1 className="text-[5vw]">Let's work</h1>
      </div>
      <h1 className="text-[5vw] -mt-[2vw]">together</h1>
      <div className=" w-full  mt-16 pt-16 border-t-2 border-zinc-700">
        <button className="border-2 text-xl border-zinc-700 rounded-full py-5 px-8">
          info@dennissnellenberg.com
        </button>
        <button className="border-2 tracking-tighter ml-5 text-xl border-zinc-700 rounded-full py-5 px-8">
          +31 6 27 84 74 30
        </button>
      </div>
      <div className="h-44 w-44 top-[15vw] right-[22vw] absolute bg-blue-500 text-xl rounded-full flex items-center justify-center">
        Get in touch
      </div>
    </div>
  );
};

export default Footer;
