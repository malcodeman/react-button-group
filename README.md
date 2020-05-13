# [react-button-group](http://react-button-group-storybook.surge.sh)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/react-button-group/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@malcodeman/react-button-group)](https://www.npmjs.com/package/@malcodeman/react-button-group)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

A button group is a set of two or more button segments. Within the control, all segments are equal in width. A button group is often used to switch between views of some data.

## Getting started

```sh
yarn add @malcodeman/react-button-group
# or
npm install --save @malcodeman/react-button-group
```

```jsx
import React from "react";
import { ButtonGroup } from "@malcodeman/react-button-group";

function App() {
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
}

export default App;
```

## License

[MIT](./LICENSE)
