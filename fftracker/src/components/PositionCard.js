import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";

function PositionCard(props) {
  console.log("position card props: ", props);

  return (
    <div>
      <Row>
        <p>{props.data[0].position} PPG allowed</p>
      </Row>
      {props.data[0].points.map((team) => {
        return (
          <Row className="row-card mt-4">
            <Col
              md="2"
              className="col-logo-position"
              style={{ backgroundImage: `url(${team.logo})` }}
            ></Col>
            <Col md="2"></Col>
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
