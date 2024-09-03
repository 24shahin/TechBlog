import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    let location = useLocation();
  return (
    <div className="border-b-2">
      <div className="container ">
        <div className=" flex justify-between items-center mt-[52px] pb-10">
          <div className="w-96 h-9">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div className="flex gap-x-10 text-sm">
            <Link
              to={"/"}
              className={`${location.pathname == "/" ? "active" : ""} `}
            >
              Blog
            </Link>
            <Link
              to={"/about"}
              className={`${location.pathname == "/about" ? "active" : ""} `}
            >
              About
            </Link>
            <Link
              to={"/writting"}
              className={`${location.pathname == "/writting" ? "active" : ""} `}
            >
              Writting a Blog
            </Link>
            <Link
              to={"/links"}
              className={`${location.pathname == "/links" ? "active" : ""} `}
            >
              Links
            </Link>
            <Link
              to={"/projects"}
              className={`${location.pathname == "/projects" ? "active" : ""} `}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
