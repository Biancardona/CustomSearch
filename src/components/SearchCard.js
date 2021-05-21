import { FirestoreCollection } from "@react-firebase/firestore";
import firebase from "firebase";
import React, { useState } from "react";
import {
  Button,
  Card,
  Dimmer,
  Dropdown,
  Grid,
  Input,
  Loader,
  Modal,
  Segment,
  Message,
  Table,
} from "semantic-ui-react";
import { search } from "../services/search-engine";
import SaveSearchModal from "./SaveSearchModal";

const SearchCard = ({ onSearch = (results) => { } }) => {
  const [query, setQuery] = useState("");
  const [excludedTerms, setExcludedTerms] = useState([]);
  const [includedTerms, setIncludedTerms] = useState([]);
  const [selectedURLs, setSelectedURLs] = useState([]);
  const [open, setOpen] = useState(false);

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
    console.log(selectedURLs, excludedTerms, includedTerms);
    search({
      query,
      orTerms: selectedURLs,
      excludeTerms: excludedTerms.map((term) => term.value),
      exactTerms: includedTerms.map((term) => term.value),
    }).then((response) => onSearch(response.data.items));
  };

  const onSelectURLs = (event, { value }) => {
    setSelectedURLs(value);
  };

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header className="d-inline">Unnamed</Card.Header>
        <div className="d-inline float-right">
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Open</Button>}
          >
            <Modal.Header>Select a Search</Modal.Header>
            <Modal.Content>
              <Segment>
                <Dimmer active={false}>
                  <Loader size="medium">Loading</Loader>
                </Dimmer>
                <Table celled selectable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Query</Table.HeaderCell>
                      <Table.HeaderCell>Limited to URLs</Table.HeaderCell>
                      <Table.HeaderCell>Included terms</Table.HeaderCell>
                      <Table.HeaderCell>Excluded terms</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <FirestoreCollection path="/searches/">
                      {(d) =>
                        d.value
                          ? d.value.map((item, index) => (
                            <Table.Row>
                              <Table.Cell>{d.ids[index]}</Table.Cell>
                              <Table.Cell>{item.q}</Table.Cell>
                              <Table.Cell>
                                {item.statesSearchArray.join(", ")}
                              </Table.Cell>
                              <Table.Cell>{item.includeWord}</Table.Cell>
                              <Table.Cell>{item.excludeWord}</Table.Cell>
                            </Table.Row>
                          ))
                          : null
                      }
                    </FirestoreCollection>
                  </Table.Body>
                </Table>
              </Segment>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </Modal.Actions>
          </Modal>
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
                onAddItem={(event, data) => {
                  setExcludedTerms([
                    ...excludedTerms,
                    { key: data.value, text: data.value, value: data.value },
                  ]);
                }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column>

            <Message floating content='Avanced Syntax ' />

          </Grid.Column>
        </Grid>
      </Card.Content>
      <Card.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="red">Delete</Button>
              <div className="d-inline float-right">
                <Button>Reset</Button>
                <Button
                  onClick={() => {
                    const db = firebase.firestore();
                    db.collection("searches")
                      .doc(new Date().toTimeString())
                      .set({
                        q: query,
                        statesSearchArray: selectedURLs,
                        includeWord: includedTerms
                          .map((term) => term.value)
                          .join(" "),
                        excludeWord: excludedTerms
                          .map((term) => term.value)
                          .join(" "),
                      })
                      .then(console.log);
                  }}
                >
                  Save
                </Button>
                <SaveSearchModal></SaveSearchModal>
                <Button primary onClick={onSearchHandler}>
                  Search
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card >
  );
};
export default SearchCard;
