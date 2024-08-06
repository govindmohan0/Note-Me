import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3 py-4 px-4">
      <p className="text-sm text-yellow-300">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm text-yellow-300">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm text-yellow-300">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-800 py-0">
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
