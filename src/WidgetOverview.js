import React, { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import WidgetModal from "./Components/WidgetModal";
import AlertModal from "./Components/AlertModal";
import WidgetLists from "./Components/WidgetLists";
import { setWidgets, getWidgets } from "./Store";
import "./css/widget-main.css";

const WidgetOverview = () => {
  const [open, setOpen] = useState(false);
  let [widgets, addWidget] = useState([]);
  let [deleteIndex, setDeleteIndex] = useState(null);

  /**
   * Load data from localstorage when loading component
   */
  useEffect(() => {
    const _widgets = getWidgets();
    if (_widgets) {
      addWidget(_widgets);
    }
  }, []);

  /**
   * Add object to the localstorage and update current state
   * After add then close modal
   * @param {object} widget widget object
   */
  const onAddWidget = (widget) => {
    widgets.unshift(widget);
    addWidget(widgets);
    setWidgets(widgets);
    setOpen(false);
  };

  /**
   * open modal
   * @param {object} event
   */
  const openModal = (event) => {
    event.preventDefault();
    setOpen(true);
  };
  /**
   * Close modal
   */
  const onClose = () => {
    setOpen(false);
  };

  /**
   * On delete set widget index number and open alertModal
   * @param {number} index
   */
  const onDeleteHandler = (index) => {
    setDeleteIndex(index);
  };

  /**
   * If actionName confirm then delete the widget and update localstore and state
   * Set delete index null whatever the action
   * @param {string} actionName action name (confirm|cancel)
   */
  const onAlertActionHandler = (actionName) => {
    if (actionName === "confirm") {
      widgets.splice(deleteIndex, 1);
      addWidget(widgets);
      setWidgets(widgets);
    }
    setDeleteIndex(null);
  };

  return (
    <div className="widget-container">
      <div className="widget-header d-flex item-center">
        <div className="widget-title">
          <h3 className="title">Widget List</h3>
        </div>
        <div className="widget-action">
          <button className="btn btn-default" onClick={openModal}>
            Add-Widget
          </button>
        </div>
      </div>

      <WidgetLists widgets={widgets} onDelete={onDeleteHandler} />

      <Modal open={open}>
        <WidgetModal onClose={onClose} addWidget={onAddWidget} />
      </Modal>
      <Modal open={deleteIndex !== null}>
        <AlertModal onAction={onAlertActionHandler} />
      </Modal>
    </div>
  );
};

export default WidgetOverview;
