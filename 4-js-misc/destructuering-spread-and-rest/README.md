## Destructuering
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Destructuering
Destructure simply means if we have many keys in an object and need to get these keys in local variables so how to write clean code without repeating same lines.

```
const [a, b] = array;
const [a, , b] = array;
const [a = aDefault, b] = array;
const [a, b, ...rest] = array;

const { a, b } = obj;
const { a: a1, b: b1 } = obj;
const { a: a1 = aDefault, b = bDefault } = obj;
```

## Spread operator && Rest parameter
### Spread operator
The spread operator is a powerful feature in JavaScript that allows you to expand an iterable (e.g., an array, string, or object) into individual elements.

```
const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

### When to Use the Spread Operator
- Array and Object Copying (Not for Deep Copying)
- Concatenation
- Function Arguments

### Rest parameter
Using the rest parameter (…), which is the same syntax as the spread operator, we can pass an indefinite number of parameters to our function. These parameters are available within our function as an array called args (or whatever name you passed the function).

The rest parameter gives us an easier and cleaner way of working with an indefinite number of parameters.

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

console.log(sum.apply(null, numbers));
// Expected output: 6
```

The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.