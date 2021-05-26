import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const EditURLModal = ({ url, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon="pencil"></Button>}
    >
      <Modal.Header>
        Edit URL <i>{url}</i>
      </Modal.Header>
      <Modal.Content>
        <Form.Input fluid label="Name" placeholder="Name" />
        <br />
        <Form.Input fluid label="URL" placeholder="URL" />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button primary onClick={() => setOpen(false)}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditURLModal;
