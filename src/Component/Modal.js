import React from "react";

export default function Modal({ handleModal, imageUrl }) {
  return (
    <div className="modal" onClick={handleModal}>
      <img src={imageUrl} alt="" />
    </div>
  );
}
