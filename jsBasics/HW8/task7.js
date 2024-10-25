function filterGreaterThanValue(minValue, numbersList) {
    const result = [];  // Создаем новый массив для хранения результата
        for (let i = 0; i < numbersList.length; i++) {
        if (numbersList[i] > minValue) {
            result.push(numbersList[i]);  // Добавляем число в результат, если оно больше minValue
        }
    }
     console.log("Array: ",  numbersList, "filtered  ", result, "  min value: " , minValue);
     return result;  // Возвращаем отфильтрованный массив
}

const minValueZero = 0;
const numbersListZero = [12, -5, 20, -8, 15, 0, 25];
const filteredListZero = filterGreaterThanValue(minValueZero, numbersListZero);
 
const minValuePos = 15;
const numbersListPos = [5, 15, 25, 35, 45];
const filteredListPos = filterGreaterThanValue(minValuePos, numbersListPos);

const minValueNeg = -10;
const numbersListNeg = [12, -5, 20, -8, 15, 0, 25];
const filteredListNeg = filterGreaterThanValue(minValueNeg, numbersListNeg);
 
 export default filterGreaterThanValue;