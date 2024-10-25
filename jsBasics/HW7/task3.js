function divide (numerator, denominator){
   try {
    if(denominator === 0){
        throw new Error("Divide on zero");
    } else if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Uncorrect input");
    }
    let result = numerator/denominator;
    console.log(result);
    return result;
    }
    catch(error){ 
        console.log(error.message);
    }
finally {return "Calculation done"}
}
console.log(divide(600, 150));
console.log(divide(6, 0));
console.log(divide("пять", 1));
console.log(divide(6, "два"));