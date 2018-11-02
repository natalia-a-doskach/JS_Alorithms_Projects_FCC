/*Returns true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Strings with varying formats, such as "racecar", "RaceCar", and "race CAR" can be checked.
Strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2" can be checked.*/

function palindrome(str) {
  //remove all non-alphanumeric characters, make it lower case
  let candidate = str.toLowerCase().replace(/[\W_]/g, "");
  //convert str to array for easier manipulation
  candidate = candidate.split("")
  //make reversed array
  let reversed = [...candidate];
  for (let i = 0; i < reversed.length / 2; i++) {
    [reversed[i], reversed[reversed.length - i - 1]] = [reversed[reversed.length - i - 1], reversed[i]];
  };
  //if sent is a palindrome, strings will be identical
  return reversed.join("") == candidate.join("")
}

palindrome("1Race# Car1");
