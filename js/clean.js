// get user input from input field 
function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputText =inputField.value;
    const value  = parseFloat(inputText);
    inputField.value = '';
    return value;
}
 // set total amount in total field  
function updateTotal (fieldId,amount){
    const totalTag = document.getElementById(fieldId);
    const totalTagText = totalTag.innerText;
    const perviosTotal = parseFloat(totalTagText);
    const currentTotal = perviosTotal + amount;
    totalTag.innerText = currentTotal;
}
 // update balance set 
 function updateBalance (amount,adding){
     const balanceTag = document.getElementById('total-amount');
     const balanceTagInText = balanceTag.innerText;
     const perviosBalance = parseFloat(balanceTagInText);
     let currentBalance;
     if(adding == true){
        currentBalance = perviosBalance + amount;
     }
    else{
        currentBalance = perviosBalance - amount;
     }
     balanceTag.innerText = currentBalance;
 }
 // deposit button click event listener added 
document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput =  getInputValue ('deposit-input');
        if( depositInput > 0 ){
            updateTotal('deposit-total',depositInput);
            updateBalance(depositInput,true);
         }
})
 // withdraw button click event listener added 
 document.getElementById('withdraw-button').addEventListener('click',function(){
     const withdrawInput = getInputValue('withdraw-input');
            if(withdrawInput > 0 ){
                updateTotal('withdraw-total',withdrawInput);
                updateBalance(withdrawInput,false);
            }
 })