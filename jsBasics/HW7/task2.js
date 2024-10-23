function oneParametr (num) {
    console.log(`Current value: ${num}`);
  if (num === 0){
        return 0;
  }else {
        return oneParametr(num - 1);
  }
}

const result = oneParametr(5);
console.log(`Final result: ${result}`);