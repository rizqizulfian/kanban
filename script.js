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
const parent = document.getElementById("parent");

// function createObject(todos) {
//     let filter = filterTodos(todos);
//     let result = [];

//     for (let i = 0; i < filter.length; i++) {
//         let obj = {};
//         if (obj[filter[i][0]] === undefined) {
//             obj.task = filter[i][0];
//             obj.dueDate = filter[i][1];
//         }
//         result.push(obj)
//     }

//     return result;
// }

function render() {
    // get data input
    // let todoListObj = createObject(data)

    // put all task to html
    for (let i = 0; i < data.length; i++) {


        // create div
        const card = document.createElement("div");
        card.className = "card mt-2";
        card.style.width = "100%";
        parent.append(card);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.append(cardBody);

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText = `${data[i].title}`;
        cardBody.append(card);

        const date = document.createElement("p");
        date.className = "card-text mt-1";
        date.innerText = `${data[i].tanggal}`;
        title.append(cardBody)
        // const buttonDiv = document.createElement("div");
        // buttonDiv.style.textAlign = "center";

        // const buttonEdit = document.createElement("button");
        // buttonEdit.className = "btn btn-outline-primary";
        // buttonEdit.id = "editTodoList"
        // buttonEdit.style.width = "45%";
        // buttonEdit.innerText = "Edit";

        // const buttonDelete = document.createElement("button");
        // buttonDelete.className = "btn btn-outline-danger";
        // buttonDelete.id = "deleteTodoList"
        // buttonDelete.style.width = "45%";
        // buttonDelete.innerText = "Delete";
    }
}
render()
