const trimStringWithEllipsis = (string, limit) => {
  const shouldTrim = string.length > limit;
  if (!shouldTrim) return string;

  const trimmedString = shouldTrim ? string.substring(0, limit).trim() : string;
  const endsWithPeriod = trimmedString.lastIndexOf('.') === trimmedString.length - 1;
  const stringWithEllipsis = `${trimmedString}${endsWithPeriod ? '..' : '...'}`;
  return stringWithEllipsis;
};

export default trimStringWithEllipsis;
