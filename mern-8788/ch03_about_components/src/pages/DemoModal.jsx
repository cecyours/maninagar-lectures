import React, { useState } from "react";
import CustomModal from "../components/CustomModal";
import DemoCreatePortal from "./DemoCreatePortal";

function DemoModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = async () => {
    setIsOpenModal(true);
  };

  const handleSavingFile = async () => {
    console.log("saving file...");

    setIsOpenModal(false);
  };

  const handleCancle = async () => {
    console.log("user cancle the save");
    setIsOpenModal(false);
  };

  const handleDeleteModalOpen = async () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalConfirm = async () => {
    console.log("deleting file...");
    setIsDeleteModalOpen(false);
  };
  const handleDeleteModalCancle = async () => {
    console.log("cancle delete file...");
    setIsDeleteModalOpen(false);
  };
  return (
    <div>
      <h1>Sample Demo of Modal</h1>

      <div className="d-flex gap-5">
        <button onClick={openModal} className="btn btn-success">
          Save File
        </button>

        <button onClick={handleDeleteModalOpen} className="btn btn-danger">
          Delete File
        </button>
      </div>
      <div>
        Portal demo
        <DemoCreatePortal />
      </div>

      <CustomModal
        show={isOpenModal}
        onHide={() => {
          setIsOpenModal(false);
        }}
        title={"Save New File"}
        description={"are you want to save new File ??"}
        onConfirmAction={handleSavingFile}
        onCancleButton={handleCancle}
      />

      <CustomModal
        show={isDeleteModalOpen}
        onHide={() => {
          setIsDeleteModalOpen(false);
        }}
        title="Delete File"
        description={"Are you sure, to delete file"}
        onConfirmAction={handleDeleteModalConfirm}
        onCancleButton={handleDeleteModalCancle}
      />
    </div>
  );
}

export default DemoModal;
