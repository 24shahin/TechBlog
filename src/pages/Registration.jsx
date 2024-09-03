import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

function Registration() {
  const [regData, SetRegData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [regerror, SetRegerror] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [openEye, SetOpenEye] = useState(false);
  const handleChange = (e) => {
    SetRegData({ ...regData, [e.target.name]: e.target.value });
    SetRegerror({ ...regerror, [e.target.name]: "" });
  };
  const handleClick = () => {
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regData.name) {
      SetRegerror({ ...regerror, name: "Name required" });
    } else if (!regData.email) {
      SetRegerror({ ...regerror, email: "E-mail required" });
    } else if (!pattern.test(regData.email)) {
      SetRegerror({ ...regerror, email: "Vaild E-mail required" });
    } else if (!regData.password) {
      SetRegerror({ ...regerror, password: "password required" });
    } else if (regData.password.length < 8) {
      SetRegerror({ ...regerror, password: "password must 8 length" });
    } else {
      console.log(regData);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Tech Blog
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <input
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full name"
                    onChange={handleChange}
                  />
                  {regerror.name && (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {regerror.name}
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    onChange={handleChange}
                  />
                  {regerror.email && (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {regerror.email}
                    </div>
                  )}
                </div>
                <div className="password">
                  <input
                    type={openEye ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  />
                  {!openEye && (
                    <FaRegEye
                      className="eye"
                      onClick={() => SetOpenEye(!openEye)}
                      style={{ color: "#03014C" }}
                    />
                  )}
                  {openEye && (
                    <FaRegEyeSlash
                      className="eye"
                      onClick={() => SetOpenEye(!openEye)}
                      style={{ color: "#03014C" }}
                    />
                  )}
                  {regerror.password && (
                    <div
                      className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      {regerror.password}
                    </div>
                  )}
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  className="w-[385px] border  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleClick}
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
