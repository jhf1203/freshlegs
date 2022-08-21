import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";

function PositionCard(props) {

  return (
    <div>
      <Row>
        <p>{props.data[0].position} PPG allowed</p>
      </Row>
      {props.data[0].points.map((team) => {
        return (
          <Row>
            <Col md="1">
              <p>{team.team}</p>
            </Col>
            <Col md="1">
              <p>{(team.points / 16).toFixed(1)}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default PositionCard;
