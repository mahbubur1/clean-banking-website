// get user input from input field 
function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputText =inputField.value;
    const value  = parseFloat(inputText);
    inputField.value = '';
    return value;
}
  // get inner text from id
  function getInnerTextById(id){
      const getId = document.getElementById(id);
      const getIdInText = getId.innerText;
      const value = parseFloat (getIdInText);
      return value;
  }
 // set total amount in total field  
function updateTotal (fieldId,amount){
    const perviosTotal = getInnerTextById(fieldId);
    const currentTotal = perviosTotal + amount;
    document.getElementById(fieldId).innerText = currentTotal;
}
 // update balance set 
 function updateBalance (amount,adding){
     const perviosBalance = getInnerTextById('total-amount')
     let currentBalance;
     if(adding == true){
        currentBalance = perviosBalance + amount;
     }
    else{
        currentBalance = perviosBalance - amount;
     }
    document.getElementById('total-amount').innerText = currentBalance;
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
     const balance = getInnerTextById('total-amount');
            if(withdrawInput > 0 && withdrawInput <= balance){
                updateTotal('withdraw-total',withdrawInput);
                updateBalance(withdrawInput,false);
            }
 })