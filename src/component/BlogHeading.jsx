import React from "react";
import userPhoto from "../assets/userBlog.png";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BlogHeading() {
  return (
    <div className="w-[640px] mx-auto mb-14">
      <div className="flex justify-between">
        {/* user details who write blog */}
        <div className="flex   gap-x-4">
          <img src={userPhoto} alt="" className="w-14 h-14 rounded-full" />
          <div>
            <h4>Mika MAtikainen</h4>
            <p>Apr 15, 2020 · 4 min read</p>
          </div>
        </div>
        <div className="flex items-center">
          <Link to={"#"}>
            <div className="w-[70px] h-11 border flex justify-center items-center rounded">
              <FaFacebook />
            </div>
          </Link>
          <Link to={"#"}>
            <div className="w-[70px] h-11 border flex justify-center items-center rounded">
              <FaTwitter />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogHeading;
