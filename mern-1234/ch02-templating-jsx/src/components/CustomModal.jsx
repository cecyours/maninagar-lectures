import React from "react";
import { Button, Modal } from "react-bootstrap";

function CustomModal({ show, onHide, title,description }) {
  return (
    <div>
      {" "}
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CustomModal;
