import { Component } from "react"
import { Typography } from "@mui/material";

import HexByte from "./HexByte";

class HexBytes extends Component {
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
          <span key={index + "-" + byte}>
            <HexByte value={byte}/>
            <Typography sx={{ fontFamily: 'Monospace'  }} display="inline">&nbsp;</Typography>
          </span>
        )}
      </div>
    )
  }
}

export default HexBytes;
