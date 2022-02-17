document.getElementById('calculate-button').addEventListener('click', function () {

    //get expense value
    let foodInput = document.getElementById('food-input').value;
    //inputField('food');
    let rentInput = document.getElementById('rent-input').value;
    let clothInput = document.getElementById('cloth-input').value;
    let totalExpenses = document.getElementById('total-expences');
    let finalExpences = totalExpenses.innerText = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);

    //get Income Value

    let incomeInput = document.getElementById('income-input').value;
    let balance = document.getElementById('total-balance');

    balance.innerText = incomeInput;

    let updatedBalance = parseFloat(incomeInput) - parseFloat(finalExpences);
    document.getElementById('total-balance').innerText = updatedBalance;

    //Error Handling
    if(foodInput<0 || rentInput<0 || clothInput<0){
        alert('Input Field Can not Be Negative');
        return
    }
    if(finalExpences>incomeInput){
        alert('You Do Not Have Sufficient Amount')
        return;
    }
    
    
})

//Saving Calculation
document.getElementById('save-button').addEventListener('click', function () {
    let incomeInput = document.getElementById('income-input').value;
    let savingPercentage = document.getElementById('saving-percent').value;
    let percent = incomeInput * (savingPercentage / 100);

    document.getElementById('saving-balance').innerText = percent;

    //Remaining Balance

    let remainingBalance = document.getElementById('remaining-balance');
    let newBalance = document.getElementById('total-balance').innerText;
    //Error Handling
    if(percent>newBalance){
        alert('You do not have Enough Fund')
        return;
    }

    remainingBalance.innerText = parseFloat(newBalance) - parseFloat(percent);

})