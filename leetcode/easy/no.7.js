/**
 *
 * @param {number} target
 * @return {number}
 */

//  [−2^31,  2^31 − 1]
function reverse(x) {
  if (x > 2 ** 31 - 1 || x < -(2 ** 31)) {
    return 0;
  }
  let c = x >= 0 ? "" : "-";
  const str = c ? String(x).slice(1) : String(x);
  const res = str.split("").reverse().join("").replace(/^0+/, "");
  if (res > 2 ** 31 - 1 || res < -(2 ** 31)) {
    return 0;
  }
  return Number(c + res);
}

c = reverse(-100120);
console.log(c);
