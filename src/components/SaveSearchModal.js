import { FirestoreCollection } from "@react-firebase/firestore";
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

const SaveSearchModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Save</Button>}
    >
      <Modal.Header>Save a Search</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Input fluid placeholder="Search name"></Input>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button fluid primary onClick={() => setOpen(false)}>
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
