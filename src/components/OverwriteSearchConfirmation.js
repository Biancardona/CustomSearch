import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const OverwriteSearchConfirmation = ({
  title,
  onOverwriteSearch,
  onCancel,
  open,
}) => {
  return (
    <Modal onClose={() => onCancel()} open={open}>
      <Modal.Header>Overwirte search "{title}"</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Do you want to overwrite the search {title}?</Header>
          <p>This action is not reversible.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => onCancel()}>Cancel</Button>
        <Button onClick={() => onOverwriteSearch()} primary>
          Yes, overwrite it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default OverwriteSearchConfirmation;
