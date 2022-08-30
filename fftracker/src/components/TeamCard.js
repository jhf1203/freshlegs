import React from "react";

import { Row, Col, Card } from "react-bootstrap";

import TeamRow from "./TeamRow";

function TeamCard(props) {
  console.log("team card props: ", props);
  return (
    <div className="mt-3 card-height-fix " >
      <p className="text-team-name">{props.stats.teamName}</p>
      <Row className="team-card mt-3 mb-5 margin-spacer-5"
        style={{ backgroundImage: `url(${props.stats.teamLogo}` }}>
        <Col md="12" className="team-card-body">
          
          <Row className="row-team-card-header">
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
        </Col>
      
      </Row>
    </div>
  );
}

export default TeamCard;
