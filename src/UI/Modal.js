import React from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop">{props.children}</div>;
};

const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      <Overlay>{props.children}</Overlay>
    </React.Fragment>
  );
};

export default Modal;

export { Overlay, Backdrop };
