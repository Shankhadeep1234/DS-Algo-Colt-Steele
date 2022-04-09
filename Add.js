function AddUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += n;
  }
  return total;
}

console.log(AddUpTo(6));
