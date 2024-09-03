import React from "react";
import Banner from "./Banner";
import BlogHeading from "./BlogHeading";
import UserBlogWritting from "./UserBlogWritting";
import eye from "../assets/eye.png"
import Articles from './Articles'


function About() {

  return (
    <div>
      <Banner img={"order-2"} text={"order-1"} />
      <BlogHeading />
      <UserBlogWritting/>
      <div className="mt-[100px] mb-10">
        <img src={eye} alt="" className="w-full"/>
      </div>
      <div className="mb-[512px]">
        <h3 className="text-5xl font-bold text-center mb-7">What to read next</h3>
        <Articles width={"w-[968px]"}/>
      </div>
    </div>
  );
}

export default About;
