import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Portal from "../Portal";
import Backdrop from "./Backdrop";
import "../../css/modal.css";

const Modal = forwardRef((props, ref) => {
  const { children, open, onClose } = props;

  const onBackdropHandler = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  if (!open) return null;
  return (
    <Portal>
      <div className="modal-backspace" ref={ref}>
        <Backdrop open={open} onClick={onBackdropHandler} />
        {children}
      </div>
    </Portal>
  );
});

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
