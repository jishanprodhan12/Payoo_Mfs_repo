// handle log out btn 
document.getElementById('log-out-btn').addEventListener('click', () => {
    window.location.href = './index.html';

});

// add money event handdler 
document.getElementById('Add-Money-from-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const selectedBank = getValueFromInputFild('select-bank-add-money-form');
    const accountNumber = getValueFromInputFild('input-number-add-money-form');
    const amount = getNumberValueFromInputFild('input-amount-add-money-form');
    const pin = getNumberValueFromInputFild('input-pin-add-money-form');

    if (!selectedBank || selectedBank === "Select bank") {
        alert("⚠️ Please select a valid bank.");
        return;
    }
    if (!accountNumber) {
        alert("⚠️ Please enter your account number.");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("⚠️ Please enter a valid amount.");
        return;
    }
    if (isNaN(pin)) {
        alert("⚠️ Please enter your 4-digit PIN.");
        return;
    }


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
        const nowDate = new Date().toLocaleDateString();
        div.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/purse 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Add Money </span> </br>
                                Bank Name : ${selectedBank} </br>
                                Bank Account Number : ${accountNumber} </br>
                                Amount to Add :  ${amount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>

                    </div>
                    <div class="w-6 h-6">
                        <img src="./assets/dot.png" alt="" class="w-full">
                    </div>
                </div>`

        // append child 
        transactionCotainer.appendChild(div);

        // modal 
        document.getElementById('addmoney-modal').classList.remove('hidden');
        document.getElementById('addmoney-modal').showModal();
        /// modal inner text 
        // target parent contianer 
        const addMoneyModalContainer = document.getElementById('add-money-modal-container');
        // create div 
        const modalDiv = document.createElement('div');

        modalDiv.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/purse 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Add Money </span> </br>
                                Bank Name : ${selectedBank} </br>
                                Bank Account Number : ${accountNumber} </br>
                                Amount to Add :  ${amount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>
                </div>`
        //append modal content 
        addMoneyModalContainer.appendChild(modalDiv);
        // remove all value 
        document.getElementById('select-bank-add-money-form').value = '';
        document.getElementById('input-number-add-money-form').value = '';
        document.getElementById('input-amount-add-money-form').value = '';
        document.getElementById('input-pin-add-money-form').value = '';

        removeData = () => {
            document.getElementById('add-money-modal-container').removeChild(modalDiv);
        }

    } else {
        alert("invalid pin ");
    }

});

// add money handler  end .

