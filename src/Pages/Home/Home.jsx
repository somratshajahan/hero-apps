import React, { useState } from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import heroImg from "../../assets/hero.png";
import Apps from "../../Components/Apps/Apps";
import { useLoaderData } from "react-router";
import { IoMdTrendingUp } from "react-icons/io";

const Home = () => {
  const data = useLoaderData();
 const [showAll, setShowAll]= useState(false);
 const visibleApps = showAll? data : data.slice(0,9);

  return (
    <div className="bg-[#D2D2D2]">
      <div>
        <h2 className="text-3xl text-center font-semibold pt-5">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
            Productive{" "}
          </span>
          App
        </h2>
        <p className="text-center mt-3 text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5 mt-3">
        <button className="btn">
          <FaGooglePlay /> Google Play
        </button>
        <button className="btn">
          <FaAppStoreIos /> Apps Store
        </button>
      </div>
      <div className="mt-10">
        <img className="max-w-full mx-auto" src={heroImg} alt="" />
        <div className=" pt-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          <h2 className="text-center text-3xl font-bold text-white py-5">
            Trusted by Millions, Built for You
          </h2>
          <div className="flex justify-center mt-5 gap-16">
            <div>
              <h4 className="text-lg text-white font-semibold">
                Total Downloads
              </h4>
              <span className="text-white text-7xl font-bold">29.6M</span>
              <br />
              <p className=" text-white font-semibold mb-5">
                21% more than last month
              </p>
            </div>

            <div>
              <h4 className="text-lg text-white font-semibold">
                Total Reviews
              </h4>
              <span className="text-white text-7xl font-bold">906K</span>
              <br />
              <p className=" text-white font-semibold mb-5">
                46% more than last month
              </p>
            </div>

            <div>
              <h4 className="text-lg text-white font-semibold">Active Apps</h4>
              <span className="text-white text-7xl font-bold">132+</span>
              <br />
              <p className=" text-white font-semibold mb-20">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 mb-8">
          <h2 className="flex items-center justify-center gap-2 text-3xl font-bold">
            Trending Apps <IoMdTrendingUp className="text-primary" />
          </h2>
          <p className="mt-2 text-gray-600">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {visibleApps.map((app) => (
            <Apps app={app} key={app.id}></Apps>
          ))}
        </div>
      </div>
     {!showAll && data?.length > 9 && (
        <div className="flex justify-center pb-5 mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold px-8 py-4 cursor-pointer"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
