import React from "react";
import PropTypes from "prop-types";
import List from "./List";
import EmptyWidget from "../EmptyWidget";

const WidgetLists = (props) => {
  const { widgets, onDelete } = props;

  const onDeleteHandler = (index) => {
    onDelete(index);
  };

  return (
    <div className="widget-lists d-flex">
      {widgets.length === 0 && <EmptyWidget />}
      {widgets.length > 0 &&
        widgets.map((widget, index) => {
          return <List widget={widget} index={index} key={index + 1} onDelete={onDeleteHandler} />;
        })}
    </div>
  );
};

WidgetLists.propTypes = {
  // All widgets list
  widgets: PropTypes.array,
  // Delete with function
  onDelete: PropTypes.func,
};

export default WidgetLists;
