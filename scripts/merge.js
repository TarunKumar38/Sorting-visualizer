import { sleep, setColor, getHeight } from "./utils.js";


async function merge(arr, lb, mid, ub, speed, temp) {
  let i = lb,
    j = mid + 1,
    k = lb;

  while (i <= mid && j <= ub) {
    let ii = getHeight(arr, i);
    let jj = getHeight(arr, j);

    if (jj > ii) {
      temp[k] = getHeight(arr, i);
      i++;
    } else {
      temp[k] = getHeight(arr, j);
      j++;
    }
    k++;
  }
  if (i <= mid) {
    while (i <= mid) {
      temp[k] = getHeight(arr, i);
      k++;
      i++;
    }
  } else {
    while (j <= ub) {
      temp[k] = getHeight(arr, j);
      k++;
      j++;
    }
  }

  for (i = lb; i <= ub; i++) {
    setColor(arr, i, "blue");
    await sleep(speed);
    arr[i].style.height = temp[i] + "px";
    setColor(arr, i, "red");
  }
}

export async function mergeSort(arr, lb, ub, speed, temp) {
  let mid = 0;
  mid = Math.trunc((lb + ub) / 2);
  if (lb < ub) {
    await mergeSort(arr, lb, mid, speed, temp);
    await mergeSort(arr, mid + 1, ub, speed, temp);
    await merge(arr, lb, mid, ub, speed, temp);
  }
}
