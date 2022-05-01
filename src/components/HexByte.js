import { Component } from "react"
import { Typography } from "@mui/material";
import { val_to_color } from "./helpers";

class HexByte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hex: props.value.toString(16).padStart(2, '0'),
      color: val_to_color(props.value),
    };
  }

  render() {
    return (
      <Typography sx={{ fontFamily: 'Monospace' }} display="inline" color={this.state.color}>
        {this.state.hex}
      </Typography>
    )
  }
}

export default HexByte;
