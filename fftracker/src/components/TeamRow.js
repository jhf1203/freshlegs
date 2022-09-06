import React from "react";

import { Row, Col } from "react-bootstrap";

function TeamRow(props) {
  let pointsAvg = (props.stats.points / 16).toFixed(1);
  let diff = ((props.stats.avg - pointsAvg) / props.stats.stdev).toFixed(2);
  let newDiff;
  let textColor;

  if (diff > 1.5) {
    textColor = "#328CCB";
  } else if (diff > 0.5) {
    textColor = "#2B6953";
  } else if (diff < -0.5) {
    textColor = "#AE2F42";
  } else {
    textColor = "#FBD64A";
  }

  diff > 0 ? (newDiff = `+${diff}`) : (newDiff = diff);

  return (
    <div>
      <Row className="row-team-row">
        <Col md="3" className="col-team-row-dark">
          <p className="text-team-row-position">{props.stats.position}</p>
        </Col>
        <Col className="col-team-row-dark text-team-row-avg" md="3">
          <p>{pointsAvg}</p>
        </Col>
        <Col className="col-team-row text-team-row-rank" md="3">
          <p>{props.stats.rank}</p>
        </Col>
        <Col className="col-team-row text-team-row-zscore" md="3">
          <p style={{ color: textColor }}>{newDiff}</p>
        </Col>
      </Row>
    </div>
  );
}

export default TeamRow;
