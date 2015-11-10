/**
 * Created by zwhu on 15/11/10.
 */

let rangeArray = (begin, end) => Array(end - begin + 1).fill(0).map((v, i) => i + begin)

/**
 *
 * @param args
 * @returns {Array}
 */
export default (...args) => {

  let range = Array.isArray(args[0]) ? Array.from(args[0]) : rangeArray(args[0], args[1])
    , random = []
    , N = range.length

  while (N--) {
    let i = Math.random() * (N + 1) | 0
    random.push(range[i])
    range[i] = range[N]
  }
  return random
}

