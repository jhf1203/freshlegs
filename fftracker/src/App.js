import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import PointsByPosition from "./components/PointsByPosition";
import StatsByTeam from "./components/StatsByTeam";
import InstructionText from "./components/InstructionText";

function App() {
  const [defenseData, setDefenseData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [infoToShow, setInfoToShow] = useState("instruction");

  let season = "2021REG";
  let key = "b3035b452c504c9095fc1bacfad65548";
  let conStrDef = `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeason/${season}?key=${key}`;
  let conStrTeam = `https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${season}?key=${key}`;

  async function showStats() {
    let responseDef = await axios.get(conStrDef);
    let responseTeam = await axios.get(conStrTeam);
    setDefenseData(responseDef.data);
    setTeamData(responseTeam.data);
    console.log("def", defenseData);
    console.log("team", teamData);
  }

  function setVisible() {
    if (infoToShow == "instruction") {
      return <InstructionText />;
    } else if (infoToShow == "positions") {
      return <PointsByPosition defenseData={defenseData} teamData={teamData} />;
    } else {
      return <StatsByTeam defenseData={defenseData} teamData={teamData} />;
    }
  }

  function showPositions() {
    setInfoToShow("positions");
  }

  function showTeams() {
    setInfoToShow("teams");
  }

  useEffect(() => {
    showStats();
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md="1"></Col>
          <Col md="3">This will be a section to describe stuff</Col>
          <Col md="1"></Col>
          <Col md="6">
            <Row style={{ border: "1px solid black" }}>
              <Col
                md="6"
                style={{ borderRight: "1px solid black" }}
                onClick={showTeams}
              >
                <p>All stats by team</p>
              </Col>
              <Col md="6" onClick={showPositions}>
                <p>Fantasy Points by position</p>
              </Col>
            </Row>
            <Row>
              <Col md="12">{setVisible()}</Col>
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
