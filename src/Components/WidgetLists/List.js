import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const { widget, onDelete } = props;

  /**
   * On delete action call delete method from parent component
   * @param {number} widgetId
   */
  const onDeleteHandler = (widgetId) => (event) => {
    event.preventDefault();
    onDelete(widgetId);
  };

  return (
    <div className="widget-list d-flex" data-testid="list-item">
      <div className="widget-name flex-2">{widget.name}</div>
      <div className="widget-language flex-2">{widget.language}</div>
      <div className="widget-list-action flex-1">
        <button className="btn btn-danger" onClick={onDeleteHandler(widget.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

List.propTypes = {
  widget: PropTypes.object,
  onDelete: PropTypes.func,
};

export default List;
