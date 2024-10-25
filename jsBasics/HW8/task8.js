
function getNumbersAverage(numbersList) {

    for (let i = 0; i < numbersList.lenght; i++){
const sum = numbersList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let average = sum / numbersList.lenght;
return average;
}

}

console.log(getNumbersAverage(12, 5, 20, 8, 15, 0, 25));

export default getNumbersAverage;