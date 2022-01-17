const todoDiv = document.querySelector('#todos');
const newTodo = document.querySelector('#todoInput');


const btn = document.querySelector('#btn');
const todoRow = document.querySelector('#todos-1');

const p1 = document.querySelector('#p1');
const b1 = document.querySelector('#b1');
const tb1 = document.querySelector('#tb1');
const cb1 = document.querySelector('#cb-1');

// const ss = document.querySelectorAll('article > div > div > div').forEach(d =>
//     d.addEventListener('click', (e) => {
//         console.log('Klick av: ' + e)
        
//         d.classList.toggle('lth');
//     }));
//     console.log('s: ' + ss);
    
//     todoRow.addEventListener('click', (e) => {
//         console.log('Checkbox: ' + cb1.checked);
//         p1.classList.toggle('lth');
        
//         // cb1.classList.toggle('lth');
        
//         if (cb1.checked)
//         cb1.checked = false;
//         else
//         cb1.checked = true;
        
//     });


// tb1.addEventListener('click', (e) => {
//     todoRow.remove();
// });


btn.addEventListener('click', (e) => {
    console.log('Button: ' + btn);
    console.log('todoDiv: ' + todoDiv);
    console.log('newTodo: ' + newTodo.value);

    if (newTodo.value != "") {
        let newDiv = CreateDiv("row");
        let inputField = CreateInput();
        // Funkar inte så vart skall det ligga för att få checkrutan att funka????
        // inputField.addEventListener('click', (e) => {
        //     if (inputField.checked)
        //         inputField.checked = false;
        //     else
        //         inputField.checke = true;
        // });

        let innerDiv = CreateDiv("col-sm-8")
        innerDiv.appendChild(inputField);
        innerDiv.appendChild(createP());
        innerDiv.addEventListener('click', (e) => {
            console.log('InnerDiv Klick av: ' + e)
            innerDiv.classList.toggle('lth');
        });

        newDiv.appendChild(innerDiv);

        newDiv.appendChild(createOkButton(innerDiv));
        newDiv.appendChild(createRemoveButton(newDiv));

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
        //Ska det vara </input> på inputfält? koden nedan skapar och syns i inspektorn
        //men när jag la till en </input> i html filen så syns den inte i inspektorn?!?!?
        let newInputField = document.createElement("input");
        newInputField.innerHTML = newTodo.value;
//Det syns inte på ehmsidan med finns i koden när jag kollar med inspektor?!?!?

        let att = document.createAttribute("type");
        att.value = "checkbox";
        newInputField.setAttributeNode(att);

        let classatt = document.createAttribute("class");
        classatt.value = "form-check-input me-3";
        newInputField.setAttributeNode(classatt);

        newInputField.addEventListener('click', (e) => {
            if (newInputField.checked)
                newInputField.checked = false;
            else
                newInputField.checke = true;
        });

        return newInputField;
    }

    function createP() {
        let newP = document.createElement("p");
        newP.innerText = newTodo.value;
        return newP;
    }
});

function createOkButton(newDiv) {
    let button = document.createElement("button");
    button.innerHTML = "ok";
    let classatt = document.createAttribute("class");
    classatt.value = "btn btn-primary col-sm-1";
    button.setAttributeNode(classatt);

    button.addEventListener('click', (e) => {
        console.log('Klick av: ' + e)

        newDiv.classList.toggle('lth');
    });

    return button;
}

function createRemoveButton(newDiv) {
    let button = document.createElement("button");
    button.innerHTML = "X";
    let classatt = document.createAttribute("class");
    classatt.value = "btn btn-danger col-sm-1";
    button.setAttributeNode(classatt);

    button.addEventListener('click', (e) => {
        newDiv.remove();
    })

    return button;
}