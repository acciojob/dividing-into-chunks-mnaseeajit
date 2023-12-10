const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let N = arr.length;
  let result = [];
  
  for (let i = 0; i < N; i++) {
    let sum = 0;
    let subarray = [];
    for (let j = i; j < N; j++) {
      sum += arr[j];
      if (sum <= n) {
        subarray.push(arr[j]);
      } else {
        break;
      }
    }
    result.push(subarray);
  }
  
  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));


