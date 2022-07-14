/**
 *
 * @param {any[]} input
 * @returns {void}
 */
function reverce(input) {
  for (let i = 0, j = input.length - 1; i < input.length / 2; i++, j--) {
    const swap = input[i];
    input[i] = input[j];
    input[j] = swap;
  }
}

function main() {
  const array = [5, 1, 22, 25, 6, -1, 8];
  reverce(array);
  console.log(array);
}

main();
