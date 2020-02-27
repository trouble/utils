const hexToRGBA = (hex, opacity) => {
  const sanitizedHex = hex.replace('#', '');

  let r = 0;
  let g = 0;
  let b = 0;

  if (sanitizedHex.length === 3) {
    r = parseInt(`${sanitizedHex.substring(0, 1)}${sanitizedHex.substring(0, 1)}`, 16);
    g = parseInt(`${sanitizedHex.substring(1, 2)}${sanitizedHex.substring(1, 2)}`, 16);
    b = parseInt(`${sanitizedHex.substring(2, 3)}${sanitizedHex.substring(2, 3)}`, 16);
  }

  if (sanitizedHex.length === 6) {
    r = parseInt(sanitizedHex.substring(0, 2), 16);
    g = parseInt(sanitizedHex.substring(2, 4), 16);
    b = parseInt(sanitizedHex.substring(4, 6), 16);
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1})`;
};

export default hexToRGBA;
