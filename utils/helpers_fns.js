export function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getRandomPriceFormat() {
  return "$" + Math.floor(Math.random() * 100);
}

export function getRandomRating() {
  const RATINGS = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return RATINGS[Math.floor(Math.random() * RATINGS.length)];
}
