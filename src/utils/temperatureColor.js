export const getTemperatureColor = (temperature) => {
  if (temperature < 15) return '#ACD7FF';
  if (temperature < 25) return '#F3D296';
  if (temperature >= 25) return '#FF8450';
};