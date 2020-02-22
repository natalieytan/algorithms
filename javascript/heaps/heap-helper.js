class HeapHelper {
  static getFirstChildIndex(idx) {
    return idx * 2 + 1;
  }

  static getSecondChildIndex(idx) {
    return idx * 2 + 2;
  }

  static getParentIndex(idx) {
    return Math.floor((idx - 1) / 2);
  }

  static heapArrSwapper(heapArr, idx1, idx2) {
    const newHeapArr = [...heapArr];
    newHeapArr[idx1] = heapArr[idx2];
    newHeapArr[idx2] = heapArr[idx1];
    return newHeapArr;
  }
}

module.exports = {
  HeapHelper
};
