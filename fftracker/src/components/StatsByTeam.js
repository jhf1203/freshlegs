import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import TeamCard from "./TeamCard";

function StatsByTeam(props) {
  const [teamToShow, setTeamToShow] = useState("null");

  console.log("team props: ", props);
  let teamArr = [];

  props.defenseData.map((team) => {
    teamArr.push(team.Team);
  });

  function teamSelect(e) {
    e.preventDefault();
    console.log(e.target.value);
    setTeamToShow(e.target.value);
  }

  function teamDisplay(e) {
    e.preventDefault();
    console.log("teamtoshow!", teamToShow);
  }

  function launchDisplay() {
    if (teamToShow == "null") {
      return "Select a team to see their stats";
    } else {
      return <TeamCard team={teamToShow} />;
    }
  }

  return (
    <div>
      <Row>
        <Form>
          <Row>
            <Col md="7">
              <Form.Select onChange={teamSelect}>
                {teamArr.map((team) => {
                  return <option>{team}</option>;
                })}
              </Form.Select>
            </Col>
            <Col md="5">
              <Button type="submit" onClick={teamDisplay}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
      <Row>
        <h1>{launchDisplay()}</h1>
      </Row>
    </div>
  );
}

export default StatsByTeam;
