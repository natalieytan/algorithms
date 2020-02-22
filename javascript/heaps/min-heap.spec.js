const { MinHeap } = require("./min-heap");

describe("MinHeap", () => {
  describe("pop()", () => {
    describe("correctly removes from min-heap", () => {
      it("with example 1", () => {
        const heapArr = [2, 5, 7, 8, 10, 9];
        const heap = new MinHeap(heapArr);
        heap.pop();
        expect(heap.heapArr).toEqual([5, 8, 7, 9, 10]);
      });
    });
  });

  describe("push(number)", () => {
    describe("correctly inserts into min-heap", () => {
      it("with example 1", () => {
        const heapArr = [5, 14, 23, 32, 41, 87, 90, 50, 64, 53];
        const heap = new MinHeap(heapArr);
        heap.push(43);
        expect(heap.heapArr).toEqual([
          5,
          14,
          23,
          32,
          41,
          87,
          90,
          50,
          64,
          53,
          43
        ]);
      });

      it("with example 2", () => {
        const heapArr = [5, 14, 23, 32, 41, 87, 90, 50, 64, 53, 43];
        const heap = new MinHeap(heapArr);
        heap.push(18);
        expect(heap.heapArr).toEqual([
          5,
          14,
          18,
          32,
          41,
          23,
          90,
          50,
          64,
          53,
          43,
          87
        ]);
      });

      it("with example 3", () => {
        const heapArr = [5, 14, 18, 32, 41, 23, 90, 50, 64, 53, 43, 87];
        const heap = new MinHeap(heapArr);
        heap.push(2);
        expect(heap.heapArr).toEqual([
          2,
          14,
          5,
          32,
          41,
          18,
          90,
          50,
          64,
          53,
          43,
          87,
          23
        ]);
      });
    });
  });
});
