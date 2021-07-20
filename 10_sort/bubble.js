// function sort(list) {
//     const len = list.length
//     for(let i = 0; i < len; i ++) {
//         for(let j = i + 1; j < len; j ++) {

//         }
//     }
// }

function sort(list) {
  const len = list.length;

  for (let i = 0; i < len - 1; i++) {
    if (list[i] > list[i + 1]) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]];
    }
  }
}

sort([4, 2, 8, 2, 7, 4, 1]);
