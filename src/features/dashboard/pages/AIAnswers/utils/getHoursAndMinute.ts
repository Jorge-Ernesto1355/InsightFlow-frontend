export const getHoursAndMiutes = (time: Date) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${hours}:${minutes.toString().padStart(2, "0")}`;
};
