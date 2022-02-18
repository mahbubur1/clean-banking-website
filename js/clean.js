function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputText =inputField.value;
    const value  = parseFloat(inputText);
    inputField.value = '';
    return value;
}

function updateTotal (fieldId,amount){
    const totalTag = document.getElementById(fieldId);
    const totalTagText = totalTag.innerText;
    const perviosTotal = parseFloat(totalTagText);
    const currentTotal = perviosTotal + amount;
    totalTag.innerText = currentTotal;
}

document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput =  getInputValue ('deposit-input');
   const depositTotal = updateTotal('deposit-total',depositInput)
})