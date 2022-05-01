import { Component } from "react"
import Grid from "@mui/material/Grid"

import HexEditorRow from "./HexEditorRow";

class HexEditorBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    };
  }

  render() {
    const num_bytes = 16;
    return (
      <Grid container spacing={0}>
        {Array(Math.ceil(this.state.data.length / num_bytes)).fill(0).map((_, i) =>
          <HexEditorRow data={this.state.data} addr={i * num_bytes} length={num_bytes} key={i * num_bytes + "-" + num_bytes}/>
        )}
      </Grid>
    );
  }
}

export default HexEditorBody;
