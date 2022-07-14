/**
 *
 * @param {string} input
 * @returns {{ char: string, posicion: number }}
 */
function lastrepeat(input) {
  const map = new Map();
  let char = '';
  let posicion = -1;
  for (let i = 0; i < input.length; i++) {
    const result = map.get(input[i]);
    if (typeof result === 'number') {
      char = input[i];
      posicion = i;
    }
    map.set(input[i], i);
  }

  return { char, posicion };
}

function main() {
  const input = 'abracadabra';
  console.log(lastrepeat(input));
}

main();
