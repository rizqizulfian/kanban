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
const parent = document.getElementById("parent");
const addTodoList = document.getElementById("addTodoList");
const formInput = document.getElementById("form-input");
const buttonTodoList = document.getElementById("addTodoList");



function render() {

    // put all task to html
    for (let i = 0; i < data.length; i++) {

        // create div
        const card = document.createElement("div");
        card.className = "card mt-2";
        card.style.width = "100%";
        parent.appendChild(card);

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
