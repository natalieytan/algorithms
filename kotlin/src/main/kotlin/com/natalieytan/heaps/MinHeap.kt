package com.natalieytan.heaps

import com.natalieytan.heaps.Heap.Companion.getParentIndex
import com.natalieytan.heaps.Heap.Companion.heapSwapper


class MinHeap<T : Comparable<T>>(override var heap: List<T>) : Heap<T> {
    companion object {
        fun <T : Comparable<T>> heapBubbleDowner(heap: MinHeap<T>, idx: Int): MinHeap<T> {
            val smallestChild = heap.getSmallestChild(idx)
            return if (smallestChild == null || heap.getNode(idx) < smallestChild) {
                heap
            } else {
                val newHeapValues = heapSwapper(heap.heap, idx, heap.getSmallestChildIdx(idx)!!)
                heapBubbleDowner(MinHeap(newHeapValues), heap.getSmallestChildIdx(idx)!!)
            }
        }

        fun <T : Comparable<T>> heapBubbleUpper(heap: MinHeap<T>, idx: Int): MinHeap<T> {
            val parentIndex = getParentIndex(idx)
            val invalidIndex = (idx > heap.heap.size - 1) || (parentIndex < 0)
            return if (invalidIndex || (heap.getParent(idx) < heap.getNode(idx))) {
                heap
            } else {
                val newHeapValues = heapSwapper(heap.heap, idx, parentIndex)
                heapBubbleUpper(MinHeap(newHeapValues), parentIndex)
            }
        }
    }

    fun push(item: T) {
        val newElements: List<T> = heap + listOf(item)
        val newHeap = heapBubbleUpper(MinHeap(newElements), heap.size)
        heap = newHeap.heap
    }

    fun pop() {
        val newElements = heapSwapper(heap, 0, heap.size - 1).slice(0..heap.size - 2)
        val newHeap = heapBubbleDowner(MinHeap(newElements), 0)
        heap = newHeap.heap
    }
}
