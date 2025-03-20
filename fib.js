function fibs(number) {
    let num1 = 0;
    let num2 = 1;
    let arrayStart = [0,1];

    for(let i=2; i < number; i++) {
        num3 = (num1 + num2);
        arrayStart.push(num3);
        
        num1 = num2;
        num2 = num3;
    }
    console.log(arrayStart);
    
}

fibs(6);

function fibsRec(number) {
    
}