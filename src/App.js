import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import ResultsCard from "./components/ResultsCard";
import SearchCard from "./components/SearchCard";

function App() {
  const [results, setResults] = useState([]);

  const onSearchHandler = (results) => {
    setResults(results);
  };
  return (
    <div className="App">
      <Container>
        <SearchCard onSearch={onSearchHandler}></SearchCard>
        <ResultsCard results={results}></ResultsCard>
      </Container>
    </div>
  );
}

export default App;
