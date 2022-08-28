import React from "react";
import { Row, Col } from "react-bootstrap";

function PositionField(props) {
  let teamAvg = (props.team.points / 16).toFixed(1);
  let diff = (props.avgs.avg - teamAvg) / props.avgs.stdev;
  let newDiff;
  let textColor

  if (diff > 1.5 ) {
    textColor = "#328CCB"
  } else if (diff > 0.5) {
    textColor = "#2B6953"
  } else if (diff < -0.5) {
    textColor = "#AE2F42"
  } else {
    textColor = "#FBD64A"
  }

  diff > 0 ? (newDiff = `+${diff.toFixed(2)}`) : (newDiff = diff.toFixed(2));

  console.log("position field: ", props);

  return (
    <div>
      <Row className="row-card mt-3">
        <Col
          md="2"
          className="col-logo-position"
          style={{ backgroundImage: `url(${props.team.logo})` }}
        ></Col>
        <Col md="3">
          <Row className="row-positionfield-sub">
            <p>Average</p>
          </Row>
          <Row>
            <p>{teamAvg}</p>
          </Row>
        </Col>
        <Col md="3">
          <Row className="row-positionfield-sub">
            <p>League Rank</p>
          </Row>
          <Row className="section-stats">
            <p className="text-rank">{props.rank}</p>
          </Row>
        </Col>
        <Col md="3">
          <Row className="row-positionfield-sub">
            <p>Differential</p>
          </Row>
          <Row className="section-stats">
            <p style={{color: textColor}}>{newDiff}</p>
          </Row>
        </Col>
        <Col md="1" className="col-right" style={{ backgroundColor: props.team.color }}></Col>
      </Row>
    </div>
  );
}

export default PositionField;
