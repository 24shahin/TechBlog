import React from "react";
import blog from "../assets/blog.png";
import User from "../assets/userBlog.png";
import { Link } from "react-router-dom";

function UserBlogWritting() {
  return (
    <div>
      {/* blog Sbject / Summary */}
      <h3 className="text-xl w-[640px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
        tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a
        nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at
        viverra. <br />
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie,
        molestie lectus eu, semper lectus.{" "}
      </h3>
      {/* Blog Tittle */}
      <h2 className="text-[32px] font-bold my-8 w-[640px] mx-auto">
        Next on the pipeline
      </h2>
      {/* Blog description */}
      <p className="text-xl w-[640px] mx-auto">
        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
        dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
        quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. <br />
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
        posuere maximus dui et fringilla.{" "}
      </p>
      {/* blog Images */}
      <div className="w-[854px] mx-auto mt-14 mb-[52px]">
        <img src={blog} alt="" className="w-full mb-3" />
        {/* images Details */}
        <p className="text-base font-medium w-[480px] mx-auto text-center">
          Image caption centered this way and I’ll make this a bit longer to
          indicate the amount of line-height.{" "}
        </p>
      </div>
      {/* Blog description 2 */}
      <p className="text-xl w-[640px] mx-auto ">
        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
        dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
        quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. <br />
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
        posuere maximus dui et fringilla.{" "}
      </p>
      {/* Blog description 3 */}
      <p className="text-xl w-[640px] mx-auto my-[52px]">
        Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
        dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
        quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. <br />
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
        posuere maximus dui et fringilla.{" "}
      </p>
      {/* Blog conclusion */}
      <p className="text-xl w-[640px] mx-auto mb-[52px]">
        Duis eu velit tempus erat egestas efficitur. <br />
        Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam
        posuere maximus dui et fringilla.{" "}
      </p>
      {/* gretting from user */}
      <div className="w-[640px] mx-auto">
        <p className="text-xl">Thanks for reading my articles</p>
        <span className="text-xl">Mike</span>
      </div>
      {/* Blog tags */}
      <div className="w-[640px] mx-auto mt-[173px] pb-8 border-b-2 border-black border-dashed">
        <h3>
          Tags:{" "}
          <Link to={"#"} className="underline text-base font-medium">
            product design
          </Link>
          ,
          <Link to={"#"} className="underline text-base font-medium">
            culture
          </Link>
        </h3>
      </div>
      {/* user Details */}
      <div className="mt-8 w-[640px] mx-auto">
        <div className="flex gap-x-8 items-center">
          <div className="w-[70px] h-[70px] contents">
            <img src={User} alt="" className="rounded-full w-[70px] h-[70px]" />
          </div>
          <div>
            <p className="text-xl">
              <span className="font-bold">Mika Matikainen</span> is a Design
              Founder & Advisor, Berlin School of Creative Leadership Executive
              MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose
              stakeholder.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBlogWritting;
