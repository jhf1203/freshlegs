import { React, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import PlaceholderCard from "./PlaceholderCard";

import PositionCard from "./PositionCard";
function PointsByPosition(props) {
  const [posToShow, setPosToShow] = useState("null");
  const [posData, setPosData] = useState([]);

  let positionArr = ["QB", "RB", "WR", "TE", "K"];
  let statsArr = [];

  function posList(pos) {
    // for (let i = 0; i < props.defenseData.length; i++) {
    switch (pos) {
      case "QB":
        statsArr.push({
          points: props.sortedPoints[0],
          avg: props.posAverages[0],
        });
        break;
      case "RB":
        statsArr.push({
          points: props.sortedPoints[1],
          avg: props.posAverages[1],
        });
        break;
      case "WR":
        statsArr.push({
          points: props.sortedPoints[2],
          avg: props.posAverages[2],
        });
        break;
      case "TE":
        statsArr.push({
          points: props.sortedPoints[3],
          avg: props.posAverages[3],
        });
        break;
      case "K":
        statsArr.push({
          points: props.sortedPoints[4],
          avg: props.posAverages[4],
        });
    }
    setPosData(statsArr);
    // }
  }

  function posSelect(e) {
    e.preventDefault();
    setPosToShow(e.target.value);
    posList(e.target.value);
  }

  function launchDisplay() {
    if (posToShow == "null") {
      return (
        <PlaceholderCard
          title="a position"
          tool="dropdown menu"
          header="PPG allowed by position"
        />
      );
    } else {
      return <PositionCard pos={posToShow} data={posData} />;
    }
  }

  return (
    <div>
      <Row className="margin-spacer-5">
        <Form>
          <Row>
            <Col md="12">
              <Form.Select placeholder="Select a Position" onChange={posSelect}>
                {positionArr.map((pos) => {
                  return <option>{pos}</option>;
                })}
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row>{launchDisplay()}</Row>
    </div>
  );
}

export default PointsByPosition;
