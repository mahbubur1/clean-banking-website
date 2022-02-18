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
 // deposit button click event listener added 
document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput =  getInputValue ('deposit-input');
             updateTotal('deposit-total',depositInput)
})
 // withdraw button click event listener added 
 document.getElementById('withdraw-button').addEventListener('click',function(){
     const withdrawInput = getInputValue('withdraw-input');
                updateTotal('withdraw-total',withdrawInput);
 })