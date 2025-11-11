// handle log out btn 
document.getElementById('log-out-btn').addEventListener('click', () => {
        window.location.href = './index.html';

});

// add money event handdler 
document.getElementById('Add-Money-from-btn').addEventListener('click', (event) => {
        event.preventDefault();
        const seletedBank = getValueFromInputFild('select-bank-add-money-form');
        const accountNumber = getValueFromInputFild('input-number-add-money-form');
        const amount = getNumberValueFromInputFild('input-amount-add-money-form');
        const pin = getNumberValueFromInputFild('input-pin-add-money-form');
        // get abailable balance 
        const balance = getNumberValueFromInnerText('current-balance');
        if (pin === 1234) {
                const newBalance = balance + amount;
                document.getElementById('current-balance').innerText = newBalance;
                // create element 
                const div = document.createElement('div');
                // target parent 
                const transactionCotainer = document.getElementById('transaction-container');
                const time = new Date().toLocaleTimeString();
                const nowDate  = new Date().toLocaleDateString();
                div.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/purse 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Add Money </span> </br>
                                Bank Name : ${seletedBank} </br>
                                Bank Account Number : ${accountNumber} </br>
                                Amount to Add :  ${amount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                                ${time}    date  ${nowDate}
                            </span>
                        </div>

                    </div>
                    <div class="w-6 h-6">
                        <img src="./assets/dot.png" alt="" class="w-full">
                    </div>
                </div>`

                // append child 
                transactionCotainer.appendChild(div);
        } else {
                alert("invalid pin ");
        }

});