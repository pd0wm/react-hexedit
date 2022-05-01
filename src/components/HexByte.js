import { Typography } from "@mui/material";
import { val_to_color } from "./helpers";

function HexByte(props) {
  const hex = props.value.toString(16).padStart(2, '0');
  const color = val_to_color(props.value);
  return (
    <Typography sx={{ fontFamily: 'Monospace' }} display="inline" color={color}>
      {hex}
    </Typography>
  );
}

export default HexByte;
