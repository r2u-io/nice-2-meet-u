/**
 * Create pairs of array of elements. Uneven array will result
 * in a "pair" of 3 elements (e.g. array of size 5 will return
 * 2 sub-arrays, one of size 2 and one of size 3)
 *
 * @param array Array of elements
 * @return Array of pairs of elements
 */
export function createPairs<T> (array: T[]): T[][] {
  function shuffle (xs: T[]) {
    return [...xs].sort(() => 0.5 - Math.random())
  }

  function pairs (xs: T[]): T[][] {
    const groups = []
    let skip = 2
    for (let i = 0; i < xs.length; i += skip) {
      if (i + skip === xs.length - 1) {
        skip = 3
      }
      const from = i
      const to = i + skip
      groups.push(xs.slice(from, to))
    }
    return groups
  }

  return pairs(shuffle(array))
}
