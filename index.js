import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <svg
        {...this.props}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: this.props.src }}
      />
    );
  }
}

export default Icon;
