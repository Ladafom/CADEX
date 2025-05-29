
export function generateRandomPosition(): [number, number, number] {
  const x = Math.floor(Math.random() * 6);
  const y = Math.floor(Math.random() * 6);
  const z = Math.floor(Math.random() * 6);
  return [x, y, z];
}