import React, { useState } from "react";
import PropTypes from "prop-types";
import StepPanel from "./StepPanel";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const WidgetModal = (props) => {
  const { onClose, addWidget } = props;
  const [error, setError] = useState({});
  const [step, setStep] = useState(1);
  const [widget, updateWidget] = useState({ name: "", language: "none" });

  const onCloseModal = (event) => {
    event.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  const onChangeHandler = (value, event) => {
    let name = event.target.name;
    if (error[name]) {
      delete error[name];
      setError(error);
    }
    updateWidget({ ...widget, [name]: value });
  };

  const onNextStep = (nextStep) => (event) => {
    event.preventDefault();
    if (nextStep === 1) {
      setStep(nextStep);
    }

    if (widget.language && widget.language !== "none") {
      setStep(nextStep);
    } else {
      setError({ ...error, ["language"]: "Language required for create widget!" });
    }
  };

  const addWidgetHandler = (event) => {
    event.preventDefault();
    if (widget.name && widget.name !== "") {
      addWidget(widget);
    } else {
      setError({ ...error, ["name"]: "Name required for create widget!" });
    }
  };

  return (
    <div className="modal">
      <div className="modal-header d-flex">
        <h3 className="title">Step {step}</h3>
        <button className="modal-close" onClick={onCloseModal}>
          ✕
        </button>
      </div>
      <div className="modal-body">
        <StepPanel value={step} index={1}>
          <FirstStep widget={widget} error={error} onChange={onChangeHandler} />
        </StepPanel>
        <StepPanel value={step} index={2}>
          <SecondStep widget={widget} error={error} onChange={onChangeHandler} />
        </StepPanel>
      </div>
      <div className="modal-footer d-flex">
        {step === 1 && (
          <button className="btn btn-default" onClick={onNextStep(2)}>
            Next Step
          </button>
        )}

        {step === 2 && (
          <button className="btn btn-default" onClick={onNextStep(1)}>
            Back
          </button>
        )}

        {step === 2 && (
          <button data-testid="add-btn" className="btn btn-success" onClick={addWidgetHandler}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

StepPanel.propTypes = {
  // onClose function for close modal
  onClose: PropTypes.func,
  // addWidget function for add widget in localStorage
  addWidget: PropTypes.func,
};

export default WidgetModal;
