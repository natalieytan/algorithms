class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  return nodeSwapper(head, head);
}

function nodeSwapper(list: ListNode, referenceNode: ListNode): ListNode {
  const nextNode = referenceNode.next;
  if (nextNode === null) {
    return list;
  } else {
    referenceNode.next = nextNode.next;

    const newTail = list === referenceNode ? referenceNode : new ListNode(list.val, list.next);
    const newHead = nextNode.val;
    const newList = new ListNode(newHead, newTail);
    return nodeSwapper(newList, referenceNode);
  }
}
