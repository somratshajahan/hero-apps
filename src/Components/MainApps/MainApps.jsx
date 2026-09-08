import React, { useState } from "react";
import { DiVisualstudio } from "react-icons/di";
import { useLoaderData } from "react-router";
import MainApp from "../../Pages/MainApp/MainApp";

const MainApps = () => {
  const data = useLoaderData() || [];
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    // বর্ণ, সংখ্যা এবং স্পেস অ্যালাউড করার জন্য রুলস
    const validPattern = /^[a-zA-Z0-9\s]*$/;

    if (!validPattern.test(value)) {
      setError("Special characters are not allowed!");
      return;
    }

    if (value.length > 10) {
      setError("Search text is too long (Max 10 characters)!");
      return;
    }

    setError("");
  };

  // সার্চ এরর না থাকলে ফিল্টার করবে, অন্যথায় মূল ডাটা দেখাবে
  const filteredApps = error
    ? data
    : data.filter((app) =>
        app.title?.toLowerCase().includes(search.toLowerCase().trim())
      );

  return (
    <div className="bg-[#D9D9D9] min-h-screen pb-10">
      <div className="flex items-center gap-2 justify-center pt-5">
        <h2 className="text-5xl font-semibold text-gray-800">
          Our All Applications
        </h2>
        <DiVisualstudio className="text-5xl text-gray-800" />
      </div>
      <p className="text-center mt-3 text-gray-600">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-15 mt-5 gap-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="w-full md:w-auto">
          <label
            className={`input input-bordered flex items-center gap-2 bg-white ${
              error ? "border-red-500 focus-within:border-red-500" : ""
            }`}
          >
            <svg
              className="h-[1em] opacity-50 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              className="grow bg-transparent focus:outline-none"
              placeholder="Search apps..."
            />
          </label>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>
          )}
        </div>
      </div>

      {/* Apps Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 mx-6 md:mx-10">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => <MainApp key={app.id} app={app} />)
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-lg font-semibold">
            No apps match your search!
          </div>
        )}
      </div>
    </div>
  );
};

export default MainApps;