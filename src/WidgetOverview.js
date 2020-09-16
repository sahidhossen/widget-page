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
  let [deleteWidgetId, setDeleteWidget] = useState(null);

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
    const newWidgets = [widget, ...widgets];
    addWidget(newWidgets);
    setWidgets(newWidgets);
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
   * On delete set widget widgetId number and open alertModal
   * @param {number} widgetId
   */
  const onDeleteHandler = (widgetId) => {
    setDeleteWidget(widgetId);
  };

  /**
   * If actionName confirm then delete the widget and update localstore and state
   * Set delete index null whatever the action
   * @param {string} actionName action name (confirm|cancel)
   */
  const onAlertActionHandler = (actionName) => {
    if (actionName === "confirm") {
      const newWidget = widgets.filter((widget) => widget.id !== deleteWidgetId);
      addWidget(newWidget);
      setWidgets(newWidget);
    }
    setDeleteWidget(null);
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
      <Modal open={deleteWidgetId !== null}>
        <AlertModal onAction={onAlertActionHandler} />
      </Modal>
    </div>
  );
};

export default WidgetOverview;
