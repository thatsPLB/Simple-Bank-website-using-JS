
// step 1: Add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click',function(){
    // step 2: get the deposit amount from the deposite input field
    // for input field use.valure to the value inside the input field
    const depositefield = document.getElementById('deposite-field');
    const newDepositAmountString = depositefield.value;
    // step 3: get the current deposite total
    // for non-input(element other than input.textarea) use innertext  to get the text
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalEliment = document.getElementById('deposite-total');
    const previusDepositTotalString = depositTotalEliment.innerText;

    const previusDepositTotal = parseFloat(previusDepositTotalString);
    // console.log(typeof previusDepositTotal)
    // step : 4 Add numbers to set the total deposite
    const currentDepositeTotal = previusDepositTotal + newDepositAmount;
    // set the deposite total
    depositTotalEliment.innerText = currentDepositeTotal;
    // step:5 get balanced current total
    const balanceTotalEliment = document.getElementById('balance-total');
    const previusBalanceTotalString = balanceTotalEliment.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceTotalString);
    // step:6 calculate current total balanced
    const currentBalanceTotal = previusBalanceTotal + newDepositAmount;
    // set the current balance 
    balanceTotalEliment.innerText = currentBalanceTotal;
    // step:7 clear the deposite field
    depositefield.value ='';
    // step

})