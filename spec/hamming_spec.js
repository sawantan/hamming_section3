var hamming = require('../hamming');

describe('A program to compute Hamming distance', function () {

  it('finds no difference between identical strands', function () {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  it('can compute hamming distance for a single nucleotide strand', function () {
    expect(hamming.compute('A','G')).toEqual(1);
  });

  it('can compute hamming distance for a small strand', function () {
    expect(hamming.compute('AG','CT')).toEqual(2);
  });

  it('can compute small hamming distances', function () {
    expect(hamming.compute('AT','CT')).toEqual(1);
  });

  it('can compute small hamming distances in longer strands', function () {
    expect(hamming.compute('GGACG', 'GGTCG')).toEqual(1);
  });

  it('can compute large hamming distances', function () {
    expect(hamming.compute('GATACA', 'GCATAA')).toEqual(4);
  });

  it('can compute hamming distances in very long strands', function () {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  it('throws an error when strands are not equal length', function() {
    expect(function() { hamming.compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });

});