'use strict';


function sumArray(n) {

  if (n <= 2) {
    return [];
  }

  const result = [];
  for (let i = n; i <= n + 3; i++) {
    const fiboResult = fibo(i);
    const gResult = G(fiboResult);
    result.push(gResult);
  }
  return result
}

function G(k) {
  const numbers = [];

  for (let i = k; i < k*5; i++) {
    const decomposeSum = decompose(i);

    if (decomposeSum === k) {
      numbers.push(i)
    }
  }

  const sum = numbers.reduce((a, b) => a + b, 0);
   //console.log(numbers)
  // console.log(sum)
  return sum;
}

function decompose(n) {
  let k = 2
  let primeNumbers = [];
  while (n > 1) {
    if (n % k == 0) {
      primeNumbers.push(k);
      n = n / k;

    } else {
      k = k + 1;
    }
  }

  const sum = primeNumbers.reduce((a, b) => a + b, 0);
   //console.log(primeNumbers)
   //console.log(sum)
  return sum;
}

function fibo(n) {
  if (n <= 1) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2)
}


module.exports = {
  sumArray,
  fibo,
  G
}