import React from "react";

export default function Display(props) {
  return (
    <div className="display-count">
      <div className="displaybox">
        <h3>Balls: </h3>
        <h1>{props.balls}</h1>
      </div>
      <div className="displaybox">
        <h3>Strikes: </h3>
        <h1>{props.strikes}</h1>
      </div>
    </div>
  );
}
