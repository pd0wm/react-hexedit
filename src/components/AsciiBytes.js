import { Component } from "react"

import AsciiByte from "./AsciiByte";

class AsciiBytes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  render() {
    return (
      <div>
        {this.state.value.map((byte, index) =>
          <AsciiByte value={byte} key={index + "-" + byte}/>
        )}
      </div>
    )
  }
}

export default AsciiBytes;
