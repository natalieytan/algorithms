import { ListNode } from "./ListNode";

export function removeElements(head: ListNode | null, val: number): ListNode | null {
  function removeElementHelper(head: ListNode | null): ListNode | null {
    if (head === null) {
      return null;
    } else if (head?.val === val) {
      return removeElementHelper(head.next);
    } else {
      return new ListNode(head.val, removeElementHelper(head.next));
    }
  }

  return removeElementHelper(head);
}
