import React from "react";

const DateLabel = ({ date }) => {
  const year = date.substring(0, 4);
  let day = date.substring(4, 6);
  if (day[0] === "0") {
    day = day.split("")[1];
  }

  return <>{`${year} / ${day}`}</>;
};

export default DateLabel;
