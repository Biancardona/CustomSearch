import React, { useState } from "react";
import { Button, Form, Modal } from "semantic-ui-react";

const EditURLModal = ({ item, onUpdate = () => {} }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(item.name);
  const [url, setURL] = useState(item.url);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon="pencil"></Button>}
    >
      <Modal.Header>
        Edit URL <i>{item.url}</i>
      </Modal.Header>
      <Modal.Content>
        <Form.Input
          fluid
          label="Name"
          placeholder="Name"
          value={name}
          onChange={(e, { value }) => setName(value)}
        />
        <br />
        <Form.Input
          fluid
          label="URL"
          placeholder="URL"
          value={url}
          onChange={(e, { value }) => setURL(value)}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          primary
          onClick={() => {
            setOpen(false);
            onUpdate({ id: item.id, name, url });
          }}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EditURLModal;
