let averageGrade = 82;
switch (true){
case averageGrade >= 91 && averageGrade <= 100:
    console.log("Відмінно");
    break;
case averageGrade >= 81 && averageGrade <= 90:
    console.log("Дуже добре");
    break;
case averageGrade >= 71 && averageGrade <= 80:
    console.log("Добре");
    break;
case averageGrade >= 61 && averageGrade <= 70:
    console.log("Задовільно");
    break;
case averageGrade <= 60 && averageGrade >= 1:
    console.log("Незадовільно");
    break;
default:
    console.log("Неправильный ввод");      
}
