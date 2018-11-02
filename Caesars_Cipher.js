/*In Caesars Cipher the meanings of the letters are shifted by some set amount. 
The most common version of that is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
This function takes a ROT13 encoded string as input and returns a decoded string.*/
function rot13(str) { 
  //transform to array for easier manipulation
  let arr = str.split("");
  for (let i=0;i<arr.length;i++){
    //if character is a letter, shift it
    if (/\w/.test(arr[i])){
      //find letter's alphabet index
      let formerLetterNum = arr[i].charCodeAt(0)-"A".charCodeAt(0);
      //find alphabet index of decoded letter
      let newLetterNum = (formerLetterNum + 13) % 26;
      //turn alphabet index into a letter
      arr[i] = String.fromCharCode("A".charCodeAt(0)+newLetterNum);
    }
  }
  return arr.join("")
};

rot13("SERR CVMMN!"); //should decode to FREE PIZZA!
