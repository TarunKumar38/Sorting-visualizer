import {sleep, setColor, getHeight, swap} from './utils.js'


export async function bubbleSort(arr, n, speed) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let h1 = getHeight(arr, j);
      let h2 = getHeight(arr, j + 1);
      setColor(arr, j, "blue");
      setColor(arr, j + 1, "blue");
      await sleep(speed);
      if (h1 > h2) {
        swap(arr, j, j + 1);
      }
      setColor(arr, j, "red");
      setColor(arr, j + 1, "red");
    }
    setColor(arr, n - i - 1, "green");
    await sleep(speed);
  }
  setColor(arr, 0, "green");
}