import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import ReactDOM from 'react-dom';
import { useState } from "react";
import Modal from "react-modal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function ModalApp({ editOnClick }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [deleteOption, setDelete] = useState(false);
  const onclickDelete = () => {
    setDelete(!deleteOption);
  };
  const onDeleteClick = () => {
    editOnClick();
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
    setDelete(false);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="plot">
        {deleteOption ? (
          <FontAwesomeIcon icon={faTrash} onClick={openModal} />
        ) : (
          <FontAwesomeIcon icon={faEllipsis} onClick={onclickDelete} />
        )}
      </div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="delete-request">
          Are you sure want to delete?
          <div className="pop-up-message">
            <button onClick={closeModal} className="reject-delete">
              <b>Close</b>
            </button>
            <button onClick={onDeleteClick} className="accept-delete">
              <b>Delete</b>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModalApp;
