// 快排
function sort_quick(list) {

}

function loop(list, pivot = list[0], res = [pivot]) {
    for(let i = 1; i =< list.length; i ++) {
        if (list[i] < pivot) {
            res.unshift(list[i])
        } else {
            res.push(list[i])
        }
    }
}
