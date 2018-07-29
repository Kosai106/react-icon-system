# react-icon-system

<div style="display: flex; flex-direction: column;">
  <img src="./react-icon-system.png" alt="React-icon-system setup illustration" />
  <div style="display: flex; justify-content: center;">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License MIT" style="margin-left: 4px; margin-right: 4px;" />
  <img src="https://img.shields.io/npm/v/react-icon-system.svg" alt="NPM version" style="margin-left: 4px; margin-right: 4px;" />
  <img src="https://img.shields.io/david/kosai106/react-icon-system.svg" alt="Dependencies" style="margin-left: 4px; margin-right: 4px;" />
  <img src="https://img.shields.io/npm/dw/react-icon-system.svg" alt="NPM Downloads/week" style="margin-left: 4px; margin-right: 4px;" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" style="margin-left: 4px; margin-right: 4px;" />
  <img src="https://img.shields.io/badge/code%20style-prettier-ff69b4.svg" alt="Code style" style="margin-left: 4px; margin-right: 4px;" />
  </div>
</div>

## Usage

### Installation

```bash
yarn add react-icon-system
```

### Example

```bash
# Folder structure example
src/
├── components/
│   └── YourComponent.js
└── images/
    └── icons/
        ├── alert.svg
        ├── info.svg
        └── warning.svg
```

```json
// package.json
"start": "REACT_APP_ICON_PATH=src/images/icons ...etc",
```

OR
```bash
# .env
REACT_APP_ICON_PATH=src/images/icons
```

```jsx
// Code
import React from 'react';
import Icon from 'react-icon-system';

const YourComponent = props => (
  <Icon src="alert" />
)
```

### Pro tips

Instead of using a static colour for your SVGs, use `currentColor`. This way you can dynamically change the icon colour by using CSS.

__Example:__
```css
.color-red {
  color: red;
}
.color-blue {
  color: blue;
}
.color-yellow {
  color: yellow;
}
```

```jsx
import React, { Fragment } from 'react';
import Icon from 'react-icon-system';

const YourComponent = props => (
  <Fragment>
    <Icon src="alert" className="color-red" />
    <Icon src="info" className="color-blue" />
    <Icon src="warning" className="color-yellow" />
  </Fragment>
)
```
