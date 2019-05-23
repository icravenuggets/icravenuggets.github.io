let theNumbers = [5, 15, 3, 8, 9, 1, 20, 7];




function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(theNumbers));
}



// Bubble Sort

let swapped = true;


function bubbleSort(someArray) {
  while (swapped) {
    swapped = false;
    for (let i = 0; i < someArray.length - 1; i ++) {
      if (someArray[i] > someArray[i + 1]) {
        swapped = true;
        let variable = someArray[i];
        someArray[i] = someArray[i + 1];
        someArray[i + 1] = variable;
      }
    }
  }
  return someArray;
}


function selectionSort(someArray) {
  for (let i = 0; i < someArray.length; i ++) {
    let theNumber = i;
    for (let j = i; j < someArray.length; j ++) {
      if (someArray[j] < someArray[theNumber]) {
        theNumber = j;
      }
    }
    let variable = someArray[i];
    someArray[i] = someArray[theNumber];
    someArray[theNumber] = variable;
  }
  return someArray;
}