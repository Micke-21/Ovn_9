const btn = document.querySelector('#btn');
const todoDiv = document.querySelector('#todos');
const todoRow = document.querySelector('#todos-1');
const newTodo = document.querySelector('#todoInput');

const p1 = document.querySelector('#p1');
const b1 = document.querySelector('#b1');
const tb1 = document.querySelector('#tb1');
const cb1 = document.querySelector('#cb-1');


todoRow.addEventListener('click', (e) => {
    console.log('Checkbox: ' + cb1.checked);
    p1.classList.toggle('lth');

    // cb1.classList.toggle('lth');
    
    if (cb1.checked)
        cb1.checked = false;
    else
        cb1.checked = true;

});
tb1.addEventListener('click', (e) => {
    //p1.innerText = 'test';
    todoRow.remove();
});

btn.addEventListener('click', (e) => {
    console.log('Button: ' + btn);
    console.log('todoDiv: ' + todoDiv);
    console.log('newTodo: ' + newTodo.value);

    if (newTodo.value != "") {
        let newP = document.createElement("p");
        newP.innerText = newTodo.value;

        todoDiv.appendChild(newP);
        newTodo.value = "";
    }


});