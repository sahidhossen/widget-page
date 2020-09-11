import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const { index, widget, onDelete } = props;

  /**
   * On delete action call delete method from parent component
   * @param {number} index
   */
  const onDeleteHandler = (index) => (event) => {
    event.preventDefault();
    onDelete(index);
  };

  return (
    <div className="widget-list d-flex" data-testid="list-item">
      <div className="widget-name flex-2">{widget.name}</div>
      <div className="widget-language flex-2">{widget.language}</div>
      <div className="widget-list-action flex-1">
        <button className="btn btn-danger" onClick={onDeleteHandler(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

List.propTypes = {
  index: PropTypes.number,
  widget: PropTypes.object,
  onDelete: PropTypes.func,
};

export default List;
