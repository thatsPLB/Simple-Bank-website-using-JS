// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw field
// 2.5 also make sure to convert the input into a number by usinf parsefloate
// 3 set previus withdraw total
// 4. calculate total withdraw amount
// 4.5 set total withdraw amount
// //  5 get the previous balance total
// 6 calculate new balance total
// 6.5 set the new balance total
// 7 clear the input field
// step : 1
document.getElementById('btn-withdraw').addEventListener('click',function(){
// step: 2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// step 7
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid amount');
    return;
}
// step: 3
const withdrawTotalEliment = document.getElementById('withdraw-total');
const previusWithdrawTotalString = withdrawTotalEliment.innerText;
const previusWithdrawTotal = parseFloat(previusWithdrawTotalString);

// step: 5
const balanceTotalEliment = document.getElementById('balance-total')
const previusBalanceTotalString = balanceTotalEliment.innerText;
const previusBalanceTotal = parseFloat(previusBalanceTotalString);
// console.log(previusBalanceTotal);

if(newWithdrawAmount > previusBalanceTotal){
    alert('Not enough balance')
    return;
}
// step: 4
const currentwithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
withdrawTotalEliment.innerText = currentwithdrawTotal;
// step 6
const newBalanceTotal = previusBalanceTotal - newWithdrawAmount;
balanceTotalEliment.innerText = newBalanceTotal
})