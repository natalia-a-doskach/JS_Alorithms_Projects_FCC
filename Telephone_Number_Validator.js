
/*Returns true if the passed string looks like a valid US phone number.
The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
For example:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555*/

function telephoneCheck(str) {
  //first check
  let isValidRegex = /^1?\D{0,2}\d{3}\D{0,2}\d{3}\D?\d{4}/;
  //second check: should be 1 or 0 pairs of ()
  let countOpeningPar = (str.match(/\(/g) || []).length;
  let countClosingPar = (str.match(/\)/g) || []).length;
  let paranphesisCheck = countClosingPar == countOpeningPar && countClosingPar<2;
  //third check: between () should be only 3 digits
  let paranphesisCheck2;
  if (countClosingPar ==1){paranphesisCheck2 = /\(\d{3}\)/.test(str)}
  else {paranphesisCheck2 = true};
  //4th check: should be 10 or 11(when US country code(1) is present) digits
  let digitcount = (str.match(/\d/g) || []).length;
  let digitCountCheck;
  if (str.match(/^1/)){digitCountCheck = digitcount == 11}else{digitCountCheck = digitcount == 10};
   // number should get "true" at every check
  let result = isValidRegex.test(str) && paranphesisCheck && digitCountCheck && paranphesisCheck2;
  return result;
}
telephoneCheck("555-555-5555");
