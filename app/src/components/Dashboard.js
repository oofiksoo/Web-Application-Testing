import React from "react";

export default function Dashboard(props) {
  return (
    <div className="scoreControls">
      <button className="ballbutton" onClick={props.ball}>
        Ball
      </button>
      <button className="strikebutton" onClick={props.strike}>
        Strike
      </button>
      <button className="foulbutton" onClick={props.foul}>
        Foul
      </button>
      <button className="hitbutton" onClick={props.hit}>
        Hit
      </button>
    </div>
  );
}
