import { React, useState } from "react";
import { Row, Col } from "react-bootstrap";

import PositionField from "./PositionField";

function PositionCard(props) {
  return (
    <div>
      <Row>
        <p>{props.data[0].points.position} PPG allowed</p>
      </Row>
      <Row>
        {props.data[0].points.points.map((team) => {
          return (
            <PositionField
              team={team}
              avgs={props.data[0].avg}
              rank={props.data[0].points.points.indexOf(team) + 1}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default PositionCard;
