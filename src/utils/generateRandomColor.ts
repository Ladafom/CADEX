import { colorPalette } from "../app/lib/colorPalette";

export function generateRandomColor(): string {
  const keys = Object.keys(colorPalette).map(Number);
  const minKey = Math.min(...keys);
  const maxKey = Math.max(...keys);

  const randomKey = Math.floor(Math.random() * (maxKey - minKey + 1)) + minKey;
  return colorPalette[randomKey];
}