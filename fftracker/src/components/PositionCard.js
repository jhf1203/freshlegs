import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";

function PositionCard(props) {
  console.log("props: ", props);

  return (
    <div>
      <Row>
        <p>{props.data[0].position} points allowed</p>
      </Row>
      {props.data.map((team) => {
        return (
          <Row>
            <Col md="1">
              <p>{team.teamName}</p>
            </Col>
            <Col md="1">
              <p>{team.teamStat}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default PositionCard;
