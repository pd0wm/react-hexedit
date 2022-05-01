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
          <>
            <HexByte value={byte} key={index + "-" + byte}/>
            <Typography sx={{ fontFamily: 'Monospace'  }} display="inline">&nbsp;</Typography>
          </>
        )}
      </div>
    )
  }
}

export default HexBytes;
