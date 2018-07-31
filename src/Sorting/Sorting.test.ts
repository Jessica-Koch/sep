import {bubbleSort, selectionSort} from "./Sorting";

describe("Sorting", () => {
  describe("selectionSort", () => {
    test("it should handle an empty array", () => {
      expect(selectionSort([])).toEqual([]);
    });

    test("it should sort an array of numbers", () => {
      expect(selectionSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("bubbleSort", () => {
    test("it should handle an empty array", () => {
      expect(bubbleSort([])).toEqual([]);
    });

    test("it should be able to sort an array of numbers", () => {
      expect(bubbleSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });
});