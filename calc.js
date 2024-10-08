let a = 7
let b = 5
let simbol = "-"

if( simbol === "/" ) {
    console.log( "equal =", a/b );
}else if( simbol === "+" ) {
    console.log( "sum =", a + b );
}
else if( simbol === "-" ) {
    console.log( "minus =", a - b );
}
else if( simbol === "*" ) {
    console.log( "multy =", a * b );
}
else {
    console.log("error");
}


const text = "I'm a string!";
console.log(text[0]); // Виведе: "I"
console.log(text[3]); // Виведе: " "
console.log(text[4]); // Виведе: "a"
console.log( parseInt('0xff', 16)); // 255
console.log( parseInt('ff', 16)); // 255
console.log( parseInt('2n9c', 36)); // 123456

console.log(5 + '10'); // "510" (рядок)
console.log('15' - "5"); // 10 (число)
console.log(null + 10); // 10 (null стає 0)
console.log(true + 1); // 2 (true стає 1)
console.log(false + 1); // 1 (false стає 0)
let str = (1, 2, 3);
let number = 544;
let boul = true;
let zero = null;
let undef = "";

console.log (str);
console.log (number);
console.log (boul);
console.log (zero);
console.log (undef);