import { Typography } from "@mui/material";

import HexByte from "./HexByte";

function HexBytes(props) {
  return (
    <div>
      {props.value.map((byte, index) =>
        <span key={index + "-" + byte}>
          <HexByte value={byte}/>
          <Typography sx={{ fontFamily: 'Monospace'  }} display="inline">&nbsp;</Typography>
        </span>
      )}
    </div>
  );
}

export default HexBytes;
