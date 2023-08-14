document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositefield = document.getElementById('deposite-field');
    const newDepositAmountString = depositefield.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalEliment = document.getElementById('deposite-total');
    const previusDepositTotalString = depositTotalEliment.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    console.log(typeof previusDepositTotal)
    const currentDepositeTotal = previusDepositTotal + newDepositAmount;
    depositTotalEliment.innerText = currentDepositeTotal;
    depositefield.value ='';

})