import { Component } from "react"
import Grid from "@mui/material/Grid"
import { Typography } from "@mui/material";

import HexBytes from "./HexBytes";
import AsciiBytes from "./AsciiBytes";

class HexEditorRow extends Component {
  render() {
    return (
      <Grid container item spacing={2}>
        <Grid item xs={2}>
          <Typography sx={{ fontFamily: 'Monospace' }} color='text.secondary' align="right">
            0x{this.props.addr.toString(16).padStart(8, '0')}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <HexBytes value={this.props.data}/>
        </Grid>
        <Grid item xs={4}>
          <AsciiBytes value={this.props.data}/>
        </Grid>
      </Grid>
    );
  }
}

export default HexEditorRow;
