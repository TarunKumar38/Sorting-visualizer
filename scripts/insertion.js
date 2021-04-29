import {sleep, setColor, getHeight } from './utils.js'


export async function insertionSort(arr, n, speed) {
  for (let i = 1; i < n; i++) {
    let temp = getHeight(arr, i);
    let j = i - 1;
    for (let ii = 0; ii < i; ii++) {
      setColor(arr, ii, "green");
    }

    while (j >= 0 && temp < getHeight(arr, j)) {
      let h1 = arr[j + 1];
      let h2 = getHeight(arr, j);
      setColor(arr, j, "blue");
      await sleep(speed);
      setColor(arr, j, "red");
      h1.style.height = h2 + "px";
      j--;
    }

    let h1 = arr[j + 1];
    h1.style.height = temp + "px";
  }

  for (let i = 0; i < n; i++) {
    if (arr[i].style.backgroundColor == "red") {
      await sleep(speed);
    }
    setColor(arr, i, "green");
  }
}