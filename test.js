'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
                largest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
                largest = rightChildIndex;
            }
            if (largest === index) break;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function calculateTikTokShoppingCost(vouchersCount, prices) {
    const maxHeap = new MaxHeap();
    
    // Insert all prices into the max heap
    for (const price of prices) {
        maxHeap.insert(price);
    }

    // Apply the vouchers
    for (let i = 0; i < vouchersCount; i++) {
        let highestPrice = maxHeap.extractMax();  // Get the most expensive item
        highestPrice = highestPrice / 2;  // Apply the voucher (halve the price)
        maxHeap.insert(highestPrice);  // Push the new price back into the heap
    }

    // Sum up the total cost after all vouchers have been applied
    let totalCost = 0;
    while (!maxHeap.isEmpty()) {
        totalCost += maxHeap.extractMax();
    }

    return Math.floor(totalCost);  // Return the total cost, floored to the nearest integer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const vouchersCount = parseInt(readLine().trim(), 10);
    const pricesCount = parseInt(readLine().trim(), 10);

    let prices = [];
    for (let i = 0; i < pricesCount; i++) {
        const pricesItem = parseInt(readLine().trim(), 10);
        prices.push(pricesItem);
    }

    const result = calculateTikTokShoppingCost(vouchersCount, prices);
    ws.write(result + '\n');
    ws.end();
}
