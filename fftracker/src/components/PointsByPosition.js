import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import PositionCard from "./PositionCard";
function PointsByPosition(props) {
  const [posToShow, setPosToShow] = useState("null");

  let positionArr = ["QB", "RB", "WR", "TE", "K"];

  console.log("points props: ", props);

  function posSelect(e) {
    e.preventDefault();
    console.log(e.target.value);
    setPosToShow(e.target.value);
  }

  function posDisplay(e) {
    e.preventDefault();
    console.log("teamtoshow!", posToShow);
  }

  function launchDisplay() {
    if (posToShow == "null") {
      return "select a position to view data";
    } else {
      return <PositionCard pos={posToShow} />;
    }
  }

  return (
    <div>
      <Row>
        <Form>
          <Row>
            <Col md="7">
              <Form.Select onChange={posSelect}>
                {positionArr.map((pos) => {
                  return <option>{pos}</option>;
                })}
              </Form.Select>
            </Col>
            <Col md="5">
              <Button type="submit" onClick={posDisplay}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row>{launchDisplay()}</Row>
    </div>
  );
}

export default PointsByPosition;
