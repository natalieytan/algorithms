import { ListNode } from "./ListNode";

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }
  alternateSwapper(head, head.next);
  return head;
}

function alternateSwapper(oddLast: ListNode, evenLast: ListNode) {
  if (evenLast.next === null) {
    return;
  }
  const originalOddNext = oddLast.next;
  const originalEvenNext = evenLast.next;
  oddLast.next = new ListNode(originalEvenNext.val, originalOddNext);
  evenLast.next = evenLast.next.next;
  if (evenLast.next === null) {
    return;
  }
  alternateSwapper(oddLast.next, evenLast.next);
}
