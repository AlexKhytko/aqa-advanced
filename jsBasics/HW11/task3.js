// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchTodo() {
 try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
    }
    catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }    
}

async function fetchUser() {
    try {
       const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
       if (!response.ok) {
           throw new Error('Network response was not ok');
       }
       const data = await response.json();
       return data;
       }
       catch(error) {
           console.error('Error fetching data:', error);
           throw error;
       }    
 }

 // Використання Promise.all
 async function fetchAll() {
     try {
         const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
         console.log('Todo:', todo);
         console.log('User:', user);
     } catch (error) {
         console.error('Error fetching all data:', error);
     }
 }
 
 // Використання Promise.race
 async function fetchRace() {
     try {
         const result = await Promise.race([fetchTodo(), fetchUser()]);
         console.log('First fulfilled promise:', result);
     } catch (error) {
         console.error('Error in race:', error);
     }
 }
 
 // Виклик функцій
 fetchAll();
 fetchRace();
 
  