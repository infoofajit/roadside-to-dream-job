# Memoization
Memoization is a powerful optimization technique used in computer programming to speed up the execution of functions by caching their results. It is particularly useful when dealing with computationally expensive or frequently called functions.

Memoization is an optimisation technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result whenever same inputs are passed.

```
function square(n) {
  return n*n
}

function memozedSquare() {
  let cache = {}

  return function (n) {
    if (!cache[n]) {
      console.log('Calculate Square');
      return cache[n] = square(n)
    }
    console.log('Memoized Square');
    return cache[n]
  }
}

const memoSquare = memozedSquare()
console.log(memoSquare(2));
console.log(memoSquare(4));
console.log(memoSquare(2));
console.log(memoSquare(5));
```