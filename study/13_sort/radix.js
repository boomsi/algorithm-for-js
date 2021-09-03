// 基数排序
// 以数字位数为循环，根据数字放到数组位置，从个位循环到最高位

function radixSort(arr) {
    let max = arr[0],
        len = arr.length,
        res = [...arr];

    for (let i = 0; i < len; i++) {
        max = max > arr[i] ? max : arr[i];
    }
    let count = max.toString().length;

    for (let i = count - 1; i >= 0 ; i--) {
        const tmp = [];
        for (let j = 0; j < res.length; j++) {
            const index = res[j].toString().padStart(count, 0)[i] || 0;
            if (tmp[index]) {
                tmp[index].push(res[j])
            } else {
                tmp[index] = [res[j]]
            }
        }
        res = tmp.flat()
    }
    return res
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(radixSort(arr,2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
