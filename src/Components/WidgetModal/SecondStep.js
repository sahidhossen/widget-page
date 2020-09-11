import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SecondStep = (props) => {
  const {
    onChange,
    widget: { name },
    error,
  } = props;

  const onChangeHandler = (event) => {
    onChange(event.target.value, event);
  };

  let className = classnames("form-control", { "has-error": error.language });

  return (
    <div className="widget-step step-2">
      <div className="form-group">
        <label htmlFor="selectName">Name</label>
        <input onChange={onChangeHandler} type="text" name="name" id="selectName" value={name} placeholder="Type widget name" className={className} />
        {error.name && <p className="error-message">{error.name}</p>}
      </div>
    </div>
  );
};

SecondStep.propTypes = {
  /**
   * onChange function for get changed values
   */
  onChange: PropTypes.func.isRequired,
  // widget data has all values (ex: name, language)
  widget: PropTypes.object,
  // Errors if any occurd
  error: PropTypes.object,
};

export default SecondStep;
