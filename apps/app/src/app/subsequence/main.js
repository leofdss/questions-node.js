/**
 *
 * @param {number[]} array
 * @param {number[]} sequence
 * @returns {boolean}
 */
function subsequence(array, sequence) {
  let result = 0;
  let j = 0;
  for (let i = 0; i < sequence.length; i++) {
    label: for (; j < array.length; j++) {
      if (sequence[i] === array[j]) {
        result = result + 1;
        break label;
      }
    }
  }
  return result === sequence.length;
}

function main() {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  console.log(subsequence(array, sequence));
}

main();
