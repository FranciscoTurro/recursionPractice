const fibs = (n) => {
  if (n < 2) return [0];
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    let num = 0;
    num = array[i - 1] + array[i - 2];
    array.push(num);
  }
  return array;
};
//comment
const fibsRec = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  else return fibsRec(n - 1) + fibsRec(n - 2);
};

console.log(fibs(4));
console.log(fibsRec(4));
