import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import PositionCard from "./PositionCard";
function PointsByPosition(props) {
  const [posToShow, setPosToShow] = useState("null");
  const [posData, setPosData] = useState([]);

  let positionArr = ["QB", "RB", "WR", "TE", "K"];
  let statsArr = [];
  console.log("points props: ", props);

  function posList(pos) {
    // for (let i = 0; i < props.defenseData.length; i++) {
    switch (pos) {
      case "QB":
        statsArr.push(props.sortedPoints[0]);
        break;
      case "RB":
        statsArr.push(props.sortedPoints[1]);
        break;
      case "WR":
        statsArr.push(props.sortedPoints[2]);
        break;
      case "TE":
        statsArr.push(props.sortedPoints[3]);
        break;
      case "K":
        statsArr.push(props.sortedPoints[4]);
    }
    setPosData(statsArr);
    // }
  }

  function posSelect(e) {
    e.preventDefault();
    console.log(e.target.value);
    setPosToShow(e.target.value);
    posList(e.target.value);
  }

  function posDisplay(e) {
    e.preventDefault();
    console.log("teamtoshow!", posToShow);
  }

  function launchDisplay() {
    if (posToShow == "null") {
      return "select a position to view data";
    } else {
      return <PositionCard pos={posToShow} data={posData} />;
    }
  }

  return (
    <div>
      <Row>
        <Form>
          <Row>
            <Col md="12">
              <Form.Select onChange={posSelect}>
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
