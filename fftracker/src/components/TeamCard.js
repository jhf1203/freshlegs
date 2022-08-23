import React from "react";

import { Row, Col, Card } from "react-bootstrap";

import TeamRow from "./TeamRow";

function TeamCard(props) {
  console.log("team card props: ", props);
  return (
    <div>
      <Card
        className="team-card mt-5"
        style={{ backgroundImage: `url(${props.stats.teamLogo}` }}
      >
        <Card.Body className="team-card-body">
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default TeamCard;
