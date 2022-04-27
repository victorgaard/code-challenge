/**
 * Get year and month
 * from the UTC date
 */

function dateFormatter(param) {
  const date = new Date(param);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric"
  }).format;
  return formatter(date);
}

export default dateFormatter;
