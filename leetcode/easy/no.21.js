function listNode(list) {
  const res = [];
  if (!list.length) return [];
  res.push({ value: list[0] });
  for (let i = 1; i < list.length; i++) {
    const item = { value: list[i] };
    res.at(-1).next = item;
    res.push(item);
  }

  return res;
}

function combine(l1, l2) {
  const res = [];
  let l1Key = 0;
  let l2Key = 0;
  if (!l1.length || !l2.length) {
    return [...l1, ...l2];
  }

  while (l1Key + 1 <= l1.length && l2Key + 1 <= l2.length) {
    let item;
    if (l1[l1Key].value > l2[l2Key].value) {
      item = { ...l2[l2Key] };
      l2Key += 1;
    } else {
      item = { ...l1[l1Key] };
      l1Key += 1;
    }
    if (res.length) {
      res.at(-1).next = item;
    }
    res.push(item);
  }

  if (l1Key + 1 > l1.length) {
    // l1 比 l2 长
    res.at(-1).next = l2[l2Key + 1];
    res.push(...l2.splice(l2Key + 1));
  } else {
    res.at(-1).next = l1[l1Key + 1];
    res.push(...l1.splice(l1Key + 1));
  }

  return res;
}

const l1 = listNode([1, 4, 7, 9, 11, 34, 65]);
const l2 = listNode([0, 4, 10]);

const res = combine(l1, l2);
console.log(res);
