const insertItem = (widgetList, key = "_widget_list") => {
  localStorage.setItem(key, JSON.stringify(widgetList));
};

const getItem = (key = "_widget_list") => {
  const storeItem = localStorage.getItem(key);
  if (storeItem) return JSON.parse(storeItem);
  return null;
};

export const getWidgets = () => {
  return getItem();
};

export const setWidgets = (widgets) => {
  insertItem(widgets);
};
