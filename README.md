# react-icon-system

### Usage

```bash
# Folder structure example
components
  ⨽ YourComponent.js
images
  ⨽ icons
    ⨽ alert.svg
    ⨽ info.svg
    ⨽ warning.svg
```

```jsx
// Code example
import React from "react";
import Icon, { iconMap } from "react-icon-system";

const icons = iconMap('../images/icons/')

const YourComponent = props => (
  <Icon src={icons['alert']} />
)
```