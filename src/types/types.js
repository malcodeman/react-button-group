import PropTypes from "prop-types";

const buttonGroupTypes = {
  selected: PropTypes.arrayOf(PropTypes.number),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export { buttonGroupTypes };

export default { buttonGroupTypes };
