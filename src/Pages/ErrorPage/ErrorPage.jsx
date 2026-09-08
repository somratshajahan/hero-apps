import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md flex justify-center items-center">
        <img
          className="w-full h-auto object-contain"
          src={errorImg}
          alt="Error"
        />
      </div>
      <div className="mt-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold">Opps, Page Not Found</h2>
        <h4 className="my-5 text-gray-400">
          The page you are looking for is not available.
        </h4>

   <Link to={"/"}>
   
        <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold">
          Go Back
        </button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
