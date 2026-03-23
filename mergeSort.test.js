import mergeSort from "./mergeSort.js"

test("Empty arr", () => {
    expect(mergeSort([])).toEqual([]);
})

test("Single item array", () => {
    expect(mergeSort([73])).toEqual([73]);
})

test("Odd number of items array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
})

test("Even number of items array", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("Big numbers array", () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
})