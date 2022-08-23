import React from "react";

import { Row, Col } from "react-bootstrap";

function TeamRow(props) {
  let pointsAvg = (props.stats.points / 16).toFixed(1);
  let diff = ((props.stats.avg - pointsAvg) / props.stats.stdev).toFixed(2);
  let newDiff;

  diff > 0 ? (newDiff = `+${diff}`) : (newDiff = diff);

  console.log("row props: ", props);
  return (
    <div>
      <Row>
        <Col md="3">
          <p>{props.stats.position}</p>
        </Col>
        <Col md="3">
          <p>{pointsAvg}</p>
        </Col>
        <Col md="3">
          <p>{props.stats.rank}</p>
        </Col>
        <Col md="3">
          <p>{newDiff}</p>
        </Col>
      </Row>
    </div>
  );
}

export default TeamRow;
