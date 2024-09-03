import React from "react";
import banner from "../assets/banner.png";

function Banner({ img, text }) {
  return (
    <div className="mb-16 flex flex-col after:w-[640px] after:absolute relative after:h-[2px] after:bg-black after:content after:left-[50%] after:bottom-[-32px] after:translate-x-[-50%]">
      <div className={`w-[854px] h-[533px] mx-auto mt-[76px] mb-11 ${img} `}>
        <img src={banner} alt="" className="w-full  " />
      </div>
      <div className={`${text}  `} >
       <div className=" ">
       <h1 className="w-[854px] text-[54px] font-bold text-center mb-8 mx-auto">
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <p className=" text-sm text-center w-[592px] mx-auto">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
       </div>
      </div>
    </div>
  );
}

export default Banner;
