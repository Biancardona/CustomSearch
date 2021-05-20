import React from "react";
import { Card } from "semantic-ui-react";
import ResultItem from "./ResultItem";

const ResultsCard = () => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Results</Card.Header>
      </Card.Content>
      <Card.Content>
        <ResultItem></ResultItem>
      </Card.Content>
    </Card>
  );
};

export default ResultsCard;
