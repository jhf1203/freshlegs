import React from "react";
import { Row, Col } from "react-bootstrap";

function PositionField(props) {
  let teamAvg = (props.team.points / 16).toFixed(1);
  let diff = (props.avgs.avg - teamAvg) / props.avgs.stdev;
  let newDiff;

  diff > 0 ? (newDiff = `+${diff.toFixed(2)}`) : (newDiff = diff.toFixed(2));

  return (
    <div>
      <Row className="row-card mt-4">
        <Col
          md="2"
          className="col-logo-position"
          style={{ backgroundImage: `url(${props.team.logo})` }}
        ></Col>
        <Col md="4">
          <Row>
            <p>Avg PPG Allowed</p>
          </Row>
          <Row>
            <p>{teamAvg}</p>
          </Row>
        </Col>
        <Col md="3">
          <Row>
            <p>League Rank</p>
          </Row>
          <Row>
            <p>{props.rank}</p>
          </Row>
        </Col>
        <Col md="3">
          <Row>
            <p>Differential</p>
          </Row>
          <Row>
            <p>{newDiff}</p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default PositionField;
