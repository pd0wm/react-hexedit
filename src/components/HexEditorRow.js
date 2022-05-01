import { Component } from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import { Typography } from "@mui/material";

import HexBytes from "./HexBytes";
import AsciiBytes from "./AsciiBytes";

class HexEditorRow extends Component {
  render() {
    const row_data = [0x31, 0x00, 0x5e, 0x89, 0xff, 0x83, 0xe4, 0xf0, 0x50, 0x54, 0x52, 0xe8, 0x22, 0x00, 0x00, 0x00, 0x81];
    const addr = 0x0010;

    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card>
              <Typography sx={{ fontFamily: 'Monospace' }} color='text.secondary' align="right">
                0x{addr.toString(16).padStart(8, '0')}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <HexBytes value={row_data}/>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <AsciiBytes value={row_data}/>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HexEditorRow;
