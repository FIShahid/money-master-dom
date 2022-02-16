// function inputField(item){
//     const foodInput = document.getElementById( item +'-input').value;
// }


document.getElementById('calculate-button').addEventListener('click',function(){

    //get expense value
    const foodInput = document.getElementById('food-input').value;
    //inputField('food');
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('cloth-input').value;
    const totalExpenses = document.getElementById('total-expences');
   const finalExpences= totalExpenses.innerText = parseFloat (foodInput) + parseFloat (rentInput) + parseFloat (clothInput);
      
    //get Income Value

    const incomeInput = document.getElementById('income-input').value;
    const balance = document.getElementById('total-balance');
    
    balance.innerText = incomeInput;

   let updatedBalance = parseFloat (incomeInput) - parseFloat (finalExpences);
   document.getElementById('total-balance').innerText = updatedBalance;

  
    
})

// function calculateSaving(percent){

//     let result = parseInt(incomeInput) * parseInt (percent/100);
//     return result;

// }

//Saving Calculation
document.getElementById('save-button').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input').value;
    let savingPercentage = document.getElementById('saving-percent').value;
    let percent = incomeInput * (savingPercentage/100);
    
    document.getElementById('saving-balance').innerText = percent;

//Remaining Balance

    let remainingBalance = document.getElementById('remaining-balance');
    let newBalance = document.getElementById('total-balance').innerText;
    // console.log(newBalance);
    remainingBalance.innerText = parseFloat(newBalance) - parseFloat(percent);        

 

    
})