import React, { useState } from "react";
import CustomModal from "../components/CustomModal";

function ModalDemonstrate() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  return (
    <div>
      <div className="d-flex gap-5">
        <button
          className="btn btn-info"
          onClick={() => {
            setShowInfoModal(true);
          }}
        >
          Info Kites
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            setShowDeleteModal(true);
          }}
        >
          Delete Kites
        </button>
      </div>

      <CustomModal
        show={showInfoModal}
        onHide={() => {
          setShowInfoModal(false);
        }}
        title={<div className="text-info">Info Modal</div>}
        description={
          <>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            deleniti expedita aspernatur, tempora, cum iure dicta nemo est porro
            eum repellat, quasi corrupti reprehenderit ab sed quas doloribus
            eius officia?
          </>
        }
      />

      <CustomModal
        show={showDeleteModal}
        title={<div className="text-danger">Confirm Delete</div>}
        onHide={() => setShowDeleteModal(false)}
        description={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo
            aut, voluptatum porro{" "}
            <i className="text-success">kites are knwos</i> fugiat omnis harum
            voluptates culpa iure repellendus ea veniam enim accusantium est
            dignissimos eveniet maiores odit distinctio.
          </>
        }
      />
    </div>
  );
}

export default ModalDemonstrate;
