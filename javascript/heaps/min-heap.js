const { HeapHelper } = require("./heap-helper");

class MinHeap {
  constructor(heap) {
    this.heapArr = heap;
  }

  push(int) {
    this.heapArr = MinHeap.heapBubbleUpper(
      new MinHeap([...this.heapArr, int]),
      this.heapArr.length
    ).heapArr;
  }

  pop() {
    const newHeapArr = HeapHelper.heapArrSwapper(
      this.heapArr,
      0,
      this.heapArr.length - 1
    ).slice(0, -1);
    const newHeap = new MinHeap(newHeapArr);
    this.heapArr = MinHeap.heapBubbleDowner(newHeap, 0).heapArr;
  }

  getCurrentNode(idx) {
    return this.heapArr[idx];
  }

  getFirstChild(idx) {
    return this.heapArr[HeapHelper.getFirstChildIndex(idx)];
  }

  getSecondChild(idx) {
    return this.heapArr[HeapHelper.getSecondChildIndex(idx)];
  }

  getParent(idx) {
    return this.heapArr[HeapHelper.getParentIndex(idx)];
  }

  getSmallestChildIdx(idx) {
    if (
      this.numberOfChildren(idx) < 2 ||
      this.getFirstChild(idx) <= this.getSecondChild(idx)
    ) {
      return HeapHelper.getFirstChildIndex(idx);
    } else {
      return HeapHelper.getSecondChildIndex(idx);
    }
  }

  getSmallestChild(idx) {
    if (this.getFirstChild(idx) <= this.getSecondChild(idx)) {
      return this.getFirstChild(idx);
    } else {
      return this.getSecondChild(idx);
    }
  }

  numberOfChildren(idx) {
    const hasSecondChild =
      HeapHelper.getSecondChildIndex(idx) < this.heapArr.length;
    const hasFirstChild =
      HeapHelper.getFirstChildIndex(idx) < this.heapArr.length;
    return [hasFirstChild, hasSecondChild].reduce((a, c) => (c ? ++a : a), 0);
  }

  static heapBubbleDowner(heap, idx) {
    if (
      heap.numberOfChildren(idx) == 0 ||
      heap.getCurrentNode(idx) < heap.getSmallestChild(idx)
    ) {
      return heap;
    } else {
      const smallestChildIdx = heap.getSmallestChildIdx(idx);
      const newHeapArr = HeapHelper.heapArrSwapper(
        heap.heapArr,
        idx,
        smallestChildIdx
      );
      return this.heapBubbleDowner(new MinHeap(newHeapArr), smallestChildIdx);
    }
  }

  static heapBubbleUpper(heap, idx) {
    const parentIdx = HeapHelper.getParentIndex(idx);
    const invalidIdxs = idx > heap.heapArr.length - 1 || parentIdx < 0;
    if (invalidIdxs || heap.getParent(idx) < heap.getCurrentNode(idx)) {
      return heap;
    } else {
      const newIdx = HeapHelper.getParentIndex(idx);
      const newHeapArr = HeapHelper.heapArrSwapper(heap.heapArr, idx, newIdx);
      return MinHeap.heapBubbleUpper(new MinHeap(newHeapArr), newIdx);
    }
  }
}

module.exports = {
  MinHeap
};
