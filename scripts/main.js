import { bubbleSort } from "./bubble.js";
import { selectionSort } from "./selection.js";
import { insertionSort } from "./insertion.js";
import { mergeSort } from "./merge.js";
import { quickSort } from "./quick1.js";
import { quickSortRandom } from "./quick2.js";
import {
  createArray,
  createTempForMergeSort,
  shuffle,
  setGreen,
  newArray,
  reverse,
} from "./utils.js";

let n = 50;
let arr = [];
let speed = 10;
let width = 10;
let spacing = 2;
let temp = [];

createArray(arr, n, width, spacing);
temp = createTempForMergeSort(arr);

document
  .querySelector(".shuffle")
  .addEventListener("click", () => shuffle(arr, n, speed));

document.querySelector(".new_array").addEventListener("click", function () {
  arr = newArray(arr, n, width, spacing);
});

document
  .querySelector(".reverse")
  .addEventListener("click", () => reverse(arr, n, speed));

document
  .querySelector(".bubble_sort")
  .addEventListener("click", () => bubbleSort(arr, n, speed));

document
  .querySelector(".selection_sort")
  .addEventListener("click", () => selectionSort(arr, n, speed));

document
  .querySelector(".insertion_sort")
  .addEventListener("click", () => insertionSort(arr, n, speed));

document
  .querySelector(".merge_sort")
  .addEventListener("click", async function () {
    await mergeSort(arr, 0, n - 1, speed, temp);
    setGreen(arr, n, 10);
  });

document
  .querySelector(".quick_sort1")
  .addEventListener("click", async function () {
    await quickSort(arr, 0, n - 1, speed);
    setGreen(arr, n, 10);
  });

document
  .querySelector(".quick_sort2")
  .addEventListener("click", async function () {
    await quickSortRandom(arr, 0, n - 1, speed);
    setGreen(arr, n, 10);
  });

document.querySelector(".elements").addEventListener("input", function () {
  let size = document.querySelector(".elements").value;
  arr = newArray(arr, size, width, spacing);
  n = arr.length;
});

document.querySelector(".speed").addEventListener("change", async function () {
  let sp = document.querySelector(".speed").value;
  speed = 200 - sp + 10;
});
