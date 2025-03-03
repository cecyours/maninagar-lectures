import  Modal  from "react-bootstrap/Modal";
import React from "react";

function CustomModal({
  title,
  description,
  show,
  onHide,
  onConfirmAction,
  onCancleButton,
}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onCancleButton}>Cancle</button>
        <button className="btn btn-primary" onClick={onConfirmAction}>Ok</button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
