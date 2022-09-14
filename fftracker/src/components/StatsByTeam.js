import { React, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import TeamCard from "./TeamCard";
import PlaceholderCard from "./PlaceholderCard";

function StatsByTeam(props) {
  const [teamToShow, setTeamToShow] = useState("null");
  const [currentTeam, setCurrentTeam] = useState({
    teamName: "null",
    teamLogo: "null",
    teamRanks: [
      { qbPoints: "null", rank: "null" },
      { rbPoints: "null", rank: "null" },
      { wrPoints: "null", rank: "null" },
      { tePoints: "null", rank: "null" },
      { kPoints: "null", rank: "null" },
      { dstPoints: "null", rank: "null" },
    ],
  });

  let teamArr = [];

  props.defenseData.map((team) => {
    teamArr.push(team.Team);
  });

  function findTeam(team) {
    let teamName;
    let teamLogo;
    for (let i = 0; i < props.defenseData.length; i++) {
      if (props.defenseData[i].Team == team) {
        switch (team) {
          case "ARI":
            teamName = "Arizona Cardinals";
            teamLogo = props.teamLogos[0];
            break;
          case "ATL":
            teamName = "Atlanta Falcons";
            teamLogo = props.teamLogos[1];
            break;
          case "BAL":
            teamName = "Baltimore Ravens";
            teamLogo = props.teamLogos[2];
            break;
          case "BUF":
            teamName = "Buffalo Bills";
            teamLogo = props.teamLogos[3];
            break;
          case "CAR":
            teamName = "Carolina Panthers";
            teamLogo = props.teamLogos[4];
            break;
          case "CHI":
            teamName = "Chicago Bears";
            teamLogo = props.teamLogos[5];
            break;
          case "CIN":
            teamName = "Cincinatti Bengals";
            teamLogo = props.teamLogos[6];
            break;
          case "CLE":
            teamName = "Cleveland Browns";
            teamLogo = props.teamLogos[7];
            break;
          case "DAL":
            teamName = "Dallas Cowboys";
            teamLogo = props.teamLogos[8];
            break;
          case "DEN":
            teamName = "Denver Broncos";
            teamLogo = props.teamLogos[9];
            break;
          case "DET":
            teamName = "Detroit Lions";
            teamLogo = props.teamLogos[10];
            break;
          case "GB":
            teamName = "Green Bay Packers";
            teamLogo = props.teamLogos[11];
            break;
          case "HOU":
            teamName = "Houston Texans";
            teamLogo = props.teamLogos[12];
            break;
          case "IND":
            teamName = "Indianapolis Colts";
            teamLogo = props.teamLogos[13];
            break;
          case "JAX":
            teamName = "Jacksonville Jaguars";
            teamLogo = props.teamLogos[14];
            break;
          case "KC":
            teamName = "Kansas City Chiefs";
            teamLogo = props.teamLogos[15];
            break;
          case "LAC":
            teamName = "Los Angeles Chargers";
            teamLogo = props.teamLogos[16];
            break;
          case "LAR":
            teamName = "Los Angeles Rams";
            teamLogo = props.teamLogos[17];
            break;
          case "LV":
            teamName = "Las Vegas Raiders";
            teamLogo = props.teamLogos[18];
            break;
          case "MIA":
            teamName = "Miami Dolphins";
            teamLogo = props.teamLogos[19];
            break;
          case "MIN":
            teamName = "Minnesota Vikings";
            teamLogo = props.teamLogos[20];
            break;
          case "NE":
            teamName = "New England Patriots";
            teamLogo = props.teamLogos[21];
            break;
          case "NO":
            teamName = "New Orleans Saints";
            teamLogo = props.teamLogos[22];
            break;
          case "NYG":
            teamName = "New York Giants";
            teamLogo = props.teamLogos[23];
            break;
          case "NYJ":
            teamName = "New York Jets";
            teamLogo = props.teamLogos[24];
            break;
          case "PHI":
            teamName = "Philadelphia Eagles";
            teamLogo = props.teamLogos[25];
            break;
          case "PIT":
            teamName = "Pittsburgh Steelers";
            teamLogo = props.teamLogos[26];
            break;
          case "SEA":
            teamName = "Seattle Seahawks";
            teamLogo = props.teamLogos[27];
            break;
          case "SF":
            teamName = "San Francisco 49ers";
            teamLogo = props.teamLogos[28];
            break;
          case "TB":
            teamName = "Tampa Bay Buccaneers";
            teamLogo = props.teamLogos[29];
            break;
          case "TEN":
            teamName = "Tennessee Titans";
            teamLogo = props.teamLogos[30];
            break;
          case "WAS":
            teamName = "Washington Commanders";
            teamLogo = props.teamLogos[31];
            break;
          default:
            teamName = "some other name";
        }
        setCurrentTeam({
          teamName: teamName,
          teamLogo: teamLogo,
          ranks: [
            {
              points: props.defenseData[i].QuarterbackFantasyPointsAllowed,
              rank: props.teamRankings[0].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[0].avg,
              stdev: props.posAverages[0].stdev,
              position: "QB",
            },
            {
              points: props.defenseData[i].RunningbackFantasyPointsAllowed,
              rank: props.teamRankings[1].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[1].avg,
              stdev: props.posAverages[1].stdev,
              position: "RB",
            },
            {
              points: props.defenseData[i].WideReceiverFantasyPointsAllowed,
              rank: props.teamRankings[2].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[2].avg,
              stdev: props.posAverages[2].stdev,
              position: "WR",
            },
            {
              points: props.defenseData[i].TightEndFantasyPointsAllowed,
              rank: props.teamRankings[3].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[3].avg,
              stdev: props.posAverages[3].stdev,
              position: "TE",
            },
            {
              points: props.defenseData[i].KickerFantasyPointsAllowed,
              rank: props.teamRankings[4].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[4].avg,
              stdev: props.posAverages[4].stdev,
              position: "K",
            },
            {
              points: props.defenseData[i].FantasyPointsAllowed,
              rank: props.teamRankings[5].teamRanks.indexOf(team) + 1,
              avg: props.posAverages[5].avg,
              stdev: props.posAverages[5].stdev,
              position: "Tot.",
            },
          ],
        });
      }
    }
  }

  function teamSelect(e) {
    e.preventDefault();
    setTeamToShow(e.target.value);
    findTeam(e.target.value);
  }

  function launchDisplay() {
    if (teamToShow == "null") {
      return (
        <PlaceholderCard
          title="a team"
          tool="dropdown menu"
          header="PPG allowed by team"
        />
      );
    } else {
      return <TeamCard team={teamToShow} stats={currentTeam} week={props.week}/>;
    }
  }

  return (
    <div>
      <Row className="margin-spacer-5">
        <Form>
          <Row>
            <Col md="12">
              <Form.Select placeholder="Select a Team" onChange={teamSelect}>
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
