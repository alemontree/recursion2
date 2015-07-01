function powerSet (string) {
  // Write your code here, and
  // return your final answer.
  var obj = {};
  var character;
  for (var i = 0; i < string.length; i++) {
    character = string.charAt(i);
    if (!(character in obj)) {
      obj[character] = true;
    }
  }
  var array = [];
  for (key in obj) {
    array.push(key);
  }
  array.sort();
  console.log(array);
  var result = [""];
  for (i = 0; i < array.length; i++) {
    for (j = i; j < array.length; j++) {
      result.push(array.slice(i, j+1).join(''));

    }
  }

  console.log(result);

  return result;

}


powerSet("obama");
console.log('Expected: ', '[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]');
