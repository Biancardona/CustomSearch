import firebase from "firebase";
import React, { useState } from "react";
import { Button, Card, Dropdown, Grid, Icon, Input } from "semantic-ui-react";
import { search } from "../services/search-engine";
import OpenSearchModal from "./OpenSearchModal";
import SaveSearchModal from "./SaveSearchModal";

const SearchCard = ({ onSearch = (results) => {} }) => {
  const [title, setTitle] = useState("Unnamed");
  const [query, setQuery] = useState("");
  const [excludedTerms, setExcludedTerms] = useState([]);
  const [includedTerms, setIncludedTerms] = useState([]);
  const [selectedURLs, setSelectedURLs] = useState([]);

  const limitToURLs = [
    {
      key: "site%3Awww.pharmacy.ca.gov",
      text: "California",
      value: "site%3Awww.pharmacy.ca.gov",
    },
    {
      key: "site%3Afloridaspharmacy.gov",
      text: "Florida",
      value: "site%3Afloridaspharmacy.gov",
    },
    {
      key: "site%3Apharmacy.ky.gov",
      text: "Kentucky",
      value: "site%3Apharmacy.ky.gov",
    },
    {
      key: "site%3Awww.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/Pharmacy",
      text: "Pennsylvania",
      value:
        "site%3Awww.dos.pa.gov/ProfessionalLicensing/BoardsCommissions/Pharmacy",
    },
    {
      key: "site%3Adoh.sd.gov/boards/pharmacy",
      text: "SD",
      value: "site%3Adoh.sd.gov/boards/pharmacy",
    },
    {
      key: "site%3Awww.pharmacy.texas.gov",
      text: "Texas",
      value: "site%3Awww.pharmacy.texas.gov",
    },
  ];

  const onSearchHandler = () => {
    search({
      query,
      orTerms: selectedURLs,
      excludeTerms: excludedTerms.map((term) => term.value),
      exactTerms: includedTerms.map((term) => term.value),
    }).then((response) => onSearch(response.data.items));
  };

  const onResetHanlder = () => {
    setTitle("Unnamed");
    setQuery("");
    setIncludedTerms([]);
    setExcludedTerms([]);
    setSelectedURLs([]);
    onSearch([]);
  };

  const onOpenSearchHandler = (search) => {
    onSearch([]);
    setTitle(search.name);
    setQuery(search.q || "");
    setIncludedTerms(
      (search.includeWord || "").split(" ").map((term) => {
        return { key: term, text: term, value: term };
      })
    );
    setExcludedTerms(
      (search.excludeWord || "").split(" ").map((term) => {
        return { key: term, text: term, value: term };
      })
    );
    setSelectedURLs(search.statesSearchArray);
  };

  const onSaveSearchHandler = onOpenSearchHandler;

  const onDeleteHandler = () => {
    const db = firebase.firestore();
    db.collection("searches").doc(title).delete();
    onResetHanlder();
  };

  const onSelectURLs = (event, { value }) => {
    setSelectedURLs(value);
  };

  const onSaveHandler = () => {
    if (title !== "Unnamed") {
      const db = firebase.firestore();
      db.collection("searches")
        .doc(title)
        .set({
          q: query,
          statesSearchArray: selectedURLs,
          includeWord: includedTerms.map((term) => term.value).join(" "),
          excludeWord: excludedTerms.map((term) => term.value).join(" "),
        })
        .then(() => {});
    } else {
    }
  };

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header className="d-inline">{title}</Card.Header>
        <div className="d-inline float-right">
          <Button
            onClick={() =>
              window.open("https://moz.com/learn/seo/search-operators")
            }
          >
            <Icon name="help circle"></Icon>
            Avanced Syntax
          </Button>
          <OpenSearchModal onOpenSearch={onOpenSearchHandler}></OpenSearchModal>
        </div>
      </Card.Content>
      <Card.Content>
        <Grid columns={1}>
          <Grid.Column>
            <Input
              type="text"
              placeholder="Type the desired query..."
              fluid
              icon="search"
              value={query}
              onChange={(event, { value }) => setQuery(value)}
            />
          </Grid.Column>
        </Grid>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <h4>Limit to URLs</h4>
              <Dropdown
                placeholder="Limit to URLs"
                fluid
                multiple
                selection
                options={limitToURLs}
                value={selectedURLs}
                onChange={onSelectURLs}
              ></Dropdown>
            </Grid.Column>
            <Grid.Column>
              <h4>Must include</h4>
              <Dropdown
                icon={""}
                fluid
                search
                selection
                multiple
                allowAdditions
                options={includedTerms}
                value={includedTerms.map((term) => term.value)}
                onAddItem={(event, data) => {
                  setIncludedTerms([
                    ...includedTerms,
                    { key: data.value, text: data.value, value: data.value },
                  ]);
                }}
              />
            </Grid.Column>
            <Grid.Column>
              <h4>
                Must <b>NOT</b> include
              </h4>
              <Dropdown
                icon={""}
                fluid
                search
                selection
                multiple
                allowAdditions
                options={excludedTerms}
                value={excludedTerms.map((term) => term.value)}
                onAddItem={(event, data) => {
                  setExcludedTerms([
                    ...excludedTerms,
                    { key: data.value, text: data.value, value: data.value },
                  ]);
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={onDeleteHandler} disabled={title === "Unnamed"}>
                Delete
              </Button>
              <div className="d-inline float-right">
                <Button onClick={onResetHanlder}>Reset</Button>
                <Button onClick={onSaveHandler} disabled={title === "Unnamed"}>
                  Save
                </Button>
                <SaveSearchModal
                  {...{ query, selectedURLs, includedTerms, excludedTerms }}
                  onSaveSearch={onSaveSearchHandler}
                ></SaveSearchModal>
                <Button primary onClick={onSearchHandler}>
                  Search
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  );
};
export default SearchCard;
