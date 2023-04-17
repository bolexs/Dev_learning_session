let display = function(params) {
    if(params >= 10) {
        console.log(`${params} is of a high value`);
    } else {
        console.log('its not up to 10');
    }
}


display(20)


let divide = (a, b) => {

    if( a > b) {
        div = a / b
        console.log(`a is greater b hence the answer is ${div}`)
    } else if (a < b) {
        div_b = b / a
        console.log(`b is greater a hence the answer is ${div_b}`)
    }
}

divide(130, 20)
