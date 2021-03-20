import { Option } from "../utility/option";

export class MyLinkedList {
  constructor(public head: Option<number> = null, public tail: Option<MyLinkedList> = null) {}

  get(index: number): number {
    if (index < 0 || this.head === null) {
      return -1;
    } else if (index === 0) {
      return this.head;
    } else if (this.tail === null) {
      return -1;
    }
    return this.tail.get(index - 1);
  }

  addAtHead(val: number): void {
    this.tail = new MyLinkedList(this.head, this.tail);
    this.head = val;
  }

  addAtTail(val: number): void {
    if (this.head === null) {
      this.head = val;
    } else if (this.tail === null) {
      this.tail = new MyLinkedList(val, null);
    } else {
      this.tail.addAtTail(val);
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0) {
      return;
    } else if (index === 0) {
      this.tail = new MyLinkedList(this.head, this.tail);
      this.head = val;
    } else if (index === 1 && this.tail === null) {
      this.tail = new MyLinkedList(val, null);
    } else {
      this.tail?.addAtIndex(index - 1, val);
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0) {
      return;
    } else if (index === 0) {
      if (this.tail === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.tail.head;
        this.tail = this.tail.tail;
      }
    } else {
      this.tail?.deleteAtIndex(index - 1);
    }
  }
}
