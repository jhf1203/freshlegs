import React from "react";

import { Row, Col, Card } from "react-bootstrap";

function TeamCard(props) {
  console.log("team card props: ", props);
  return (
    <div>
      <Card
        className="team-card mt-5"
        style={{ backgroundImage: `url(${props.stats.teamLogo}` }}
      >
        <Card.Body className="team-card-body">
          <p>Team Name: {props.stats.teamName}</p>
          <p>
            QB PPG Allowed: {(props.stats.ranks[0].qbPoints / 16).toFixed(1)}{" "}
          </p>
          <p>
            RB PPG Allowed: {(props.stats.ranks[1].rbPoints / 16).toFixed(1)}
          </p>
          <p>
            WR PPG Allowed: {(props.stats.ranks[2].wrPoints / 16).toFixed(1)}
          </p>
          <p>
            TE PPG Allowed: {(props.stats.ranks[3].tePoints / 16).toFixed(1)}
          </p>
          <p>K PPG Allowed: {(props.stats.ranks[4].kPoints / 16).toFixed(1)}</p>
          <p>
            Total PPG Allowed:{" "}
            {(props.stats.ranks[5].dstPoints / 16).toFixed(1)}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamCard;
