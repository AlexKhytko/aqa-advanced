
class ApiTodo {
    static async fetchTodo() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching todo:', error);
            throw error;
        }
    }
}
class ApiUser {
    static async fetchUser() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }
}

async function fetchAll() {
    try {
        const [todo, user] = await Promise.all([ApiTodo.fetchTodo(), ApiUser.fetchUser()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error fetching all data:', error);
    }
}

async function fetchRace() {
    try {
        const result = await Promise.race([ApiTodo.fetchTodo(), ApiUser.fetchUser()]);
        console.log('First fulfilled promise:', result);
    } catch (error) {
        console.error('Error in race:', error);
    }
}


fetchAll();
fetchRace();

export default {ApiTodo, ApiUser};
//
//
