import React from "react";

import { getAvatar } from "../utils/helpers";

const Modal = ({ avatar, toggleModal, isModalShown }) => {
  const [selected] = avatar;

  return (
    <>
      {isModalShown && (
        <div
          className="modal fixed top-0 left-0 w-screen h-screen bg-black modal-background flex items-center justify-center cursor-pointer animate__animated animate__flipInX"
          onClick={toggleModal}
        >
          <img
            src={getAvatar(selected.avatar)}
            alt={`${selected.name}'s Avatar`}
            className="w-screen h-screen"
          />
        </div>
      )}
    </>
  );
};

export default Modal;
