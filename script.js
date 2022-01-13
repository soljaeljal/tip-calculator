const cost = document.getElementById('cost');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const tipBtn = document.querySelectorAll('.tip-btn');
const tipDisplay = document.getElementById('tip');
const totalDisplay = document.getElementById('total');
const error = document.querySelector('.error')
let costValue = 0;
let peopleValue = 0;
let customValue = 0;
let tipEach;
let totalEach;

cost.addEventListener('input', (event) => {
    costValue = event.target.value;
    if (costValue <= 0) {
        document.getElementById('cost').style.border = "2px solid red";
        document.getElementById('error1').style.display = "block";
        return false;
    } else
     document.getElementById('error1').style.display = "none";
     document.getElementById('cost').style.border = "none";
     calc();
});

people.addEventListener('input', (event) => {
    peopleValue = event.target.value;
    if (peopleValue <= 0) {
        document.getElementById('people').style.border = "2px solid red";
        document.getElementById('error2').style.display = "block";
        return false;
    } else 
    document.getElementById('error2').style.display = "none";
    document.getElementById('people').style.border = "none";
    calc();
});

tipBtn.forEach (btn => {
btn.addEventListener('click', (event) => {
    btnValue = event.target.value;
    if (btnValue <= 0) {
        return false;
    }  else calc();
    })
});

//Calculating price for custom input %
custom.addEventListener('input', (event) => {
    btnValue = event.target.value;
    if (btnValue <= 0) {
        return false;
    } else calc();
});


function calc() {
    tipEach = (btnValue / 100) * costValue;
    tipDivided = tipEach / peopleValue; //Calculate the tip
    totalEach = (costValue / peopleValue) + tipDivided; //Calculate total pay
    tipDisplay.innerHTML = '$' + tipDivided.toFixed(2);
    totalDisplay.innerHTML = '$' + totalEach.toFixed(2);
}

//Reset
document.querySelector('#reset').addEventListener('click', function() {
    costValue = 0;
    peopleValue = 0;
    custom.value = 'Custom';
    cost.value = 0;
    people.value = 0;
    tipDisplay.innerHTML = '$0.00';
    totalDisplay.innerHTML = '$0.00';
});