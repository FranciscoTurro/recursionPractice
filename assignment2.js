const mergeSort = (array) => {
  if (array.length < 2) return array;
  else {
    let leftHalf = array.slice(0, Math.ceil(array.length / 2));
    let rightHalf = array.slice(Math.ceil(array.length / 2));
    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);
    return merge(leftHalf, rightHalf);
  }
};

const merge = (leftArray, rightArray) => {
  let newArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftArray.length > leftIndex && rightArray.length > rightIndex) {
    if (leftArray[leftIndex] > rightArray[rightIndex]) {
      newArray.push(rightArray[rightIndex]);
      rightIndex++;
    } else {
      newArray.push(leftArray[leftIndex]);
      leftIndex++;
    }
  }

  return [
    ...newArray,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
};

test = [10, 5, 3, 1];

console.log(mergeSort(test));
