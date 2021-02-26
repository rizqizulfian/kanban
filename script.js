// Data input
let data = [
    {
        title: 'Buat HTML',
        category: 'todoList',
        tanggal: '01-12-2020'
    },
    {
        title: 'Design UI',
        category: 'todoList',
        tanggal: '30-12-2020'
    },
    {
        title: 'Buat JS',
        category: 'onProgress',
        tanggal: '01-02-2020'
    },
    {
        title: 'Testing CSS',
        category: 'test',
        tanggal: '11-03-2020'
    },
    {
        title: 'Pilih Tema Project',
        category: 'done',
        tanggal: '21-12-2020'
    },
    {
        title: 'Bagi Tugas',
        category: 'done',
        tanggal: '23-12-2020'
    },
];

// selectors
const addTodoList = document.getElementById("addTodoList");
const todoList = document.getElementById("todoList");
const onProgress = document.getElementById("onProgress");
const test = document.getElementById("test");
const done = document.getElementById("done");
const formInput = document.getElementById("form-input");
const buttonTodoList = document.getElementById("addTodoList");
buttonTodoList.addEventListener("click", add);
const buttonOnProgress = document.getElementById("addOnProgress");
buttonOnProgress.addEventListener("click", add);
const buttonTest = document.getElementById("addTest");
buttonTest.addEventListener("click", add);
const buttonDone = document.getElementById("addDone");
buttonDone.addEventListener("click", add);



function add(e) {
    event.preventDefault();
    // conditional untuk cek darimana category
    let category = '';
    if (e.target.id === 'addTodoList') {
        category = 'todoList';
    } else if (e.target.id === 'addOnProgress') {
        category = 'onProgress';
    } else if (e.target.id === 'addTest') {
        category = 'test';
    } else if (e.target.id === 'addDone') {
        category = 'done';
    }

    // ambil date now
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    let obj = {
        title: formInput.value,
        category: category,
        tanggal: today
    }
    data.push(obj);
    reset();
    render();
}

function reset() {

    todoList.innerHTML = `<h1 class="text-center fs-3">Todo List</h1>
                         <button id="addTodoList" type="button" class="btn btn-primary button-add">Add Todo List</button>`

    onProgress.innerHTML = `<h1 class="text-center fs-3">On Progress</h1>
                            <button id="addOnProgress" type="button" class="btn btn-danger button-add">Add Progress</button>`

    test.innerHTML = `<h1 class="text-center fs-3">Test</h1>
                        <button id="addTest" type="button" class="btn btn-warning button-add">Add Test</button>`

    done.innerHTML = `<h1 class="text-center fs-3">Done</h1>
                        <button id="addDone" type="button" class="btn btn-success button-add">Add Done</button>`

}

function render() {

    // put all task to html
    for (let i = 0; i < data.length; i++) {

        // create div
        const card = document.createElement("div");
        card.className = "card mt-2";
        card.style.width = "100%";
        if (data[i].category === 'todoList') {
            todoList.appendChild(card);
        } else if (data[i].category === 'onProgress') {
            onProgress.appendChild(card);
        } else if (data[i].category === 'test') {
            test.appendChild(card);
        } else if (data[i].category === 'done') {
            done.appendChild(card);
        }

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = `${data[i].title}`;
        cardBody.appendChild(title);

        const date = document.createElement("p");
        date.className = "card-text mt-1";
        date.innerText = `${data[i].tanggal}`;
        cardBody.appendChild(date);

        const buttonDiv = document.createElement("div");
        buttonDiv.style.textAlign = "center";
        cardBody.appendChild(buttonDiv);

        const buttonEdit = document.createElement("button");
        buttonEdit.className = "btn btn-outline-primary";
        buttonEdit.id = "editTodoList"
        buttonEdit.style.width = "45%";
        buttonEdit.innerText = "Edit";
        buttonDiv.appendChild(buttonEdit);

        const buttonDelete = document.createElement("button");
        buttonDelete.className = "btn btn-outline-danger";
        buttonDelete.id = "deleteTodoList"
        buttonDelete.style.width = "45%";
        buttonDelete.innerText = "Delete";
        buttonDiv.appendChild(buttonDelete);
    }
}

render()

