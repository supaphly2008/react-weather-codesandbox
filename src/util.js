const dayNames = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
};

export const getDayNames = (ms) => {
  const day = new Date(ms * 1000).getDay();
  return dayNames[day];
};

export const roundOffWeather = (temp) => {
  return Math.round(temp);
};
