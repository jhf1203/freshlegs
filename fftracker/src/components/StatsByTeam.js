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
            teamName = "Arizona Cardinals";
            break;
          case "ATL":
            teamName = "Atlanta Falcons";
            break;
          case "BAL":
            teamName = "Baltimore Ravens";
            break;
          case "BUF":
            teamName = "Buffalo Bills";
            break;
          case "CAR":
            teamName = "Carolina Panthers";
            break;
          case "CHI":
            teamName = "Chicago Bears";
            break;
          case "CIN":
            teamName = "Cincinatti Bengals";
            break;
          case "CLE":
            teamName = "Cleveland Browns";
            break;
          case "DAL":
            teamName = "Dallas Cowboys";
            break;
          case "DEN":
            teamName = "Denver Broncos";
            break;
          case "DET":
            teamName = "Detroit Lions";
            break;
          case "GB":
            teamName = "Green Bay Packers";
            break;
          case "HOU":
            teamName = "Houston Texans";
            break;
          case "IND":
            teamName = "Indianapolis Colts";
            break;
          case "JAX":
            teamName = "Jacksonville Jaguars";
            break;
          case "KC":
            teamName = "Kansas City Chiefs";
            break;
          case "LAC":
            teamName = "Los Angeles Chargers";
            break;
          case "LAR":
            teamName = "Los Angeles Rams";
            break;
          case "LV":
            teamName = "Las Vegas Raiders";
            break;
          case "MIA":
            teamName = "Miami Dolphins";
            break;
          case "MIN":
            teamName = "Minnesota Vikings";
            break;
          case "NE":
            teamName = "New England Patriots";
            break;
          case "NO":
            teamName = "New Orleans Saints";
            break;
          case "NYG":
            teamName = "New York Giants";
            break;
          case "NYJ":
            teamName = "New York Jets";
            break;
          case "PHI":
            teamName = "Philadelphia Eagles";
            break;
          case "PIT":
            teamName = "Pittsburgh Steelers";
            break;
          case "SEA":
            teamName = "Seattle Seahawks";
            break;
          case "SF":
            teamName = "San Francisco 49ers";
            break;
          case "TB":
            teamName = "Tampa Bay Buccaneers";
            break;
          case "TN":
            teamName = "Tennessee Titans";
            break;
          case "WAS":
            teamName = "Washington Commanders";
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
            <Col md="12">
              <Form.Select onChange={teamSelect}>
                {teamArr.map((team) => {
                  return <option>{team}</option>;
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

export default StatsByTeam;
