//Input Function

function inputField(inputItem) {
    let input = document.getElementById(inputItem);
    let inputText = input.value;
    let inputNumber = parseFloat(inputText);
    return inputNumber;
}

document.getElementById('calculate-button').addEventListener('click', function () {

    //get expense value
    let foodInput = inputField('food-input');
    let rentInput = inputField('rent-input');
    let clothInput = inputField('cloth-input');
    let totalExpenses = document.getElementById('total-expences');
    let finalExpences = totalExpenses.innerText = foodInput + rentInput + clothInput;

    //get Income Value

    let incomeInput = inputField('income-input')
    let balance = inputField('total-balance')

    balance.innerText = incomeInput;



    let updatedBalance = parseFloat(incomeInput) - parseFloat(finalExpences);
    document.getElementById('total-balance').innerText = updatedBalance;

    //Error Handling
    if (foodInput < 0 || rentInput < 0 || clothInput < 0) {
        alert('Input Field Can not Be Negative');
        let totalExpenses = document.getElementById('total-expences');
        totalExpenses.innerText = '00';
        let getBalance = document.getElementById('total-balance');
        getBalance.innerText = '00';

    }


    if (finalExpences > incomeInput) {
        alert('You Do Not Have Sufficient Amount');
        let totalExpenses = document.getElementById('total-expences');
        totalExpenses.innerText = '00';
        let getBalance = document.getElementById('total-balance');
        getBalance.innerText = '00';

    }
});

//Saving Calculation

document.getElementById('save-button').addEventListener('click', function () {

    let incomeInput = inputField('income-input')
    let savingPercentage = inputField('saving-percent')
    let savingCalculation = incomeInput * (savingPercentage / 100);

    document.getElementById('saving-balance').innerText = savingCalculation;


    //Remaining Balance

    let remainingBalance = document.getElementById('remaining-balance');
    let newBalance = document.getElementById('total-balance').innerText;

    remainingBalance.innerText = parseFloat(newBalance) - parseFloat(savingCalculation);
    //Error Handling
    if (savingCalculation > newBalance) {
        alert('You do not have Enough Balance');
        let savingBalance = document.getElementById('saving-balance');
        savingBalance.innerText = '00';
        let remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = '00';

    }
    if (savingCalculation < 0) {
        alert('You can not Input negative value');
        let savingBalance = document.getElementById('saving-balance');
        savingBalance.innerText = '00';
        let remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = '00';

    }

});