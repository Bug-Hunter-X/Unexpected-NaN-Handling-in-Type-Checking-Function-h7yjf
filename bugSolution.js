function foo(x) {
  if (x === null) return "null";
  if (x === undefined) return "undefined";
  if (isNaN(x)) return "NaN"; // Explicitly handle NaN
  return x.toString();
}

console.log(foo(null)); // null
console.log(foo(undefined)); // undefined
console.log(foo(10)); // 10
console.log(foo({})); // [object Object]
console.log(foo(NaN)); // NaN
console.log(foo(0/0)); // NaN