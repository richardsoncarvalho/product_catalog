export function totalRating() {
  return [...new Array(5)].map((_, index) => ({
    id: index,
    value: index + 1
  }))
}
