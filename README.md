# react-icon-system

### Usage

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
"start": "REACT_APP_ICON_PATH=../images/icons ...etc",
```

```jsx
// Code example
import React from 'react';
import Icon, { iconMap } from 'react-icon-system';

const YourComponent = props => (
  <Icon src={iconMap['alert']} />
)
```

### Pro tips

- Instead of using a static colour for your SVGs, use `currentColor`. This way you can dynamically change the icon colour by using CSS.

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
import React from 'react';
import Icon, { iconMap } from 'react-icon-system';

const icons = iconMap('../images/icons/')

const YourComponent = props => (
  <Icon src={icons['alert']} className="color-red" />
  <Icon src={icons['info']} className="color-blue" />
  <Icon src={icons['warning']} className="color-yellow" />
)
```