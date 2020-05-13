import React from "react";
import styled, { css } from "styled-components";

import { ButtonGroup } from "../src";

export default {
  title: "ButtonGroup",
  component: ButtonGroup,
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

export const Default = () => {
  const [selected, setSelected] = React.useState([0]);

  return (
    <div>
      <ButtonGroup
        selected={selected}
        onClick={(event, index) => {
          setSelected([index]);
        }}
      >
        <StyledButton>One</StyledButton>
        <StyledButton>Two</StyledButton>
        <StyledButton>Three</StyledButton>
      </ButtonGroup>
    </div>
  );
};
