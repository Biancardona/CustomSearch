import React from "react";
import { Card } from "semantic-ui-react";
import ResultItem from "./ResultItem";

const ResultsCard = ({ results = [] }) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Results</Card.Header>
      </Card.Content>
      <Card.Content>
        {results.map((result) => (
          <ResultItem key={result.cacheId} result={result}></ResultItem>
        ))}
      </Card.Content>
    </Card>
  );
};

export default ResultsCard;
