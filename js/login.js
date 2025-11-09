document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const inputNumber = getNumberValueFromInputFild('input-number');
    const inputPin = getNumberValueFromInputFild('input-pin');
    if(isNaN(inputNumber)) {
        return ;
    }
    /// this is not proper way the proper way is using fatch data forom server side 
    if((inputNumber === 123456 ) && (inputPin === 1234)){
        window.location.href = './home.html'
    }
    console.log("log houtase ")
})