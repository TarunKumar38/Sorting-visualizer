export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getHeight(arr, i) {
  return Number(arr[i].style.height.substr(0, arr[i].style.height.length - 2));
}

export function setColor(arr, i, c) {
  arr[i].style.backgroundColor = c;
}

export function randomHeight() {
  return String(Number(Math.trunc(Math.random() * 300) + 1) + "px");
}

export function swap(arr, i, j) {
  let temp = arr[i].style.height;
  arr[i].style.height = arr[j].style.height;
  arr[j].style.height = temp;
}

export function addComponent(arr, width, spacing) {
  let comp = document.createElement("div");
  comp.classList.add("element");
  comp.style.height = randomHeight();
  comp.style.width = width + "px";
  comp.style.marginLeft = spacing + "px";

  let arrEl = document.querySelector(".array");
  arrEl.appendChild(comp);
  arr.push(comp);
}

export function createArray(arr, n, width, spacing) {
  for (let i = 0; i < n; i++) {
    addComponent(arr, width, spacing);
  }
}

export async function shuffle(arr, n, speed) {
  for (let i = 0; i < n; i++) {
    let j = Math.trunc(Math.random() * i) + 1;
    setColor(arr, i, "blue");
    await sleep(speed);
    setColor(arr, i, "red");
    swap(arr, i, j);
  }
}

export function createTempForMergeSort(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(0);
  }
  return temp;
}

export async function setGreen(arr, n, speed) {
  for (let i = 0; i < n; i++) {
    await sleep(speed);
    setColor(arr, i, "green");
  }
}

export function newArray(arr, n, width, spacing) {
  let parent = document.querySelector(".array")
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  arr = []
  for (let i = 0; i < n; i++) {
    addComponent(arr, width, spacing);
  }
  return arr;
}

export async function reverse(arr, n, speed) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    setColor(arr, i, "red");
    setColor(arr, j, "red");
    await sleep(speed);
    swap(arr, i, j);
  }
}