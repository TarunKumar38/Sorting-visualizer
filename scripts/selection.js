import {sleep, setColor, getHeight, swap} from './utils.js'


export async function selectionSort(arr, n, speed) {
  for (let i = 0; i < n - 1; i++) {
    let min_index = i;
    if (i > 0) {
      setColor(arr, i - 1, "green");
    }
    for (let j = i; j < n; j++) {
      let h1 = getHeight(arr, j);
      let h2 = getHeight(arr, min_index);

      arr[j].style.backgroundColor = "blue";
      await sleep(speed);
      if (h1 < h2) {
        min_index = j;
      }
      arr[j].style.backgroundColor = "red";
    }

    setColor(arr, i, "yellow");
    setColor(arr, min_index, "yellow");
    await sleep(speed);

    swap(arr, i, min_index);
    setColor(arr, i, "red");
    setColor(arr, min_index, "red");
  }
  setColor(arr, n - 2, "green");
  setColor(arr, n - 1, "green");
}