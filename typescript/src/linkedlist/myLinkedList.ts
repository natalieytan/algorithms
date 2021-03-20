import { Option } from "../utility/option";

export class MyLinkedList {
  constructor(public head: Option<number>, public tail: Option<MyLinkedList>) {}

  get(index: number): number {
    if (index < 0 || this.head === undefined) {
      return -1;
    } else if (index === 0) {
      return this.head;
    } else if (this.tail === undefined) {
      return -1;
    }
    return this.tail.get(index - 1);
  }

  addAtHead(val: number): void {
    this.tail = new MyLinkedList(this.head, this.tail);
    this.head = val;
  }

  addAtTail(val: number): void {
    if (this.head === undefined) {
      this.head = val;
    } else if (this.tail === undefined) {
      this.tail = new MyLinkedList(val, undefined);
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
    } else if (index === 1 && this.tail === undefined) {
      this.tail = new MyLinkedList(val, undefined)
    } else {
      this.tail?.addAtIndex(index - 1, val);
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0) {
      return;
    } else if (index === 0) {
      this.head = this.tail?.head;
      this.tail = this.tail?.tail;
    } else {
      this.tail?.deleteAtIndex(index - 1);
    }
  }
}
