import * as React from "react";
import PropTypes from "prop-types";

const Backdrop = React.forwardRef((props, ref) => {
  const { open, ...other } = props;
  return open ? <div className={"modal-backdrop"} aria-hidden ref={ref} {...other} /> : null;
});

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Backdrop;
