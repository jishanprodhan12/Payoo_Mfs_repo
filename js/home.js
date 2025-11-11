// handle log out btn 
document.getElementById('log-out-btn').addEventListener('click',()=>{
        window.location.href = './index.html';
        
});

// add money event handdler 
document.getElementById('Add-Money-from-btn').addEventListener('click',(event)=>{
        event.preventDefault();
        const seletedBank = getValueFromInputFild('select-bank-add-money-form');
        const accountNumber = getValueFromInputFild('input-number-add-money-form');
        const amount = getNumberValueFromInputFild('input-amount-add-money-form');
        const pin = getNumberValueFromInputFild('input-pin-add-money-form');
        // get abailable balance 
        const balance = getNumberValueFromInnerText('current-balance');
        if(pin === 1234){
                const newBalance = balance + amount ;
                document.getElementById('current-balance').innerText = newBalance ;
        }else{
                alert("invalid pin ");
        }

});