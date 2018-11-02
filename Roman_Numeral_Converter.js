
/*Converts the given number into a roman numeral*/
function convertToRoman(num) {
  let romanNum = '';
  let romanDigits = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  //calculate how many digits in the num
  let digitQ = num.toString().length;
  //go through every digit and concat a matching roman to romanNum:
  for (let i = 0; i < digitQ; i++) {
    let digit = num % 10;
    switch (digit) {
      case 1:
      case 2:
      case 3:
        for (let j = 0; j < digit; j++) {
  //every time we go to next number position, 
  //we need shift 2 elements left in the romanDigits array
  //to achieve that, i is multiplied by 2:
          romanNum = romanDigits[2 * i] + romanNum;
        };
        break;
      case 4:
        romanNum = romanDigits[2 * i] + romanDigits[2 * i + 1] + romanNum;
        break;
      case 5:
        romanNum = romanDigits[2 * i + 1] + romanNum;
        break;
      case 6:
        romanNum = romanDigits[2 * i + 1] + romanDigits[2 * i] + romanNum;
        break;
      case 7:
        romanNum = romanDigits[2 * i + 1] + romanDigits[2 * i] + romanDigits[2 * i] + romanNum;
        break;
      case 8:
        romanNum = romanDigits[2 * i + 1] + romanDigits[2 * i] + romanDigits[2 * i] + romanDigits[2 * i] + romanNum;
        break;
      case 9:
        romanNum = romanDigits[2 * i] + romanDigits[2 * i + 2] + romanNum;
        break;
    };
    num = Math.floor(num / 10);
  };
  return romanNum;
}
convertToRoman(36);

