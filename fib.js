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

function fibsRec(number) { 
    console.log("This was printed recursively");  
    if (number<=1) {
        return [0,1];
    }
    
    let fibsArray = fibsRec(number - 1);
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    console.log(fibsArray);
    return fibsArray;   
}

fibsRec(8);
