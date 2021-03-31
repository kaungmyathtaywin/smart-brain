import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="flex justify-center f3 white">
      <div>{`Hello ${name}, your current entry count is`}</div>
      <div className="ml2">{entries}</div>
    </div>
  );
};

export default Rank;
