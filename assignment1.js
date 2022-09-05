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

const fibsRec = (n) => {
  if (n < 2) return [0];
  if (n === 2) return [0, 1];
  else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]; //copies the array returned by calling the function again [...fibsrec(n-1) and appends to it the sum of the 2 last numbers  ,fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
    //es la posicion n-2 y n-3 porque la cantidad de cosas en el array siempre va a ser menor por 2 numeros que n. si le doy un parametro de 3 a la funcion entonces voy a tener 0,1 en el array, posicion maxima 1. si le doy 4 va a tener 0,1,1 posicion maxima 2
  }
};

console.log(fibs(4));
console.log(fibsRec(4));
