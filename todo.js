const btn = document.querySelector('#btn');
const todoDiv = document.querySelector('#todos');
const todoRow = document.querySelector('#todos-1');
const newTodo = document.querySelector('#todoInput');

const p1 = document.querySelector('#p1');
const b1 = document.querySelector('#b1');
const tb1 = document.querySelector('#tb1');
const cb1 = document.querySelector('#cb-1');

const ss = document.querySelectorAll('article > div > div > div').forEach(d =>
    d.addEventListener('click', (e) => {
        console.log('Klick av: ' + e)
        d.classList.toggle('lth');
    }));

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
    todoRow.remove();
});

btn.addEventListener('click', (e) => {
    console.log('Button: ' + btn);
    console.log('todoDiv: ' + todoDiv);
    console.log('newTodo: ' + newTodo.value);

    if (newTodo.value != "") {
        let newDiv = CreateDiv("row");
        let innerDiv = CreateDiv("col-sm-8")
        innerDiv.appendChild(CreateInput());
        innerDiv.appendChild(createP());

        newDiv.appendChild(innerDiv);

        newDiv.appendChild(createOkButton());
        newDiv.appendChild(createRemoveButton());

        todoDiv.appendChild(newDiv);
        newTodo.value = "";
    }



    function CreateDiv(classValue) {
        let newDiv = document.createElement("div");
        let classatt = document.createAttribute("class");
        classatt.value = classValue;
        newDiv.setAttributeNode(classatt);
        return newDiv;
    }

    function CreateInput() {
        let newInput = document.createElement("input");
        newInput.innerHTML = newTodo.value;
        let att = document.createAttribute("type");
        att.value = "checkbox";
        newInput.setAttributeNode(att);
        let classatt = document.createAttribute("class");
        classatt.value = "form-check-input me-3";
        newInput.setAttributeNode(classatt);
        return newInput;
    }

    function createP() {
        let newP = document.createElement("p");
        newP.innerText = newTodo.value;
        return newP;
    }
});

function createOkButton(){
    let button = document.createElement("button");
    button.innerHTML = "ok";
    let classatt = document.createAttribute("class");
    classatt.value = "btn btn-primary col-sm-1";
    button.setAttributeNode(classatt);

    return button;
}

function createRemoveButton(){
    let button = document.createElement("button");
    button.innerHTML = "X";
    let classatt = document.createAttribute("class");
    classatt.value = "btn btn-danger col-sm-1";
    button.setAttributeNode(classatt);

    return button;
}