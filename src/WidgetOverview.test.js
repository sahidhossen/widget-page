// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import WidgetOverview from "./WidgetOverview";
import WidgetLists from "./Components/WidgetLists";
import WidgetModal from "./Components/WidgetModal";
import Modal from "./Components/Modal";

const widgets = [];
const widget = { name: "", language: "" };

test("shows the widget overview list and add widget button", () => {
  render(<WidgetOverview />);

  // Click on add widget button to show modal
  fireEvent.click(screen.getByText(/Add Widget/i));
});

test("Open modal with multi-step wizard", () => {
  // Add widget function
  const addWidget = jest.fn();

  // Render modal with multi-step funs
  render(
    <Modal open={true}>
      <WidgetModal addWidget={addWidget} />
    </Modal>
  );

  // Select first option from select field
  fireEvent.change(screen.getByTestId("language-select"), { target: { value: "english" } });
  widget.language = "english";
  // Then click on next step
  fireEvent.click(screen.getByText(/Next Step/i));

  // then change text field for widget name
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "English Languge" } });
  widget.name = "English Language";
  // then click on add button to add data to localstorage
  fireEvent.click(screen.getByTestId("add-btn"));
});

test("Add widget and render widget list ", () => {
  // Add widget to the widgets list
  widgets.unshift(widget);
  // Render widgetlists component with widgets
  const { getAllByTestId } = render(<WidgetLists widgets={widgets} />);
  const listItems = getAllByTestId("list-item");
  // Check if its render or not
  expect(listItems.length).toEqual(1);
});
