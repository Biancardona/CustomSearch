import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from "firebase";
import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import ResultsCard from "./components/ResultsCard";
import SearchCard from "./components/SearchCard";
import { firebaseConfig } from "./config/firebase";

function App() {
  const [results, setResults] = useState([]);

  const onSearchHandler = (results) => {
    setResults(results);
  };
  return (
    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
        <Container>
          <SearchCard onSearch={onSearchHandler}></SearchCard>
          <ResultsCard results={results}></ResultsCard>
        </Container>
      </div>
    </FirestoreProvider>
  );
}

export default App;
