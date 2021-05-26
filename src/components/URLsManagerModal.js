import React, { useState } from "react";
import { Button, Confirm, Grid, Input, Modal, Table } from "semantic-ui-react";
import EditURLModal from "./EditURLModal";

const URLsManagerModal = () => {
  const [open, setOpen] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

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
              <Input fluid placeholder="Name" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Input fluid placeholder="URL" />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button fluid primary>
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
            <Table.Row>
              <Table.Cell>California</Table.Cell>
              <Table.Cell>
                <a href={"https://www.pharmacy.com.ca"}>www.pharmacy.com.ca</a>
              </Table.Cell>
              <Table.Cell>
                <EditURLModal></EditURLModal>
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
                  onConfirm={() => setOpenDeleteConfirmation(false)}
                />
              </Table.Cell>
            </Table.Row>
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
