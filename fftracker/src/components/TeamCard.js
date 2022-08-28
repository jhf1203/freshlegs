import React from "react";

import { Row, Col, Card } from "react-bootstrap";

import TeamRow from "./TeamRow";

function TeamCard(props) {
  console.log("team card props: ", props);
  return (
    <div >
      <div
        className="team-card mt-5 mb-5"
        style={{ backgroundImage: `url(${props.stats.teamLogo}` }}
      >
        <div className="team-card-body">
          <p>{props.stats.teamName}</p>
          <Row>
            <Col md="3">
              <p>Position</p>
            </Col>
            <Col md="3">
              <p>PPG Allowed</p>
            </Col>
            <Col md="3">
              <p>League Rank</p>
            </Col>
            <Col md="3">
              <p>Differential</p>
            </Col>
          </Row>
          {props.stats.ranks.map((pos) => {
            return <TeamRow stats={pos} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
