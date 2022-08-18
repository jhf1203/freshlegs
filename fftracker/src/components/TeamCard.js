import React from "react";

function TeamCard(props) {
  return (
    <div>
      <p>Team Name: {props.stats.teamName}</p>
      <p>QB Points Allowed: {props.stats.qbPoints} </p>
      <p>RB Points Allowed: {props.stats.rbPoints}</p>
      <p>WR Points Allowed: {props.stats.wrPoints}</p>
      <p>TE Points Allowed: {props.stats.tePoints}</p>
      <p>K Points Allowed: {props.stats.kPoints}</p>
      <p>DST Points Allowed: {props.stats.dstPoints}</p>
    </div>
  );
}

export default TeamCard;
