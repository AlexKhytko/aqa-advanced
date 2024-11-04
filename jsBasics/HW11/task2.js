function fetchTodo() {
  return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(error));
  });
}

function fetchUser() {
  return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => resolve(data))
          .catch(error => reject(error));
  });
}

// Використання Promise.all
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
      console.log('Todo:', todo);
      console.log('User:', user);
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });

// Використання Promise.race
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
      console.log('First fulfilled promise:', result);
  })
  .catch(error => {
      console.error('Error in race:', error);
  });
