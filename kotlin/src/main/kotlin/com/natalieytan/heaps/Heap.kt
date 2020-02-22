package com.natalieytan.heaps

interface Heap<T: Comparable<T>> {
    var heap: List<T>

    companion object {
        fun getFirstChildIndex(idx: Int): Int = (idx * 2) + 1
        fun getSecondChildIndex(idx: Int): Int = (idx * 2) + 2
        fun getParentIndex(idx: Int): Int {
            return if(idx <= 0) {
                -1
            } else {
                (idx - 1) / 2
            }
        }

        fun <T>heapSwapper(heap: List<T>, idx1: Int, idx2: Int): List<T> {
            val heapCopy = heap.toMutableList()
            heapCopy[idx1] = heap[idx2]
            heapCopy[idx2] = heap[idx1]
            return heapCopy.toList()
        }
    }

    fun getNode(idx: Int): T = heap[idx]
    fun getFirstChild(idx: Int): T = heap[getFirstChildIndex(idx)]
    fun getSecondChild(idx: Int): T = heap[getSecondChildIndex(idx)]
    fun getParent(idx: Int): T = heap[getParentIndex(idx)]

    fun numberOfChildren(idx: Int): Int = when {
        getSecondChildIndex(idx) < heap.size -> 2
        getFirstChildIndex(idx) < heap.size -> 1
        else -> 0
    }

    fun getSmallestChildIdx(idx: Int): Int? = when {
        numberOfChildren(idx) == 0 -> null
        (numberOfChildren(idx) < 2) || (getFirstChild(idx) <= getSecondChild(idx)) -> getFirstChildIndex(idx)
        else -> getSecondChildIndex(idx)
    }

    fun getSmallestChild(idx: Int) = getSmallestChildIdx(idx)?.let { heap.get(it) }
}
