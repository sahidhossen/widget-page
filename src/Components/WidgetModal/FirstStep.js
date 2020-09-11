import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const languageList = {
  english: "English",
  germany: "Germany",
  Bangla: "Bangla",
  Arabic: "Arabic",
};

const LanguageStep = (props) => {
  const {
    onChange,
    widget: { language },
    error,
  } = props;

  const onChangeHandler = (event) => {
    onChange(event.target.value, event);
  };

  let className = classnames("form-control", { "has-error": error.language });

  return (
    <div className="widget-step step-1">
      <div className="form-group">
        <label htmlFor="selectLanguage">Select Language</label>
        <select data-testid="language-select" name="language" className={className} value={language} onChange={onChangeHandler}>
          <option value="none" data-testid="language-option-0">
            Select Language
          </option>
          {Object.keys(languageList).map((key, i) => {
            return (
              <option key={key} value={key} data-testid={`language-option-${i + 1}`}>
                {languageList[key]}
              </option>
            );
          })}
        </select>
        {error.language && <p className="error-message">{error.language}</p>}
      </div>
    </div>
  );
};

LanguageStep.propTypes = {
  /**
   * onChange function for get changed values
   */
  onChange: PropTypes.func.isRequired,
  // widget data has all values (ex: name, language)
  widget: PropTypes.object,
  // Errors if any occurd
  error: PropTypes.object,
};

export default LanguageStep;
