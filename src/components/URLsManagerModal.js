import { FirestoreCollection } from "@react-firebase/firestore";
import firebase from "firebase";
import React, { useState } from "react";
import { Button, Confirm, Grid, Input, Modal, Table } from "semantic-ui-react";
import EditURLModal from "./EditURLModal";

const URLsManagerModal = () => {
  const [open, setOpen] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  const db = firebase.firestore();
  const collection = db.collection("urls");

  const save = ({ onSave = () => {} }) => {
    collection
      .doc()
      .set({
        name: name,
        url: url,
      })
      .then((search) => {
        if (onSave) {
          collection
            .doc(name)
            .get()
            .then((doc) => onSave({ name, ...doc.data() }));
        }
        setName("");
        setURL("");
      });
  };

  const remove = ({ id, name, url }) => {
    collection
      .doc(id)
      .delete()
      .then(() => {
        setOpenDeleteConfirmation(false);
      });
  };

  const update = ({ id, name, url }) => {
    console.log(name);
    collection.doc(id).set({
      name,
      url,
    });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Manage</Button>}
    >
      <Modal.Header>Manage URLs</Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Input
                fluid
                placeholder="Name"
                value={name}
                onChange={(e, { value }) => setName(value)}
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                fluid
                placeholder="URL"
                value={url}
                onChange={(e, { value }) => setURL(value)}
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button fluid primary onClick={save}>
                Save
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
      <Modal.Content>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>URL</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <FirestoreCollection path="/urls/">
              {(d) =>
                d.value
                  ? d.value.map((item, index) => (
                      <Table.Row key={d.ids[index]}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>
                          <a href={item.url}>{item.url}</a>
                        </Table.Cell>
                        <Table.Cell>
                          <EditURLModal
                            item={{ id: d.ids[index], ...item }}
                            onUpdate={update}
                          ></EditURLModal>
                          <Button
                            icon="trash"
                            color="red"
                            onClick={() => setOpenDeleteConfirmation(true)}
                          ></Button>
                          <Confirm
                            negative
                            content={"Do you want to delete this URL?"}
                            open={openDeleteConfirmation}
                            confirmButton="Yes, delete it"
                            onCancel={() => setOpenDeleteConfirmation(false)}
                            onConfirm={() =>
                              remove({ id: d.ids[index], ...item })
                            }
                          />
                        </Table.Cell>
                      </Table.Row>
                    ))
                  : null
              }
            </FirestoreCollection>
          </Table.Body>
        </Table>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default URLsManagerModal;
