import React, { useEffect, useState } from "react";
import { ImDropbox } from "react-icons/im";
import { getInstalledApps } from "../../Pages/addToDB";
import { MdOutlineFileDownload } from "react-icons/md";
// import { FaStar } from "react-[#001931]";
import { FaStar as FaStarIcon } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const installedData = getInstalledApps();
    setApps(installedData || []);
  }, []);

  const handleRemove = (id) => {
    const updateApps = apps.filter((app) => app.id !== id);
    setApps(updateApps);
    localStorage.setItem("installedApps", JSON.stringify(updateApps));
    toast.warning("App uninstalled successfully!");
  };

  const handleSort = (order) => {
    setSortOrder(order);
    const detailsElement = document.querySelector("details.dropdown");
    if (detailsElement) {
      detailsElement.removeAttribute("open");
    }
  };

  const sortedApps = [...apps].sort((a, b) => {
    const sizeA = parseFloat(a.size) || 0;
    const sizeB = parseFloat(b.size) || 0;

    if (sortOrder === "low-to-high") return sizeA - sizeB;
    if (sortOrder === "high-to-low") return sizeB - sizeA;
    return 0;
  });

  return (
    <div className="bg-[#D9D9D9] min-h-screen pb-10">
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Installation Heading Section */}
      <div className="pt-10">
        <h2 className="flex justify-center items-center gap-3 text-[#001931] text-3xl md:text-5xl font-bold">
          Your Installed Apps <ImDropbox />
        </h2>
        <p className="text-center mt-4 text-[#627382] px-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mx-6 md:mx-15 mt-8 gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {sortedApps.length} Apps Found
          </h2>
        </div>
        <div>
          <details className="dropdown dropdown-end">
            <summary className="btn m-1 bg-white border-gray-300 shadow-sm text-gray-700 hover:bg-gray-50">
              {sortOrder === "low-to-high"
                ? "Size: Low - High"
                : sortOrder === "high-to-low"
                ? "Size: High - Low"
                : "Sort By Size"}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-md">
              <li>
                <button onClick={() => handleSort("low-to-high")}>
                  Low - High
                </button>
              </li>
              <li>
                <button onClick={() => handleSort("high-to-low")}>
                  High - Low
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>

      <div className="divider divider-accent mx-6 md:mx-15"></div>

      {/* Apps Section */}
      <div className="grid gap-6 mx-6 md:mx-15 pb-5">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col justify-between w-full gap-2">
                  <h3 className="font-bold text-gray-800 text-lg truncate max-w-xs md:max-w-md">
                    {app.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-medium text-gray-600 flex-wrap">
                    <p className="flex items-center gap-1">
                      <MdOutlineFileDownload className="text-blue-500 text-sm" />
                      {app.downloads}
                    </p>

                    <p className="flex items-center gap-1">
                      <FaStarIcon className="text-amber-500 text-sm" />
                      {app.ratingAvg}
                    </p>

                    <p className="flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded">
                      {app.size} MB
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(app.id)}
                className="btn bg-red-500 hover:bg-red-600 text-white border-none w-full sm:w-auto px-6 py-2 rounded-xl transition-all self-end sm:self-center"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 text-lg font-semibold">
            No installed apps found!
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;