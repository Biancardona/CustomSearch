import firebase from "firebase";
import React, { useState } from "react";
import { Button, Card, Dropdown, Grid, Icon, Input } from "semantic-ui-react";
import { search } from "./../services/search-engine";
import DeleteSearchConfirmation from "./DeleteSearchConfirmation";
import OpenSearchModal from "./OpenSearchModal";
import SaveSearchConfirmation from "./SaveSearchConfirmation";
import SaveSearchModal from "./SaveSearchModal";
import URLsManagerModal from "./URLsManagerModal";

const SearchCard = ({ onSearch = (results) => {} }) => {
  const [title, setTitle] = useState("Unnamed");
  const [query, setQuery] = useState("");
  const [excludedTerms, setExcludedTerms] = useState([]);
  const [includedTerms, setIncludedTerms] = useState([]);
  const [selectedURLs, setSelectedURLs] = useState([]);
  const [availableURLs, setAvailableURLs] = useState([]);

  const db = firebase.firestore();

  db.collection("urls")
    .get()
    .then((result) => {
      setAvailableURLs(
        result.docs.map((item) => {
          return {
            key: item.id,
            text: item.data().name,
            value: item.id,
          };
        })
      );
    });

  const onSearchHandler = () => {
    db.collection("urls")
      .get()
      .then((result) => {
        search({
          query,
          orTerms: selectedURLs.map((key) => {
            const url = result.docs.find(({ id }) => id === key)?.data()?.url;
            return url ? "site%3A" + url : "";
          }),
          excludeTerms: excludedTerms.map((term) => term.value),
          exactTerms: includedTerms.map((term) => term.value),
        }).then((response) => onSearch(response.data.items));
      });
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
    onResetHanlder();
  };

  const onSelectURLs = (event, { value }) => {
    setSelectedURLs(value);
  };

  const onSaveHandler = () => {
    if (title !== "Unnamed") {
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
                multiple
                selection
                options={availableURLs}
                value={selectedURLs}
                onChange={onSelectURLs}
              ></Dropdown>
              <URLsManagerModal></URLsManagerModal>
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
                onChange={(event, { value }) => {
                  setIncludedTerms(
                    value.map((term) => {
                      return {
                        key: term,
                        text: term,
                        value: term,
                      };
                    })
                  );
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
                onChange={(event, { value }) => {
                  setExcludedTerms(
                    value.map((term) => {
                      return {
                        key: term,
                        text: term,
                        value: term,
                      };
                    })
                  );
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
              <DeleteSearchConfirmation
                title={title}
                onDeleteSeach={onDeleteHandler}
              ></DeleteSearchConfirmation>
              <div className="d-inline float-right">
                <Button onClick={onResetHanlder}>Reset</Button>
                <SaveSearchConfirmation
                  name={title}
                  onSaveSearch={onSaveHandler}
                ></SaveSearchConfirmation>
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
