import Animated from "react-native-reanimated";

export type SharedValues<T extends Record<string, string | number | boolean>> =
  {
    [K in keyof T]: Animated.SharedValue<T[K]>;
  };

export function getRandomInt(max: number) {
  const minCeiled = 0;
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
