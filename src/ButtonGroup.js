import React from "react";

import types from "./types";

function ButtonGroup(props) {
  const { children, disabled, selected, onClick } = props;
  const childArray = React.Children.toArray(children);

  function isSelected(selected, index) {
    if (!Array.isArray(selected) && typeof selected !== "number") {
      return false;
    }
    if (Array.isArray(selected)) {
      return selected.includes(index);
    }
    return selected === index;
  }

  if (childArray.length < 2) {
    console.warn(
      `[react-button-group] Expected more than 1 child, found ${childArray.length}`
    );
  }

  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      console.error(
        `[react-button-group] Expected HTML child element, got ${typeof child}`
      );
      return null;
    }
    return React.cloneElement(child, {
      ...child.props,
      disabled: disabled || child.props.disabled,
      isSelected: isSelected(selected, index),
      onClick: (event) => {
        if (disabled) {
          return;
        }
        if (child.props.onClick) {
          child.props.onClick(event);
        }
        if (onClick) {
          onClick(event, index);
        }
      },
    });
  });
}

ButtonGroup.propTypes = types.buttonGroupTypes;

ButtonGroup.defaultProps = types.buttonGroupDefaults;

export default ButtonGroup;
