import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import PointsByPosition from "./components/PointsByPosition";
import StatsByTeam from "./components/StatsByTeam";
import lyRes from "./assets/2021res";
import PlaceholderCard from "./components/PlaceholderCard";

import logoAri from "./assets/logo-imgs/ari.png";
import logoAtl from "./assets/logo-imgs/atl.png";
import logoBal from "./assets/logo-imgs/bal.png";
import logoBuf from "./assets/logo-imgs/buf.png";
import logoCar from "./assets/logo-imgs/car.png";
import logoChi from "./assets/logo-imgs/chi.png";
import logoCin from "./assets/logo-imgs/cin.png";
import logoCle from "./assets/logo-imgs/cle.png";
import logoDal from "./assets/logo-imgs/dal.png";
import logoDen from "./assets/logo-imgs/den.png";
import logoDet from "./assets/logo-imgs/det.png";
import logoGb from "./assets/logo-imgs/gb.png";
import logoHou from "./assets/logo-imgs/hou.png";
import logoInd from "./assets/logo-imgs/ind.png";
import logoJax from "./assets/logo-imgs/jax.png";
import logoKc from "./assets/logo-imgs/kc.png";
import logoLac from "./assets/logo-imgs/lac.png";
import logoLar from "./assets/logo-imgs/lar.png";
import logoLv from "./assets/logo-imgs/lv.png";
import logoMia from "./assets/logo-imgs/mia.png";
import logoMin from "./assets/logo-imgs/min.png";
import logoNe from "./assets/logo-imgs/ne.png";
import logoNo from "./assets/logo-imgs/no.png";
import logoNyg from "./assets/logo-imgs/nyg.png";
import logoNyj from "./assets/logo-imgs/nyj.png";
import logoPhi from "./assets/logo-imgs/phi.png";
import logoPit from "./assets/logo-imgs/pit.png";
import logoSea from "./assets/logo-imgs/sea.png";
import logoSf from "./assets/logo-imgs/sf.png";
import logoTb from "./assets/logo-imgs/tb.png";
import logoTen from "./assets/logo-imgs/ten.png";
import logoWas from "./assets/logo-imgs/was.png";

