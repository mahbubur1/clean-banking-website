document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput= document.getElementById('deposit-input');
   const newDepositAmountText= depositInput.value;
   const newDepositAmount = parseFloat(newDepositAmountText);
//    console.log(newDepositAmount);
   const depositTotal= document.getElementById('deposit-total');

   const perviousAmountText= depositTotal.innerText;
   const perviousAmount = parseFloat(perviousAmountText);

   const newDepositTotal= perviousAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

//    get total amount update  
    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const perviousTotalAmount= parseFloat(totalAmountText);
    const newBalanceTotal= perviousTotalAmount + newDepositTotal;
    totalAmount.innerText = newBalanceTotal;

//    clean the deposit input field 
  depositInput.value= '';

})

// withdraw 
 document.getElementById('withdraw-button').addEventListener('click',function(){
     const withdrawInput = document.getElementById('withdraw-input');
     const newWithdrawText = withdrawInput.value;
     const newWithdraw = parseFloat(newWithdrawText);
     
     const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     const withdrawPerviousTotal = parseFloat(withdrawTotalText);
     const allWithdraw = newWithdraw + withdrawPerviousTotal;
     withdrawTotal.innerText = allWithdraw;
    // update balance 
    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const newTotalAmount = parseFloat(totalAmountText);
    
    const newBalanceTotal = newTotalAmount - newWithdraw;
    totalAmount.innerText = newBalanceTotal;
    // clear the input withdraw 
    withdrawInput.value = '';
 })
