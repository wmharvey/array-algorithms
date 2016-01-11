var assert = require('assert');
var array = require('../index');

describe("push", function() {
  it ('should add an item to the end of an array', function() {
    var p = array.push([1, 2, 3], 4);
    assert.deepEqual(p, [1, 2, 3, 4]);
  });
});

describe("pop", function() {
  it ('should remove an item from the end of an array', function() {
    var example = [1, 2, 3, 4];
    array.pop(example);
    assert.deepEqual(example, [1, 2, 3]);
  });

  it ('should return the last item from an array', function() {
    var item = array.pop([1, 2, 3, 4]);
    assert.equal(item, 4);
  });

  it ('should modify the length property of an array', function() {
    var example = [1, 2, 3, 4];
    array.pop(example);
    assert.equal(example.length, 3);
  })
});

describe("shift", function() {
  it ('should remove an item from the beginning of an array', function() {
    var example = [1, 2, 3, 4];
    array.shift(example);
    assert.deepEqual(example, [2, 3, 4]);
  });

  it ('should return the first item in an array', function() {
    var item = array.shift([1, 2, 3, 4]);
    assert.equal(item, 1);
  });

  it ('should modify the length property of an array', function() {
    var example = [1, 2, 3, 4];
    array.shift(example);
    assert.equal(example.length, 3);
  });
});

describe("unshift", function() {
  it ('should add an item to the beginning of an array', function() {
    var example = [1, 2, 3, 4];
    array.unshift(example, 0);
    assert.deepEqual(example, [0, 1, 2, 3, 4]);
  });

  it ('should return the length of the modified array', function() {
    var length = array.unshift([1, 2, 3, 4], 0);
    assert.equal(length, 5);
  });
});

describe("unique", function() {
  it ('should return an array with duplicates removed', function() {
    var example = [1, 1, 2, 2, 3];
    var mod = array.unique(example);
    assert.deepEqual(mod, [1, 2, 3]);
  });
});

describe("frequency", function() {
  it ('should return the most frequent letter', function() {
    var example = ['dog', 'book', 'cat', 'box'];
    var mostFreq = array.frequency(example);
    assert.equal(mostFreq[0], 'o');
  });

  it ('should return the frequency of occurence', function() {
    var example = ['dog', 'book', 'cat', 'box'];
    var mostFreq = array.frequency(example);
    assert.equal(mostFreq[1], 3);
  });
});
