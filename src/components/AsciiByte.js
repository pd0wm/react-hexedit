import { Typography } from "@mui/material";
import { val_to_color, is_printable_ascii } from "./helpers";

function AsciiByte(props) {
  const ascii = is_printable_ascii(props.value) ? String.fromCharCode(props.value) : '.';
  const color = val_to_color(props.value);
  return (
    <Typography sx={{ fontFamily: 'Monospace' }} display="inline" color={color}>
      {ascii}
    </Typography>
  )
};

export default AsciiByte;
