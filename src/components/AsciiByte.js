import { Component } from "react"
import { Typography } from "@mui/material";
import { val_to_color, is_printable_ascii } from "./helpers";

class AsciiByte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      ascii: is_printable_ascii(props.value) ? String.fromCharCode(props.value) : '.',
      color: val_to_color(props.value),
    };
  }

  render() {
    return (
      <Typography sx={{ fontFamily: 'Monospace' }} display="inline" color={this.state.color}>
        {this.state.ascii}
      </Typography>
    )
  }
}

export default AsciiByte;
