export function is_printable_ascii(value) {
  return value >= 31 && value <= 126;
}

export function val_to_color(value) {
  if (value === 0xff) {
    return 'error.light';
  } else if (value === 0x00) {
    return 'text.secondary';
  } else if (is_printable_ascii(value)) {
    return 'primary.light';
  } else {
    return 'text.primary';
  }
}
