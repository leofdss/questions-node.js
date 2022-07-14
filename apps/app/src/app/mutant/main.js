/**
 *
 * @param {string[]} dna
 * @returns {boolean}
 */
function isMutant(dna) {
  for (let i = 0; i < dna.length; i++) {
    for (let j = 0; j < dna[i].length; j++) {
      if (dna[i][j] === 'A') {
        if (
          dna[i + 1]?.[j + 1] === 'A' &&
          dna[i + 2]?.[j + 2] === 'A' &&
          dna[i + 3]?.[j + 3] === 'A'
        ) {
          return true;
        }

        if (
          dna[i]?.[j + 1] === 'A' &&
          dna[i]?.[j + 2] === 'A' &&
          dna[i]?.[j + 3] === 'A'
        ) {
          return true;
        }

        if (
          dna[i + 1]?.[j] === 'A' &&
          dna[i + 2]?.[j] === 'A' &&
          dna[i + 3]?.[j] === 'A'
        ) {
          return true;
        }

        if (
          dna[i + 1]?.[j - 1] === 'A' &&
          dna[i + 2]?.[j - 2] === 'A' &&
          dna[i + 3]?.[j - 3] === 'A'
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function main() {
  const dnaMutant = [
    'ATGCGA',
    'CAGTGC',
    'TGACGA',
    'CGTAGC',
    'ATGCGA',
    'CAGTGC',
  ];
  const dnaNotMutant = [
    'TTGCGA',
    'CAGTGC',
    'TGACGA',
    'CGTAGC',
    'ATGCGA',
    'CAGTGC',
  ];
  console.log(isMutant(dnaMutant));
  console.log(isMutant(dnaNotMutant));
}

main();
