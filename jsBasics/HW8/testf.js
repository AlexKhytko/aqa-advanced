// function test() {
//     return function () {
//          console.log("test1");
//     }
// }
// test()();

//  (function() {
//      return console.log('test2');  })();
  
// function myFunc(theObject) { 
//     theObject.make = "Toyota";
// }

// var mycar = { make: "Honda", model: "Accord", year: 1998 };
// var x, y;

// x = mycar.make; // x получает значение "Honda"

// myFunc(mycar); // Передаем объект mycar в функцию
// y = mycar.make; // y получает значение "Toyota"

// // Проверка значений
// console.log(x); // Выводит "Honda"
// console.log(y); // Выводит "Toyota"


// function myCar(name, model, year) {
//    console.log(name, model, year);
//    return {name, model, year};
//   }
//    console.log(myCar);

//   var carAlex = myCar ("Honda", "Accord", 1998);
//   var carBob = myCar ("BMW", "535", 2005);
//   console.log(carAlex);
//   console.log(carBob);

//функция
  function myCar(name, model, year) {
    console.log(name, model, year);
    return {name, model, year};
       }
    var carAlex = myCar ("Honda", "Accord", 1998);
   var carBob = myCar ("BMW", "535", 2005);
//функция конструктор
function HisCar (name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
   }
const carDen = new HisCar("Mersedes", 600, 2008);
console.log(carDen);

//объект
const elseCar = {
    carJhon: {
    name: "Zaz",
    model: "Forza",
    year: "2013"
   }
};
console.log(elseCar.carJhon);



  


