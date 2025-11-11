const getNumberValueFromInputFild = (id) =>{
    const inputValue = document.getElementById(id).value ;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber ;
}
// just inner value 
const getValueFromInputFild = (id) =>{
    const inputValue = document.getElementById(id).value ;
    return inputValue ;
}


// get value using  innerText 
const getValueFromInnerText = (id) =>{
    const inputText = document.getElementById(id).innerText ;
    return inputText ;
}
// get Number value using  innerText 
const getNumberValueFromInnerText = (id) =>{
    const inputText = document.getElementById(id).innerText ;
    const inputNumberText = parseFloat(inputText);
    return inputNumberText ;
}