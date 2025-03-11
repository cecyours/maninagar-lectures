import React, { useState } from "react";
import ActionModal from "../components/ActionModal";

function ActionPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCancel = () => {
    console.log("User cancelled !!!");
    setShowDeleteModal(false)
  };

  const handleConfirm = () => {
    console.log("User Confirm !!!");
    setShowDeleteModal(false)

  };
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => {
          setShowDeleteModal(true);
        }}
      >
        Delete Book
      </button>

      <ActionModal
        title={<div>3 Idiots</div>}
        description={<div>This book is awe...</div>}
        showAttr={showDeleteModal}
        onHideAttr={() => {
          setShowDeleteModal(false);
        }}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default ActionPage;
