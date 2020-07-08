// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 
function fibsSum(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return fibsSum(n - 1) + fib(n);
}

// Helper Method to calculate nth fib
function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Alternate solution - one neat trick to calculate fibs sum is to take the 
// previous two fib sums and add 1 to it. This works because of the nature of 
// the fibonacci sequence.
function fibsSum(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}
