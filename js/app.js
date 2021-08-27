function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {

        return pin;

    }
    else {
        // console.log('got 3 digit', pin);
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    // debugger;
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const succesNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if (pin == typedNumber) {

        succesNotification.style.display = 'block';
        failNotification.style.display = 'none';

    }
    else {
        succesNotification.style.display = 'none';
        failNotification.style.display = 'block';
    }


};

