import React from "react";

const Stats = ({ totalCount }) => {
  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space y-5 bg-white rounded shadow">
      <div>
        <h1 className="text-2xl">Total Count : {totalCount}</h1>
      </div>
    </div>
  );
};

export default Stats;
