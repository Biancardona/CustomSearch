import { Container } from "semantic-ui-react";
import "./App.css";
import ResultsCard from "./components/ResultsCard";
import SearchCard from "./components/SearchCard";

function App() {
  return (
    <div className="App">
      <Container>
        <SearchCard></SearchCard>
        <ResultsCard></ResultsCard>
      </Container>
    </div>
  );
}

export default App;
