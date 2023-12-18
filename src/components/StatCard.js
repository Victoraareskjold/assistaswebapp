import React from "react";

function StatCard({ title, text }) {
  return (
    <div className="statCard">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default StatCard;
