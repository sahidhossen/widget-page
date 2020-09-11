import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const StepPanel = (props) => {
  const { children, value, index, className, ...other } = props;
  const classNames = classnames("step-panel", className);
  return (
    <div className={classNames} hidden={value !== index} aria-labelledby={`step-${index}`} {...other}>
      {value === index && children}
    </div>
  );
};

StepPanel.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  // Value for current panel
  value: PropTypes.any,
  // Index number of the panel
  index: PropTypes.number,
  // Classnames for this panel
  className: PropTypes.string,
};

export default StepPanel;
