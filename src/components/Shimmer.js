import React from "react";

const Shimmer = () => {
  return (

    <div className="w-80 h-96 m-3 p-3 border-2 rounded-lg bg-gray-300">
      <div className="  w-72 h-48 rounded-lg bg-gray-400"></div>

      <div className=" my-2  w-76 h-8 bg-gray-200 rounded-md"></div>
      <div className=" my-2  w-76 h-8 bg-gray-200 rounded-md"></div>
      <div className=" my-2  w-76 h-8 bg-gray-200 rounded-md"></div>
      <div className=" my-2  w-76 h-8 bg-gray-200 rounded-md"></div>

    <div className="card-container-shimmer">
      <div className="image-shimmer"></div>
      <div className="content-shimmer">
        <div className="text-shimmer"></div>
        <div className="text-shimmer"></div>
        <div className="text-shimmer"></div>
        <div className="text-shimmer"></div>
      </div>
</div>
    </div>
  );
};

export default Shimmer;
