import React from "react";
import { FaStar } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { Link } from "react-router";

const Apps = ({ app }) => {
  //   console.log(app);
  const {
    id,
    image,
    title,
    downloads,
    ratingAvg,
  } = app;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to={`/apps/${id}`}>
        <div className="card bg-base-100  shadow-sm">
          <figure className="pt-5">
            <img className="rounded-lg" src={image} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title justify-center">{title}</h2>
          </div>

          <div className="flex justify-between mx-16 mb-10">
            <button className="bg-[#F1F5E8] px-5 py-3 rounded-lg flex  items-center gap-3">
              <IoDownloadOutline className="text-lg" />
              {(downloads / 1000000).toFixed(1).replace(/\.0$/, "")}M
            </button>
            <button className="bg-[#FF8811]/50 px-5 py-3 rounded-lg flex  items-center gap-3">
              <FaStar className="text-lg text-orange-500" /> {ratingAvg}
            </button>
          </div>
        </div>
      </Link>
     
    </div>
    
  );
};

export default Apps;
