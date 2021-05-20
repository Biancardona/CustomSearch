import React from "react";

const ResultItem = ({ result = {} }) => (
  <div>
    <p>{result.link}</p>
    <a href={result.link}>
      <h3>{result.title}</h3>
    </a>
    <p>{result.snippet}</p>
    <br></br>
  </div>
);

export default ResultItem;
