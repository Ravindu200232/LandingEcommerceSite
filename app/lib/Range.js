import { priceRange } from "./filterData";

export function checkPriceRangerMin(value) {
  const range = priceRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );

  if (range) {
    return range.min;
  }

  return null; // or a default value like 0
}

export function checkPriceRangerMax(value) {
  const range = priceRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );

  if (range) {
    return range.max;
  }

  return null; // or a default value
}


import { perchPriceRange } from "./filterData";

export function checkPerchPriceMin(value) {
  const range = perchPriceRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );

  if (range) {
    return range.min;
  }

  return null; // or 0
}

export function checkPerchPriceMax(value) {
  const range = perchPriceRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );

  if (range) {
    return range.max;
  }

  return null; // or Infinity
}



import { perchSizeRange } from "./filterData";

export function checkPerchSizeMin(value) {
  const range = perchSizeRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );
  return range ? range.min : null;
}

export function checkPerchSizeMax(value) {
  const range = perchSizeRange.find(
    (range) => range.value.toLowerCase() === value.toLowerCase()
  );
  return range ? range.max : null;
}

