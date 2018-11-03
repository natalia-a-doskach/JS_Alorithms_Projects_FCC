
/*Function checkCashRegister()accepts purchase price as the first argument (price), payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument. "cid" is a 2D array listing available currency.
Returns {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Returns {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, returns {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
as the value of the change key.*/

function checkCashRegister(price, cash, cid) {
  //new Var to be able to change cid amount when calculating
  let cidToChange = [...cid];
  //calculate how much change you need to give
  let changeRequested = cash - price;

 //calculate cash-in-drawer(cid) amount
  let cidSum = 0;
  for (let i=0;i<cid.length;i++){
    cidSum+=cid[i][1];
   cidSum = Number(cidSum.toFixed(2));
  };
  //when you have to give all cash you have
  if (changeRequested == cidSum){
    return {status: "CLOSED", change: cid};
  } ;
  //otherwise, START COUNTING CHANGE
  //1) new Array to put money that you are giving
  let changeGiven = [];
  //2)new var to subtract money from when trying to give change
   let changeReqRem = changeRequested; 
  //3) array with currency worth for easier calculations
  let curWorth = [["PENNY", 0.01], ["NICKEL", 0.05],["DIME", 0.1],["QUARTER", 0.25],["ONE", 1],["FIVE", 5],["TEN", 10],["TWENTY", 20],["ONE HUNDRED", 100]];
  //4)find from which currency to start
  let j=0;
  while (changeRequested<=curWorth[curWorth.length-j-1][1]){
    j++;
  };
  let startPos = curWorth.length-j-1; 
  //5)start counting change
  for (let i=startPos;i>=0;i--){
    //if this currency == 0, move to next one
    if (cid[i][1] == 0){continue};
    //if not, start counting change starting from one bill/coin to how many you can give before
    //you run out of those or will need to move to smaller currency
    let q = 0; // q = number of particular coins/bills you giving now (eg. you give 3 dimes -> q=3) 
    let worth = curWorth[i][1];
    while ((changeReqRem >= worth) && (cidToChange[i][1]>=worth)){
      cidToChange[i][1]-= worth;
      changeReqRem-= worth;
      changeReqRem = Number(changeReqRem.toFixed(2))
      q++;
    };
    //push change given to your answer
    if (q != 0){
    changeGiven.push([cid[i][0],Number((curWorth[i][1]*q).toFixed(2))])};
    if (changeReqRem == 0){  return {status: "OPEN", change: changeGiven}};

  }

  //when short of change
  if (changeRequested > cidSum || changeReqRem >0){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
