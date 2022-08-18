import { React, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import TeamCard from "./TeamCard";

function StatsByTeam(props) {
  const [teamToShow, setTeamToShow] = useState("null");
  const [currentTeam, setCurrentTeam] = useState({
    teamName: "null",
    qbPoints: "null",
    rbPoints: "null",
    wrPoints: "null",
    tePoints: "null",
    kPoints: "null",
    dstPoints: "null",
  });

  console.log("team props: ", props);
  let teamArr = [];

  props.defenseData.map((team) => {
    teamArr.push(team.Team);
  });

  function findTeam(team) {
    let teamName;
    for (let i = 0; i < props.defenseData.length; i++) {
      if (props.defenseData[i].Team == team) {
        console.log("we found the team!  It's ", team);
        switch (team) {
          case "ARI":
            teamName = "Cardinals";
            break;
          case "LAC":
            teamName = "Chargers";
            break;
          default:
            teamName = "some other name";
        }
        console.log("name is now: ", teamName);
        setCurrentTeam({
          teamName: teamName,
          qbPoints: props.defenseData[i].QuarterbackFantasyPointsAllowed,
          rbPoints: props.defenseData[i].RunningbackFantasyPointsAllowed,
          wrPoints: props.defenseData[i].WideReceiverFantasyPointsAllowed,
          tePoints: props.defenseData[i].TightEndFantasyPointsAllowed,
          kPoints: props.defenseData[i].KickerFantasyPointsAllowed,
          dstPoints: props.defenseData[i].FantasyPointsAllowed,
        });
      }
    }
  }

  function teamSelect(e) {
    e.preventDefault();
    console.log(e.target.value);
    setTeamToShow(e.target.value);
    findTeam(e.target.value);
  }

  function teamDisplay(e) {
    e.preventDefault();
    console.log("teamtoshow!", teamToShow);
    // findTeam(teamToShow);
  }

  function launchDisplay() {
    if (teamToShow == "null") {
      return "Select a team to see their stats";
    } else {
      return <TeamCard team={teamToShow} stats={currentTeam} />;
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
      <Row>{launchDisplay()}</Row>
    </div>
  );
}

export default StatsByTeam;
