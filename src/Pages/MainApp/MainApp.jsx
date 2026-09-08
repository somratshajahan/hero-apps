import React from "react";
import { FaStar } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import Apps from "../../Components/Apps/Apps";
import { Link } from "react-router";

const MainApp = ({ app }) => {
  console.log(app);
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 w-full shadow-sm border border-gray-200">
      <Link to={`/apps/${id}`}>
        <figure>
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between mt-5">
            <button className="bg-[#F1F5E8] px-5 py-3 rounded-lg flex  items-center gap-3">
              {" "}
              <IoDownloadOutline className="text-lg" />
              {(downloads / 1000000).toFixed(1).replace(/\.0$/, "")}M
            </button>
            <button className="bg-[#FF8811]/50 px-5 py-3 rounded-lg flex  items-center gap-3">
              {" "}
              <FaStar className="text-lg text-orange-500" /> {ratingAvg}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainApp;
