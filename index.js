exports.push = function(array, element) {
  var length = array.length;
  array[length] = element;
  return array;
};

exports.pop = function(array) {
  var length = array.length;
  if (length) {
    var item = array[length - 1];
    array.length = length - 1;
    return item;
  } else {
    return undefined;
  }
};

exports.shift = function(array) {
  var length = array.length;
  if (length) {
    var item = array[0];
    var k = 1;
    while (k < length) {
      array[k-1] = array[k];
      k++;
    }
    delete array[length - 1];
    array.length = length - 1;
    return item;
  } else {
    return undefined;
  }
};

exports.unshift = function(array, element) {
  var length = array.length;
  var k = length;
  while (k > 0) {
    array[k] = array [k - 1];
    k--;
  }
  array[0] = element;
  return array.length;
};

exports.unique = function(array) {
  var uniqueElements = [];
  array.forEach(function(cur) {
    if (uniqueElements.indexOf(cur) === -1) {
      uniqueElements.push(cur);
    }
  });
  return uniqueElements;
};

exports.frequency = function(array) {
  var dictionary = {};
  array.forEach(function(cur) {
    var uniqueChars = exports.unique(cur.split(''));
    uniqueChars.forEach(function(char) {
      if (dictionary.hasOwnProperty(char)) {
        dictionary[char]++;
      } else {
        dictionary[char] = 1;
      }
    });
  });
  var common = ['a', 0];
  for (var char in dictionary) {
    if (dictionary[char] > common[1]) {
      common[0] = char;
      common[1] = dictionary[char];
    }
  };
  return common;
};