function App() {
  const [defenseData, setDefenseData] = useState(lyRes);
  const [pointData, setPointData] = useState([]);
  const [rankingData, setRankingData] = useState([]);
  const [avgData, setAvgData] = useState("");
  const [bottomBorder, setBottomBorder] = useState([
    "1px solid black",
    "1px solid black",
  ]);
  // const [teamData, setTeamData] = useState([]);
  const [infoToShow, setInfoToShow] = useState("instruction");

  // let season = "2021REG";
  // let key = "b3035b452c504c9095fc1bacfad65548";
  // let conStrDef = `https://api.sportsdata.io/v3/nfl/stats/json/FantasyDefenseBySeason/${season}?key=${key}`;
  // let conStrTeam = `https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${season}?key=${key}`;

  let arrLogos = [
    logoAri,
    logoAtl,
    logoBal,
    logoBuf,
    logoCar,
    logoChi,
    logoCin,
    logoCle,
    logoDal,
    logoDen,
    logoDet,
    logoGb,
    logoHou,
    logoInd,
    logoJax,
    logoKc,
    logoLac,
    logoLar,
    logoLv,
    logoMia,
    logoMin,
    logoNe,
    logoNo,
    logoNyg,
    logoNyj,
    logoPhi,
    logoPit,
    logoSea,
    logoSf,
    logoTb,
    logoTen,
    logoWas,
  ];

  let arrColors = [
    "#AF2A4B",
    "#0D0D0D",
    "#373992",
    "#0D3D94",
    "#D3D4D6",
    "#0E1E49",
    "#0D0D0D",
    "#EC4033",
    "#B6BBBE",
    "#0D2C4E",
    "#B4BBBF",
    "#F7BA44",
    "#112B39",
    "#104477",
    "#2A6E7E",
    "#CC303A",
    "#2E86C8",
    "#0D3F99",
    "#A5AFB2",
    "#3D959C",
    "#68328E",
    "#182E4A",
    "#2E2A2B",
    "#0D296E",
    "#28614A",
    "#1D515A",
    "#2E2A2B",
    "#0D2C4E",
    "#B79E65",
    "#3C3A36",
    "#0D2C50",
    "#0D0D0D",
  ];

  let qbArr = { position: "Quarterbacks", points: [] };
  let rbArr = { position: "Running Backs", points: [] };
  let wrArr = { position: "Wide Receivers", points: [] };
  let teArr = { position: "Tight Ends", points: [] };
  let kArr = { position: "Kickers", points: [] };
  let dstArr = { position: "All Positions", points: [] };
  let allArrs = [qbArr, rbArr, wrArr, teArr, kArr, dstArr];

  let qbRanks = [];
  let rbRanks = [];
  let wrRanks = [];
  let teRanks = [];
  let kRanks = [];
  let dstRanks = [];
  let rankedArrs = [
    { position: "QB", teamRanks: qbRanks },
    { position: "RB", teamRanks: rbRanks },
    { position: "WR", teamRanks: wrRanks },
    { position: "TE", teamRanks: teRanks },
    { position: "K", teamRanks: kRanks },
    { position: "DST", teamRanks: dstRanks },
  ];

  let avgArr = [];

  // let bottomBorder = ["1px solid black", "1px solid black"]

  function arrSort(arr) {
    arr.points.sort((a, b) => {
      return a.points - b.points;
    });
  }

  function calcAvg(arr, pos) {
    let sum = 0;
    let stdevSum = 0;
    let avg;
    for (let i = 0; i < arr.points.length; i++) {
      sum = sum + arr.points[i].points;
    }
    avg = (sum / 32 / 16).toFixed(1);
    for (let i = 0; i < arr.points.length; i++) {
      stdevSum =
        stdevSum +
        (arr.points[i].points / 16 - avg) * (arr.points[i].points / 16 - avg);
    }
    let stDev = Math.sqrt(stdevSum / arr.points.length).toFixed(1);
    avgArr.push({ position: pos, avg: avg, stdev: stDev });
  }

  function pushTeams(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      arr2.push(arr1[i].team);
    }
  }

  function qbCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      qbArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].QuarterbackFantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(qbArr);
    pushTeams(qbArr.points, qbRanks);
    calcAvg(qbArr, "QB");
  }

  function rbCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      rbArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].RunningbackFantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(rbArr);
    pushTeams(rbArr.points, rbRanks);
    calcAvg(rbArr, "RB");
  }

  function wrCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      wrArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].WideReceiverFantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(wrArr);
    pushTeams(wrArr.points, wrRanks);
    calcAvg(wrArr, "WR");
  }

  function teCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      teArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].TightEndFantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(teArr);
    pushTeams(teArr.points, teRanks);
    calcAvg(teArr, "TE");
  }

  function kCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      kArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].KickerFantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(kArr);
    pushTeams(kArr.points, kRanks);
    calcAvg(kArr, "K");
  }

  function dstCalc() {
    for (let i = 0; i < defenseData.length; i++) {
      dstArr.points.push({
        team: defenseData[i].Team,
        points: defenseData[i].FantasyPointsAllowed,
        logo: arrLogos[i],
        color: arrColors[i],
      });
    }
    arrSort(dstArr);
    pushTeams(dstArr.points, dstRanks);
    calcAvg(dstArr, "DST");
  }

  function calcAll() {
    qbCalc();
    rbCalc();
    wrCalc();
    teCalc();
    kCalc();
    dstCalc();
    setPointData(allArrs);
    setRankingData(rankedArrs);
    setAvgData(avgArr);
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
      return (
        <PlaceholderCard
          title="an option"
          tool="tabs"
          header="Fantasy PPG Allowed"
        />
      );
    } else if (infoToShow == "positions") {
      // setBottomBorder(["1px solid black", "none"])
      return (
        <PointsByPosition
          defenseData={defenseData}
          sortedPoints={pointData}
          teamRankings={rankingData}
          posAverages={avgData}
          teamLogos={arrLogos}
          // teamData={teamData}
        />
      );
    } else {
      // setBottomBorder(["none", "1px solid black"])
      return (
        <StatsByTeam
          defenseData={defenseData}
          sortedPoints={pointData}
          teamRankings={rankingData}
          posAverages={avgData}
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
          <header>
            <Row>
              <h1 className="mb-0">FRESH LEGS</h1>
            </Row>
            <Row>
              <h2 className="mt-0">Making smarter fantasy decisions</h2>
            </Row>
          </header>
        </Row>
        <Row>
          <Col md="1"></Col>
          <Col md="3" className="row-welcome">
            <Row className="margin-spacer-5">
              <h3>Welcome!</h3>
            </Row>
            <Row className="margin-spacer-5">
              <p className="text-welcome">
                Fresh Legs is a data tool to help you make better lineup
                decisions.
              </p>
            </Row>
            <Row className="margin-spacer-5">
              <p className="text-welcome">
                We use the SportsData API to aggregate Fantasy Football scoring
                information from multiple leagues including Yahoo, Draft Kings,
                and many others.
              </p>
            </Row>
            <Row className="margin-spacer-5">
              <p className="text-welcome">
                Across these data sources, we calculate points scored by
                opposing offensive positions against a given team
              </p>
            </Row>
            <Row className="margin-spacer-5">
              <ul className="text-welcome">
                This can help you make daily and weekly decisions such as:
                <Row className="margin-spacer-5">
                  <li className="text-welcome margin-spacer-5">
                    Flex player decisions
                  </li>
                </Row>
                <Row className="margin-spacer-5">
                  <li className="text-welcome margin-spacer-5">
                    Waiver Wire Acquisitions
                  </li>
                </Row>
                <Row className="margin-spacer-5">
                  <li className="text-welcome margin-spacer-5">
                    D/ST Selection
                  </li>
                </Row>
              </ul>
              
            </Row>
            <Row className="margin-spacer-5">
                <p className="text-welcome">...and much more!</p>
              </Row>
              <Row className="margin-spacer-5">
                <p className="text-welcome">Get started to the right, to make sure you've always got a set of <span className="span-text-fresh-legs">fresh legs!</span></p>
              </Row>
          </Col>
          <Col md="1"></Col>
          <Col md="6">
            <Row className="row-main">
              <Col md="12">
                <Row>
                  <Col
                    md="6"
                    style={{
                      borderLeft: "1px solid black",
                      borderTop: "1px solid black",
                      borderRight: "1px solid black",
                      borderBottom: bottomBorder[0],
                    }}
                    onClick={showTeams}
                    className="col-tab"
                  >
                    <p>All offensive positions by team</p>
                  </Col>
                  <Col
                    md="6"
                    onClick={showPositions}
                    className="col-tab"
                    style={{
                      borderTop: "1px solid black",
                      borderRight: "1px solid black",
                      borderBottom: bottomBorder[1],
                    }}
                  >
                    <p>All teams by offensive position</p>
                  </Col>
                </Row>
                <Row className="row-info-container">
                  <Col md="12" className="mt-5">
                    {setVisible()}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
        <Row className="footer-row">
          <Col md="5"></Col>
          <Col md="7">
            <p className="text-footer">Jim Faulkner | <span className="span-footer-year">2022</span> | Fresh Legs | <a href="https://sportsdata.io/developers/api-documentation/nfl#/sports-data/stats-feeds" target="_blank">SportsDataIO</a></p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
