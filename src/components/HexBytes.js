import { Typography } from "@mui/material";

import HexByte from "./HexByte";

function HexBytes(props) {
  return (
    <div>
      {Array(Math.ceil(props.value.byteLength)).fill(0).map((_, i) =>
        <span key={i + "-" + props.value[i]}>
          <HexByte value={props.value[i]}/>
          <Typography sx={{ fontFamily: 'Monospace'  }} display="inline">&nbsp;</Typography>
        </span>
      )}
    </div>
  );
}

export default HexBytes;
