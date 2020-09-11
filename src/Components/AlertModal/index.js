import React from "react";

const AlertModal = (props) => {
  const { onAction, message = "Are you sure?" } = props;

  const onActionHandler = (actionName) => (event) => {
    event.preventDefault();
    onAction(actionName);
  };
  return (
    <div className="modal alert-modal">
      <div className="modal-body">
        <h3 className="title">{message}</h3>
      </div>
      <div className="modal-footer">
        <button className="btn btn-default" onClick={onActionHandler("cancel")}>
          No
        </button>
        <button className="btn btn-danger" onClick={onActionHandler("confirm")}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
