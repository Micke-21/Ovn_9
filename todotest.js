const todoDiv = document.querySelector('#todos');
const newTodo = document.querySelector('#todoInput');

const todoform = document.querySelector('#todoform');
todoform.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');
});