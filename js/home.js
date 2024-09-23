// add money functionality
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNUmber = document.getElementById('pin_number').value;
    const addAmount = document.getElementById('add_amount').value;
    if (pinNUmber === '123') {
        const currentBalance = document.getElementById('balance-amount').innerText;
        const addMoneyNumber = parseFloat(addAmount);
        const currentMoneyNumber = parseFloat(currentBalance);

        const newBalance = addMoneyNumber + currentMoneyNumber;
        // console.log(newBalance);

        document.getElementById('balance-amount').innerText = newBalance;



    } else {
        alert('Failed to add money ! please try again');
    }

});
