import React from "react";

export default function Rank({ name, entries }) {
  return (
    <div className="flex justify-center f3 white">
      <div>{`Hello ${name}, your current entry count is`}</div>
      <div className="ml2">{entries}</div>
    </div>
  );
}
