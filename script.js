const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
   let N = arr.length;
  let result = [];
  let subArr = [];
 let sum = 0;
  
  for (let i = 0; i < N; i++) {
    //sum = sum + arr[i];
      if (sum+arr[i] <= n) {
        subArr.push(arr[i]);
		  sum += arr[i];
      } else {
         sum = arr[i];
		 result.push(subArr);
		  subArr = [arr[i]];
      }
    }
  result.push(subArr);
  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));      


