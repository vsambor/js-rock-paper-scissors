/**
 * Holdes functions related to random scenarios.
 ***/

export function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * (array.length));

  return array[randomIndex];
}