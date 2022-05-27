// Identity fn
const identity = (x) => x;

// Bad Object Update fn
const badFn = (newValue) => {
  state.someValue = newValue;
  return state;
};

// Functional (good) Object Update fn
const assoc = (obj, k, v) => {
  const updatedObj = { ...obj };
  return (updatedObj[k] = v);
};

// Iterative Factorial fn
const iterativeFactorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Recursive Factorial fn
const recursiveFactorial = (n, product = 1) => {
  if (n === 0) {
    return product;
  }

  return recursiveFactorial(n - 1, product * n);
};

// Recursive Flatten fn
const flatten = (n) => {
  if (!Array.isArray(n)) {
    return n;
  } else {
    return n.reduce((acc, x) => {
      return acc.concat(flatten(x));
    }, []);
  }
};

// normal
// const add = (x, y) => x + y;

// curried
const add = (x) => (y) => x + y;

const inc = add(1);

// A curried functional wrapper
const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((v, fn) => fn(v), val);

const stringArr = ["foo", ["bar", ["baz"]]];

const reverse = (string) => string.split("").reverse().join("");

const upperCase = (string) => string.toUpperCase();

const upperCaseReverse = pipe(reverse, upperCase);

const processStringArr = (arr) => arr.map(upperCaseReverse);

const parseData = pipe(flatten, processStringArr);

// console.log(parseData(stringArr));
// console.log(stringArr);
