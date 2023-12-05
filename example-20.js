function a(...num) {
  return num.reduce(
    (prev, curr) => (prev.includes(curr) ? prev : [...prev, curr]),
    []
  );
}

const res = a(1, 1, 2, 2, 3, 4, 5, 5, 6, 7);

console.log(res);
