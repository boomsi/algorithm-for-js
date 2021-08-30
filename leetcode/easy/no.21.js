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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function combine(l1, l2) {
  
}