import React from "react";
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import art3 from "../assets/art3.png";
import art4 from "../assets/art4.png";


function Articles({width}) {
  return (
    <div>
      
      <div className={`${width} mx-auto flex flex-wrap gap-x-7 gap-y-16`}>
        <div className="w-[304px]">
          <img src={art1} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art2} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Granny gives everyone the finger, and other tips from OFFF Barcelona
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art3} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art4} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art1} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art3} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art2} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Granny gives everyone the finger, and other tips from OFFF Barcelona
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art3} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art4} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art3} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art2} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Granny gives everyone the finger, and other tips from OFFF Barcelona
          </h3>
        </div>
        <div className="w-[304px]">
          <img src={art3} alt="" className="w-full" />
          <h3 className="text-2xl text-center font-medium p-5">
            Here are some things you should know regarding how we work
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Articles;
