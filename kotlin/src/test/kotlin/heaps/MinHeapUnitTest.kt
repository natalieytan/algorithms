package heaps

import com.natalieytan.heaps.MinHeap

import org.junit.Test

import org.junit.Assert.*

class MinHeapUnitTest {
    @Test
    fun pops_correctly() {
        val heapArr = listOf(2, 5, 7, 8, 10, 9)
        val minHeap = MinHeap(heapArr)
        minHeap.pop()

        assertEquals(listOf(5, 8, 7, 9, 10), minHeap.heap)
    }

    @Test
    fun pushes_correctly_example1() {
        val heapArr = listOf(5, 14, 23, 32, 41, 87, 90, 50, 64, 53)
        val minHeap = MinHeap(heapArr)
        minHeap.push(43)

        assertEquals(
            listOf(
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
            ), minHeap.heap
        )
    }

    @Test
    fun pushes_correctly_example2() {
        val heapArr = listOf(5, 14, 23, 32, 41, 87, 90, 50, 64, 53, 43)
        val minHeap = MinHeap(heapArr)
        minHeap.push(18)

        assertEquals(
            listOf(
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
            ), minHeap.heap
        )
    }

    @Test
    fun pushes_correctly_example3() {
        val heapArr = listOf(5, 14, 18, 32, 41, 23, 90, 50, 64, 53, 43, 87)
        val minHeap = MinHeap(heapArr)
        minHeap.push(2)

        assertEquals(
            listOf(
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
            ), minHeap.heap
        )
    }
}
