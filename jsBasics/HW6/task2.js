function ageCheck (age) {
    switch (true){
        case age >= 18 && age <= 100:
        console.log("Adult");
        break;
        case age < 18 && age >= 0 :
        console.log("Child");
        break;
        default:
    console.log("Error");
  }
}
ageCheck(10);
ageCheck(18);
ageCheck(20);