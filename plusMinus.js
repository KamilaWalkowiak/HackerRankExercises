const plusMinus = (arr) => {
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers += 1;
    } else if (arr[i] < 0) {
      negativeNumbers += 1;
    } else {
      zeros += 1;
    }
  }
  return (positiveNumbers/arr.length).toFixed(6);
  (negativeNumbers/arr.length).toFixed(6);
 (zeros/arr.length).toFixed(6);

};

plusMinus([-4,3,-9,0,4,1]);