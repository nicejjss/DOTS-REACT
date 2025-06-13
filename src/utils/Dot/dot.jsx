export function calculateDotSpeed(dots, seconds, milliseconds) {
  const totalSeconds = seconds + milliseconds / 1000;
  if (totalSeconds === 0) return 0; // Prevent division by zero
  return (dots / totalSeconds).toFixed(2); // Calculate speed and round to 2 decimal places
}