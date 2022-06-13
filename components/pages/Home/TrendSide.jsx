import React from "react";
import TrendHeader from "./TrendSide/TrendHeader";
import TrendsForToday from "./TrendSide/TrendsForToday";
const TrendSide = () => {
  return (
    <div className="bg-gray-100 rounded-lg drop-shadow-lg">
      <TrendHeader />
      <div className="p-12">
        <p className="mt-6 font-bold">Trends for Today</p>
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
        <TrendsForToday />
      </div>
      <div className="divider divider-vertical" />
    </div>
  );
};

export default TrendSide;
