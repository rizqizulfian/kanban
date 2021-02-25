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
    if (!formInput.value) {
        alert("Input Tidak Boleh Kosong!");
    } else {
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
        // reset();
        render()
        formInput.value = ""
    }
}

function render() {

    todoList.innerHTML = ``
    onProgress.innerHTML = ``
    test.innerHTML = ``
    done.innerHTML = ``

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

