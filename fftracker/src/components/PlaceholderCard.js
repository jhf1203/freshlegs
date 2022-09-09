import React from "react";

import { Row } from "react-bootstrap";

function PlaceholderCard(props) {
  let instructionText = [
    {
      p1:
        "What you'll then see is the latest defensive data for the team you've selected.  For each team you'll see the average amount of fantasy points each position has scored when playing against this team so far this year.",
      p2:
        "You'll also be able to see how the team you've selected stacks up against all other teams in the NFL, both in terms of overall rank and how far removed from the average PPG allowed to this position your current team sits.  This is reflected as the differential.  For more information about the differential refer to the sidebar.",
    },
    {
      p1:
        "Then you'll see a ranked list of teams, sorted from best to worst by how many fantasy points they allow the position you've selected.  For instance, the team that allows the fewest points against running backs will be displayed at the top when you select that position, while scrolling down will show you the team that performs the poorest.",
      p2:
        "For each team listed you'll see the average point total they allow that position, how they compare vs. the other teams in the league, and how better or worse than average they've performed so far.  This is reflected as the differential.  For more information about differential refer to the sidebar",
    },
    {
      p1:
        "After that you'll see a bit of information related to fantasy defense performance.  You can either view points allowed to each position by team, or a ranked list of teams and how their defense performs against a specific position",
      p2:
        "There are a number of data points to view and several more that are in the works.  Currently you can see how many fantasy points, on average, each team is allowing a given position.  Additionally you can see where they rank in terms of the rest of the league, and how close or far to the average that team stands.",
    },
  ];
  let textToDisplay;

  if (props.title == "a team") {
    textToDisplay = 0;
  } else if (props.title == "a position") {
    textToDisplay = 1;
  } else {
    textToDisplay = 2;
  }

  return (
    <div className="mt-5 card-height-fix  row-desc">
      <Row className="margin-spacer-5">
        <Row>
          <p className="text-justify text-placeholder-header">{props.header}</p>
        </Row>
        <Row>
          <p className="text-justify text-placeholder-subhead">
            How to view this:
          </p>
        </Row>
        <Row>
          <p className="text-justify">
            First, select {props.title} from the {props.tool} above
          </p>
        </Row>
        <Row>
          <p className="text-justify">{instructionText[textToDisplay].p1}</p>
        </Row>
        <Row>
          <p className="text-justify">{instructionText[textToDisplay].p2}</p>
        </Row>
        <Row>
          <p className="text-justify">Happy decision-making!</p>
        </Row>
      </Row>
    </div>
  );
}

export default PlaceholderCard;
