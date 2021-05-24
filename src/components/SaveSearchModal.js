import { FirestoreCollection } from "@react-firebase/firestore";
import firebase from "firebase";
import React, { useState } from "react";
import {
  Button,
  Dimmer,
  Grid,
  Input,
  Loader,
  Modal,
  Segment,
  Table,
} from "semantic-ui-react";

const SaveSearchModal = (props) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const saveSearch = () => {
    const db = firebase.firestore();
    db.collection("searches")
      .doc(name)
      .set({
        q: props.query,
        statesSearchArray: props.selectedURLs,
        includeWord: props.includedTerms.map((term) => term.value).join(" "),
        excludeWord: props.excludedTerms.map((term) => term.value).join(" "),
      })
      .then((search) => {
        setOpen(false);
        if (props.onSaveSearch) {
          db.collection("searches")
            .doc(name)
            .get()
            .then((doc) => props.onSaveSearch({ name, ...doc.data() }));
        }
      });
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Save As</Button>}
    >
      <Modal.Header>Save a Search</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Input
                fluid
                placeholder="Search name"
                value={name}
                onChange={(e, { value }) => setName(value)}
              ></Input>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button fluid primary onClick={() => saveSearch()}>
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
  );
};

export default SaveSearchModal;
