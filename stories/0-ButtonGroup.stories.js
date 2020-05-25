import React from "react";
import styled, { css } from "styled-components";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";

import { ButtonGroup } from "../src";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  decorators: [withKnobs, withA11y],
};

const StyledButton = styled.button`
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0.25rem 0.5rem;
  :disabled {
    cursor: not-allowed;
  }
  ${(props) =>
    props.isSelected
      ? css`
          background-color: #eeeeee;
          color: #000000;
        `
      : css`
          background-color: transparent;
          color: #000000;
        `}
`;

export function Default() {
  const [selected, setSelected] = React.useState([0]);
  const disabled = boolean("Disabled", false);

  function onClick(event, index) {
    setSelected([index]);
    action("onClick")(event, index);
  }

  return (
    <div>
      <ButtonGroup disabled={disabled} selected={selected} onClick={onClick}>
        <StyledButton>One</StyledButton>
        <StyledButton>Two</StyledButton>
        <StyledButton>Three</StyledButton>
      </ButtonGroup>
    </div>
  );
}
