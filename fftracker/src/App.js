import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import PointsByPosition from "./components/PointsByPosition";
import StatsByTeam from "./components/StatsByTeam";
import InstructionText from "./components/InstructionText";
import lyRes from "./assets/2021res";

import logoAri from "./assets/logo-imgs/ari.png"
import logoAtl from "./assets/logo-imgs/atl.png"
import logoBal from "./assets/logo-imgs/bal.png"
import logoBuf from "./assets/logo-imgs/buf.png"
import logoCar from "./assets/logo-imgs/car.png"
import logoChi from "./assets/logo-imgs/chi.png"
import logoCin from "./assets/logo-imgs/cin.png"
import logoCle from "./assets/logo-imgs/cle.png"
import logoDal from "./assets/logo-imgs/dal.png"
import logoDen from "./assets/logo-imgs/den.png"
import logoDet from "./assets/logo-imgs/det.png"
import logoGb from "./assets/logo-imgs/gb.png"
import logoHou from "./assets/logo-imgs/hou.png"
import logoInd from "./assets/logo-imgs/ind.png"
import logoJax from "./assets/logo-imgs/jax.png"
import logoKc from "./assets/logo-imgs/kc.png"
import logoLac from "./assets/logo-imgs/lac.png"
import logoLar from "./assets/logo-imgs/lar.png"
import logoLv from "./assets/logo-imgs/lv.png"
import logoMia from "./assets/logo-imgs/mia.png"
import logoMin from "./assets/logo-imgs/min.png"
import logoNe from "./assets/logo-imgs/ne.png"
import logoNo from "./assets/logo-imgs/no.png"
import logoNyg from "./assets/logo-imgs/nyg.png"
import logoNyj from "./assets/logo-imgs/nyj.png"
import logoPhi from "./assets/logo-imgs/phi.png"
import logoPit from "./assets/logo-imgs/pit.png"
import logoSea from "./assets/logo-imgs/sea.png"
import logoSf from "./assets/logo-imgs/sf.png"
import logoTb from "./assets/logo-imgs/tb.png"
import logoTen from "./assets/logo-imgs/ten.png"
import logoWas from "./assets/logo-imgs/was.png"

function App() {
  const [defenseData, setDefenseData] = useState(lyRes);
  const [pointData, setPointData] = useState([])
  const [rankingData, setRankingData] = useState([])
  // const [teamData, setTeamData] = useState([]);
  const [infoToShow, setInfoToShow] = useState("instruction");

  // let season = "2021REG";
  // let key = "b3035b452c504c9095fc1bacfad65548";
  // let conStrDef = `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeason/${season}?key=${key}`;
  // let conStrTeam = `https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${season}?key=${key}`;


  let arrLogos = [logoAri, logoAtl, logoBal, logoBuf, logoCar, logoChi, logoCin, logoCle, logoDal, logoDen, logoDet, logoGb, logoHou, logoInd, logoJax, logoKc, logoLac, logoLar, logoLv, logoMia, logoMin, logoNe, logoNo, logoNyg, logoNyj, logoPhi, logoPit, logoSea, logoSf, logoTb, logoTen, logoWas]
  let qbArr = {position: "Quarterbacks", points: []};
  let rbArr = {position: "Running Backs", points: []};
  let wrArr = {position: "Wide Receivers", points: []};
  let teArr = {position: "Tight Ends", points: []};
  let kArr = {position: "Kickers", points: []};
  let dstArr = {position: "All Positions", points: []};
  let allArrs = [qbArr, rbArr, wrArr, teArr, kArr, dstArr];
  let qbRanks = [];
  let rbRanks = [];
  let wrRanks = []
  let teRanks = []
  let kRanks = []
  let dstRanks = []
  let rankedArrs = [{position: "QB", teamRanks: qbRanks},
  {position: "RB", teamRanks: rbRanks},
  {position: "WR", teamRanks: wrRanks},
  {position: "TE", teamRanks: teRanks},
  {position: "K", teamRanks: kRanks},
  {position: "DST", teamRanks: dstRanks}, ]



  function arrSort(arr) {
    arr.points.sort((a, b) => {
      return a.points - b.points;
    });
  }

  function pushTeams(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
      arr2.push(arr1[i].team)
    }
  }

  function qbCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      qbArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].QuarterbackFantasyPointsAllowed,
      });
    }
    arrSort(qbArr);
    pushTeams(qbArr.points, qbRanks)
  }

  function rbCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      rbArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].RunningbackFantasyPointsAllowed,
      });
    }
    arrSort(rbArr);
    pushTeams(rbArr.points, rbRanks)
  }

  function wrCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      wrArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].WideReceiverFantasyPointsAllowed,
      });
    }
    arrSort(wrArr);
    pushTeams(wrArr.points, wrRanks)
  }

  function teCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      teArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].TightEndFantasyPointsAllowed,
      });
    }
    arrSort(teArr);
    pushTeams(teArr.points, teRanks)
  }

  function kCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      kArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].KickerFantasyPointsAllowed,
      });
    }
    arrSort(kArr);
    pushTeams(kArr.points, kRanks)
  }

  function dstCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      dstArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].FantasyPointsAllowed,
      });
    }
    arrSort(dstArr);
    pushTeams(dstArr.points, dstRanks)
  }

  function calcAll() {
    qbCalc();
    rbCalc();
    wrCalc();
    teCalc();
    kCalc();
    dstCalc();
    setPointData(allArrs)
    setRankingData(rankedArrs)
   }

  //  ====== DONT DELETE BELOW ======

  // async function showStats() {
  //   let responseDef = await axios.get(conStrDef);
  //   let responseTeam = await axios.get(conStrTeam);
  //   setDefenseData(responseDef.data);
  //   setTeamData(responseTeam.data);
  //   console.log("def", defenseData);
  //   console.log("team", teamData);
  // }

  function setVisible() {
    if (infoToShow == "instruction") {
      return <InstructionText />;
    } else if (infoToShow == "positions") {
      return (
        <PointsByPosition
          defenseData={defenseData}
          sortedPoints={pointData}
          teamRankings={rankingData}
          teamLogos={arrLogos}
          // teamData={teamData}
        />
      );
    } else {
      return (
        <StatsByTeam
          defenseData={defenseData}
          sortedPoints={pointData}
          teamRankings={rankingData}
          teamLogos={arrLogos}
          // teamData={teamData}
        />
      );
    }
  }

  function showPositions() {
    setInfoToShow("positions");
  }

  function showTeams() {
    setInfoToShow("teams");
  }

  useEffect(() => {
    calcAll();
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
