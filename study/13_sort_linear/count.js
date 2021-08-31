// 计数排序

function countingSort(array) {
    var len = array.length,
        B = [],
        C = [],
        min = max = array[0];

    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }

    for(let i = 0; i < C.length; i ++) {
        if (C[i]) {
            B.push(
                ...Array.from(new Array(C[i]), () => i)
            )
        }
    }

    return B;
}
var arr = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log(countingSort(arr)); //[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]