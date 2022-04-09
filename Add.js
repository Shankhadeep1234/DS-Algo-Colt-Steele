//solution one
function AddUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(AddUpTo(6));

///------------------------------

//solution two
function AddUpToSimple(n) {
  return (n * (n + 1)) / 2;
}

console.log(AddUpToSimple(6));
