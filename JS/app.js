document.getElementById('calculate-button').addEventListener('click',function(){

    //get expense value
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    const totalExpenses = document.getElementById('total-expences');
   const finalExpences= totalExpenses.innerText = parseInt (foodInput) + parseInt (rentInput) + parseInt (clothInput);
      
    //get Income Value

    const incomeInput = document.getElementById('income-input').value;
    const balance = document.getElementById('total-balance');
    
    balance.innerText = incomeInput;

   let updatedBalance = parseInt (incomeInput) - parseInt (finalExpences);
   document.getElementById('total-balance').innerText = updatedBalance;

   incomeInput.value='';

    
})

function calculateSaving(percent){

    let result = incomeInput * percent;
    return result;

}

document.getElementById('save-button').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input').value;
    let savingPercentage = document.getElementById('saving-percent');
   let  saving = savingPercentage 
    console.log(savingPercentage);

    
})