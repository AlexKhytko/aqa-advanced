//Завдання 3: Числа та булі
//Створіть змінну яка буде символізувати вік певної персони.
//Після чого створіть булеву змінну яка буде визначати 
//чи особа повнолітня базуючись на заченні з попередньої змінної.
//Виведіть усі змінні в консоль

let ageHuman = 1;
let adult = true;
let teenage = false;

if (ageHuman >= 18 ) {
    console.log(adult);
} 
else if ( ageHuman >=1 && ageHuman < 18) {
    console.log(teenage);
}
else if( ageHuman <= 0) {
    console.log("Error");
}
