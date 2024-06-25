import React from "react";

const HoveringText = (props) => {
  const mouseEntered = () => {
    props.setimageScroll(props.translate);
  };
  return (
    <div
      onMouseEnter={mouseEntered}
      className="hover:px-40 hover:text-gray-400 transition-all px-20 py-10 flex justify-between relative items-center border-t-2"
    >
      <div
        id="overlay"
        className="h-full w-full z-40 absolute top-0 left-0"
      ></div>
      <h1 className="text-8xl uppercase">{props.text}</h1>
      <p className="text-lg">Interaction and development</p>
    </div>
  );
};

export default HoveringText;
