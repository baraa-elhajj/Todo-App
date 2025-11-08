export const GetCurrentDateString = (timestamp) => {
  const date = new Date(timestamp);
  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const dateStr = date.toLocaleDateString("en-us", dateOptions);
  const timeStr = date.toLocaleTimeString("en-us", timeOptions);

  return `${dateStr} at ${timeStr}`;
};
