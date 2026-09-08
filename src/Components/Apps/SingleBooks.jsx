import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import Ratings from "../Ratings/Ratings";
import Description from "../Description/Description";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveAppToLocalStorage } from "../../Pages/addToDB";

const SingleBooks = ({ apps }) => {
  const handleInstall = () => {

    const result = saveAppToLocalStorage(apps);

    if (result.success) {
 
      toast.success(result.message, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {

      toast.warn(result.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  const {
    reviews,
    image,
    title,
    companyName,

    size,
    downloads,
    ratingAvg,
  } = apps;
  return (
    <div className="bg-[#D9D9D9]">
      <div className="bg-[#D9D9D9]">
        <div className="flex flex-col md:flex-row gap-10 mx-6 md:mx-19 py-10 items-start">
          <div className="w-full md:w-auto shrink-0">
            <img
              src={image}
              alt="books-image"
              className="w-full md:w-70 h-auto object-cover rounded-2xl shadow-md"
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-between">
            <div>
              <h2 className="mb-2 font-bold text-3xl text-gray-800">{title}</h2>
              <span className="font-semibold text-gray-600">
                Developed By:{" "}
                <span className="font-semibold text-blue-600">
                  {companyName}
                </span>
              </span>
              <div className="divider divider-primary w-full pr-6 my-3"></div>
            </div>

            <div className="flex flex-wrap gap-4 py-3">
              <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 min-w-[160px] flex-1">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 mb-1">
                    Downloads
                  </span>
                  <span className="text-2xl font-extrabold text-gray-800">
                    {downloads
                      ? (downloads / 1000000).toFixed(1).replace(/\.0$/, "") +
                        "M"
                      : "0M"}
                  </span>
                </div>
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <FaDownload className="text-xl" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 min-w-[160px] flex-1">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 mb-1">
                    Average Rating
                  </span>
                  <span className="text-2xl font-extrabold text-gray-800">
                    {ratingAvg || "0.0"}
                  </span>
                </div>
                <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                  <FaStar className="text-xl" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 min-w-[160px] flex-1">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-gray-500 mb-1">
                    Total Reviews
                  </span>
                  <span className="text-2xl font-extrabold text-gray-800">
                    {reviews || "0"}
                  </span>
                </div>
                <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                  <MdReviews className="text-xl" />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleInstall}
                className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 text-white  px-24 py-6 text-2xl font-bold rounded-lg border-none shadow-md transition-all"
              >
                Install ({size || "0 MB"}) MB
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-primary mx-15"></div>
      <h2 className="ml-15 text-[#001931] font-semibold text-2xl">Ratings</h2>
      <div>
        <Ratings></Ratings>
      </div>
      <div className="divider divider-neutral mx-15"></div>
      <div>
        <Description apps={apps}></Description>
      </div>
    </div>
  );
};

export default SingleBooks;
