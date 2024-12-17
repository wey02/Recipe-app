const tip = document.getElementById('tipTotal');
const total = document.getElementById('totalPrice');
const numPlp = document.getElementById('numPlp');

const tipButtons = document.querySelectorAll('.tip-button'); // Assuming class is 'tip-button'

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectTip(tipSelected);
    });
});


const customInput = document.getElementById('custom');
customInput.addEventListener('input', () => {
    selectTip(); // Call the function when the input changes
});

function selectTip(tipSelected) {
    const numPlpValue = parseFloat(numPlp.value.trim());
    
    if (numPlpValue === 0) {
        setErrorFor(numPlp, "Can't be zero");
    } else {
        const btnValue = parseFloat(tipSelected.innerText) / 100;
        const billTotal = parseFloat(document.getElementById('billInput').value);
        const customValue = parseFloat(customInput.value);

        
        if(customValue !== ''){
            let tipAmount = billTotal * btnValue / numPlpValue;
            tipTotal.innerText = `$${tipAmount.toFixed(2)}`;

            let totalAmount = billTotal / numPlpValue + btnValue;
            totalPrice.innerText = `$${totalAmount.toFixed(2)}`;
        } else{
            let customTotal = customValue * btnValue / numPlpValue;
            tipTotal.innerText = `$${customTotal.toFixed(2)}`; // Display custom total    
        }

        
    }
}


function setErrorFor(input, message){
    const countPlp = input.parentElement;
    const msg = countPlp.querySelector('.messageError'); // Use .messageError
  
    msg.innerText = message;
    countPlp.className = 'countPeople__num error';
}

function reset(){
    tip.innerHTML = "$0.00"
    total.innerHTML = "$0.00"

    document.getElementById("numPlp").value = parseInt("0");
    document.getElementById("billInput").value = parseInt("0");
}