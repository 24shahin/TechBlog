import React, { useState } from "react";

function WrittingBlog() {
  const [writtingData, setWrittingData] = useState({
    summary: "",
    tittle: "",
    description: "",
    image: "",
    otherdescription: "",
    email: "",
  });
  const handleChange = (e) => {
    setWrittingData({ ...writtingData, [e.target.name]: e.target.value });
  };
  const handlesubmit = () => {
    console.log(writtingData);
  };
  return (
    <div className="mt-16">
      <div>
        <h2 className="text-center text-3xl font-bold mb-8">Write What Makes You Different From Others</h2>
        <div className="grid gap-6 mb-6 ">
          <div className="w-[600px] mx-auto">
            <label
              htmlFor="first_name"
              className="block mb-3 text-xl font-medium text-gray-900 dark:text-white"
            >
              Summary
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Summary"
              required
              onChange={handleChange}
              name="summary"
            />
          </div>
          <div className="w-[600px] mx-auto">
            <label
              htmlFor="first_name"
              className="block mb-3 text-xl font-medium text-gray-900 dark:text-white"
            >
              Tittle
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tittle"
              required
              onChange={handleChange}
              name="tittle"
            />
          </div>

          <div className="w-[600px] mx-auto">
            <label
              htmlFor="company"
              className="block mb-3 text-xl font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              required
              onChange={handleChange}
              name="description"
            />
          </div>
          <div className="w-[600px] mx-auto">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handleChange}
              name="image"
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>

          <div className="w-[600px] mx-auto">
            <label
              htmlFor="website"
              className="block mb-3 text-xl font-medium text-gray-900 dark:text-white"
            >
              Others Description
            </label>
            <input
              type="url"
              id="website"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Others Description"
              required
              onChange={handleChange}
              name="otherdescription"
            />
          </div>
        </div>
        <div className="w-[600px] mx-auto">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email address"
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="w-[600px] mx-auto my-9">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-28 mx-auto"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default WrittingBlog;
