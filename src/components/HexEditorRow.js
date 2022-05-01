import { Component } from "react"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material";

import HexBytes from "./HexBytes";
import AsciiBytes from "./AsciiBytes";

class HexEditorRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addr: props.addr,
      length: props.len,
      data: props.data.slice(props.addr, props.addr + props.length),
    };
  }

  render() {
    return (
      <Grid container item spacing={2}>
        <Grid item xs={2}>
          <Typography sx={{ fontFamily: 'Monospace' }} color='text.secondary' align="right">
            0x{this.state.addr.toString(16).padStart(8, '0')}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <HexBytes value={this.state.data}/>
        </Grid>
        <Grid item xs={4}>
          <AsciiBytes value={this.state.data}/>
        </Grid>
      </Grid>
    );
  }
}

export default HexEditorRow;
