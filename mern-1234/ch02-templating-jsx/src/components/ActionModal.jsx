import React from "react";
import { Modal } from "react-bootstrap";
function ActionModal({
  showAttr,
  onHideAttr,
  title,
  description,
  onCancel,
  onConfirm,
}) 
{
  const tryHide = () => {
    onHideAttr();
  };

  return (
    <>
      <Modal show={showAttr} onHide={tryHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>

        <Modal.Footer>
          <button className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onConfirm}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ActionModal;
