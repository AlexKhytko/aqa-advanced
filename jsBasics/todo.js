
let arrayTask = [];

function addTask(task){
    arrayTask.push(task);
    console.log(`Задача "${task}" добавлена.`);
}

function listTasks(){
    console.log('Список дел на сегодня:');
    arrayTask.forEach((task, index) => {
        console.log(`${index}: ${task}`);
    });
   }
   function removeTask(index) {
    if (index >= 0 && index < arrayTask.length) {
        const removedTask = arrayTask.splice(index, 1);
        console.log(`Задача "${removedTask}" выполнена.`);
    } else {
        console.log('Неверный индекс задачи.');
    }
}

addTask("Сделать ДЗ по автоматизации ");
addTask("Посмотреть видео на ютуб ");
addTask("Выучить 15 английских слов ");
addTask("Переделать код в JS");
console.log(arrayTask);
listTasks();
removeTask(2);
removeTask(20);
listTasks();
addTask("Создать репозиторий на GitLab ");
listTasks();
const leftDeal = arrayTask.slice();
console.log('Важные дела: ' + leftDeal);