//   cash out money handler  start 
document.getElementById('withdraw-cash-out-from-btn').addEventListener('click', () => {
    const cashoutNumber = getValueFromInputFild('input-number-cash-out-form');
    const cashOutAmount = getNumberValueFromInputFild('input-amount-cash-out-form');
    const cashOutPin = getNumberValueFromInputFild('input-pin-cash-out-form');

    if (!cashoutNumber) {
        alert("⚠️ Please enter your account number.");
        return;
    }
    if (isNaN(cashOutAmount) || cashOutAmount <= 0) {
        alert("⚠️ Please enter a valid amount.");
        return;
    }
    if (isNaN(cashOutPin)) {
        alert("⚠️ Please enter your 4-digit PIN.");
        return;
    }
    if (cashOutPin === 1234) {
        const balance = getNumberValueFromInnerText('current-balance');
        const newBalance = balance - cashOutAmount;
        document.getElementById('current-balance').innerText = newBalance;

        // create element 
        const div = document.createElement('div');
        // target parent 
        const transactionCotainer = document.getElementById('transaction-container');
        const time = new Date().toLocaleTimeString();
        const nowDate = new Date().toLocaleDateString();
        div.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/send 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Cash Out </span> </br>
                                Agent Number : ${cashoutNumber} </br>
                                Amount to withdraw :  ${cashOutAmount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>

                    </div>
                    <div class="w-6 h-6">
                        <img src="./assets/dot.png" alt="" class="w-full">
                    </div>
                </div>`

        // append child 
        transactionCotainer.appendChild(div);

        // modal 
        document.getElementById('cashout-modal').classList.remove('hidden');
        document.getElementById('cashout-modal').showModal();

        const addMoneyModalContainer = document.getElementById('cash-out-modal-container');
        // create div 
        const modalDiv = document.createElement('div');

        modalDiv.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/send 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Cash Out </span> </br>
                                Agent Number : ${cashoutNumber} </br>
                                Amount to withdraw :  ${cashOutAmount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>

                    </div>
                </div>`
        //append modal content 
        addMoneyModalContainer.appendChild(modalDiv);

        // remove all value 
        document.getElementById('input-number-cash-out-form').value = '';
        document.getElementById('input-amount-cash-out-form').value = '';
        document.getElementById('input-pin-cash-out-form').value = '';
        removeCashOutModal = () => {
            document.getElementById('cash-out-modal-container').removeChild(modalDiv);
        }

    } else {
        alert("⚠️ Invalid pin ");
    }
});

//todo transfer money 
document.getElementById('sent-Money-from-btn').addEventListener('click', () => {
    const number = getValueFromInputFild('input-number-transfer-money-form');
    const amount = getNumberValueFromInputFild('input-amount-transfer-money-form');
    const pin = getNumberValueFromInputFild('input-pin-transfer-money-form');

    if (!number) {
        alert("⚠️ Please enter your account number.");
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert("⚠️ Please enter a valid amount.");
        return;
    }
    if (isNaN(pin)) {
        alert("⚠️ Please enter your 4-digit PIN.");
        return;
    }
    if (pin === 1234) {
        const balance = getNumberValueFromInnerText('current-balance');
        const newBalance = balance - amount;
        document.getElementById('current-balance').innerText = newBalance;

        // create element 
        const div = document.createElement('div');
        // target parent 
        const transactionCotainer = document.getElementById('transaction-container');
        const time = new Date().toLocaleTimeString();
        const nowDate = new Date().toLocaleDateString();
        div.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/money 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Cash Out </span> </br>
                                User Account Number : ${number} </br>
                                Amount to transfer :  ${amount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>

                    </div>
                    <div class="w-6 h-6">
                        <img src="./assets/dot.png" alt="" class="w-full">
                    </div>
                </div>`

        // append child 
        transactionCotainer.appendChild(div);

        //modal 
        document.getElementById('transfer-money-modal').classList.remove('hidden');
        document.getElementById('transfer-money-modal').showModal();
        //target transfermodal container 
        const transferModalContainer = document.getElementById('transfer-money-modal-container')
        // create modal container 
        const modalDiv = document.createElement('div');
        modalDiv.innerHTML = ` <div class="flex items-center  justify-between bg-white p-3 rounded-xl shadow-md">
                    <div class=" flex items-center justify-center gap-4 ">
                        <span class="w-11 h-11 rounded-full p-2  bg-slate-50 flex items-center justify-center ">
                            <img src="./assets/money 1.png" alt="" class="w-full">
                        </span>
                        <!-- title and time  -->
                        <div class="flex  flex-col gap-2">
                            <span>
                                <span class ="font-bold">Cash Out </span> </br>
                                User Account Number : ${number} </br>
                                Amount to transfer :  ${amount} tk </br>
                                New balance : ${newBalance} tk
                            </span>
                            <span class="text-sm text-gray-500">
                               time : ${time}    date :   ${nowDate}
                            </span>
                        </div>

                    </div>
                </div>`
        //append modal content 
        transferModalContainer.appendChild(modalDiv);
        // reset using empty string 
        document.getElementById('input-number-transfer-money-form').value = '';
        document.getElementById('input-amount-transfer-money-form').value = '';
        document.getElementById('input-pin-transfer-money-form').value = '';
        // reset modal containt 
        removeTransferModal = () => {
            document.getElementById('transfer-money-modal-container').removeChild(modalDiv);
        }

    } else {
        alert("⚠️ Invalid pin ");
    }

});


// get bonous 
document.getElementById('get-bonous-from-btn').addEventListener('click', () => {
    const copun = getValueFromInputFild('input-copun-bonus-form');
    console.log(copun)
    if (!copun) {
        alert("⚠️ Please enter a valid cupon code .");
        return;
    } else if (copun === 'payoo-copun') {
        const balance = getNumberValueFromInnerText('current-balance');
        const bonous = ((balance * 2 ) / 100);
        const newBalance = balance + bonous ; 
        document.getElementById('current-balance').innerText = newBalance;
        
    }
});