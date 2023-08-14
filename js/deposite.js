document.getElementById('btn-deposite').addEventListener('click',function(){
    const depositefield = document.getElementById('deposite-field');
    const newDepositAmount = depositefield.value;
    console.log(typeof newDepositAmount)
    const depositTotalEliment = document.getElementById('deposite-total');
    const previusDepositTotal = depositTotalEliment.innerText
    const currentDepositeTotal = previusDepositTotal + newDepositAmount

    depositTotalEliment.innerText = currentDepositeTotal
    depositefield.value ='';

})