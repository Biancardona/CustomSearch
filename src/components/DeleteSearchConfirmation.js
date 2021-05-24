import firebase from "firebase";
import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const DeleteSearchConfirmation = ({ title, onDeleteSeach }) => {
  const [open, setOpen] = React.useState(false);

  const onDeleteHandler = () => {
    const db = firebase.firestore();
    db.collection("searches").doc(title).delete();
    setOpen(false);
    if (onDeleteSeach) {
      onDeleteSeach();
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button disabled={title === "Unnamed"}>Delete</Button>}
    >
      <Modal.Header>Delete search "{title}"</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Do you want to delete search "{title}"?</Header>
          <p>This action is not reversible.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          content="Yes, delete it"
          labelPosition="right"
          icon="trash"
          onClick={() => onDeleteHandler()}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteSearchConfirmation;
