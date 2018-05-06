'use strict';


function sumArray(n) {

  if (n <= 2) {
    return [];
  }

  const result = [];
  for (let i = n; i <= n + 3; i++) {
    const fibResult = fibo(i);
    //console.log('fibResult:' + fibResult)

    const gResult = G(fibResult);
    console.log('#############')

    result.push(gResult);
  }

  //console.log(result)
  return result
}

function G(k) {
  const numbers = [];
  console.log('k: ' + k)

  for (let i = k; i < k*5; i++) {
    const decomposeSum = decompose(i);
     console.log(i +' - '+decomposeSum);

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

sumArray(5)