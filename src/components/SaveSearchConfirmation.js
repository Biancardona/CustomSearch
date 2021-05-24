import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const SaveSearchConfirmation = (props) => {
  const [open, setOpen] = React.useState(false);

  const onSaveHandler = () => {
    setOpen(false);
    if (props.onSaveSearch) {
      props.onSaveSearch();
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button disabled={props.name === "Unnamed"}>Save</Button>}
    >
      <Modal.Header>Save search "{props.name}"</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>
            Do you want to save the changes made to this search "{props.name}"?
          </Header>
          <p>This action is not reversible.</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => onSaveHandler()} primary>
          Yes, save it
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SaveSearchConfirmation;
