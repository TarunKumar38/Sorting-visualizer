import { sleep, setColor, getHeight, swap } from "./utils.js";


async function partition(arr, l, r, speed) {
  let pivot = getHeight(arr, r);
  let i = l - 1;
  setColor(arr, l, "blue");
  setColor(arr, r, "blue");

  for (let j = l; j < r; j++) {
    if (getHeight(arr, j) <= pivot) {
      i++;
      setColor(arr, j, "blue");
      await sleep(speed);
      setColor(arr, j, "red");
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, r);

  setColor(arr, l, "red");
  setColor(arr, r, "red");

  return i + 1;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function partitionRandom(arr, l, r, speed) {
  let rIndex = randomNumber(l, r);
  swap(arr, r, rIndex);
  return partition(arr, l, r, speed);
}

export async function quickSortRandom(arr, l, r, speed) {
  let pos = 0;
  if (l < r) {
    pos = await partitionRandom(arr, l, r, speed);
    await quickSortRandom(arr, l, pos - 1, speed);
    await quickSortRandom(arr, pos + 1, r, speed);
  }
}