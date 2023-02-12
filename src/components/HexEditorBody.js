import { Component } from "react"
import Grid from "@mui/material/Grid"

import HexEditorRow from "./HexEditorRow";

class HexEditorBody extends Component {
  render() {
    const num_bytes = 16;
    return (
      <Grid container>
        {Array(Math.ceil(this.props.data.byteLength / num_bytes)).fill(0).map((_, i) => {
            const data = this.props.data.slice(i * num_bytes, (i + 1) * num_bytes);
            return <HexEditorRow data={data} addr={i * num_bytes} key={i + "-" + data}/>;
        })}
      </Grid>
    );
  }
}

export default HexEditorBody;
