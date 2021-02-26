// Data input
let data = [
  {
    title: "Buat HTML",
    category: "todoList",
    tanggal: "01-12-2020",
  },
  {
    title: "Design UI",
    category: "todoList",
    tanggal: "30-12-2020",
  },
  {
    title: "Buat JS",
    category: "onProgress",
    tanggal: "01-02-2020",
  },
  {
    title: "Testing CSS",
    category: "test",
    tanggal: "11-03-2020",
  },
  {
    title: "Pilih Tema Project",
    category: "done",
    tanggal: "21-12-2020",
  },
  {
    title: "Bagi Tugas",
    category: "done",
    tanggal: "23-12-2020",
  },
];

// add todo list
const formTodo = document.getElementById("formTodo");
const buttonTodoList = document.getElementById("addTodoList");
buttonTodoList.addEventListener("click", addTodo);

function isValidate(title) {

  for (let i = 0; i < data.length; i++) {
    let dataTitle = data[i].title;
    if (dataTitle === title) {
      return false;
    }
  }
  return true;
}


function addTodo(event) {

  if (formTodo.value !== "") {
    // Menghandle jika inputannya string kosong
    event.preventDefault();

    if (isValidate(formTodo.value)) {
      let obj = {
        title: formTodo.value,
        category: "todoList",
        tanggal: tanggal(),
      };
      data.push(obj);
      render();
      // Mengosongkan inputan setelah ditambahkan
      formTodo.value = "";
      alert(`${obj.title} added successfully`)
    } else {
      alert('title already exists');
    }
  } else {
    alert("The input cannot be empty. OK?");
  }
}

// add On Progress
const formProgress = document.getElementById("formProgress");
const buttonOnProgress = document.getElementById("addOnProgress");
buttonOnProgress.addEventListener("click", addProgress);

function addProgress(event) {
  if (formProgress.value !== "") {

    event.preventDefault();
    let obj = {
      title: formProgress.value,
      category: "onProgress",
      tanggal: tanggal(),
    };
    data.push(obj);
    render();
    formProgress.value = "";
    alert(`${obj.title} added successfully`)
  } else {
    alert("The input cannot be empty. OK?");
  }
}

// add Test
const formTest = document.getElementById("formTest");
const buttonOnAddTest = document.getElementById("addTest");
buttonOnAddTest.addEventListener("click", addTest);

function addTest(event) {
  if (formTest.value !== "") {
    event.preventDefault();
    let obj = {
      title: formTest.value,
      category: "test",
      tanggal: tanggal(),
    };
    data.push(obj);
    render();
    formTest.value = "";
    alert(`${obj.title} added successfully`)
  } else {
    alert("The input cannot be empty. OK?");
  }
}

// add Done
const formDone = document.getElementById("formDone");
const buttonAddDone = document.getElementById("addDone");
buttonAddDone.addEventListener("click", addDone);

function addDone(event) {
  if (formDone.value !== "") {
    event.preventDefault();
    let obj = {
      title: formDone.value,
      category: "done",
      tanggal: tanggal(),
    };
    data.push(obj);
    render();
    formDone.value = "";
    alert(`${obj.title} added successfully`)
  } else {
    alert("The input cannot be empty. OK?");
  }
}

// Function today
function tanggal() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}

// Function Render
function render() {
  todoList.innerHTML = '';
  onProgress.innerHTML = '';
  test.innerHTML = '';
  done.innerHTML = '';
  // put all task to html
  for (let i = 0; i < data.length; i++) {
    // create div
    const card = document.createElement("div");
    card.className = "card mt-2";
    card.style.width = "100%";
    card.setAttribute('draggable', true);
    if (data[i].category === "todoList") {
      todoList.appendChild(card);
    } else if (data[i].category === "onProgress") {
      onProgress.appendChild(card);
    } else if (data[i].category === "test") {
      test.appendChild(card);
    } else if (data[i].category === "done") {
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
    buttonEdit.className = "btn btn-outline-primary editTodoList";
    // buttonEdit.id = "editTodoList";
    buttonEdit.style.width = "45%";
    buttonEdit.innerText = "Edit";
    buttonDiv.appendChild(buttonEdit);

    const buttonDelete = document.createElement("button");
    buttonDelete.className = "btn btn-outline-danger deleteTodoList";
    // buttonDelete.id = "deleteTodoList";
    buttonDelete.style.width = "45%";
    buttonDelete.innerText = "Delete";
    buttonDiv.appendChild(buttonDelete);
  }
  // DELETE
  const deleteList = document.querySelectorAll(".deleteTodoList");
  deleteList.forEach((dlt) => dlt.addEventListener("click", deleteTodo));

  // EDIT
  const editList = document.querySelectorAll(".editTodoList");
  editList.forEach((dlt) => dlt.addEventListener("click", editTodo));


}

render();

// Function Delete
function deleteTodo(e) {
  const konfirmasi = confirm("Are you sure?");
  if (konfirmasi) {
    e.preventDefault();

    const parent = e.target.parentNode.parentNode.parentNode;
    const child = e.target.parentNode.parentNode;

    console.log(parent);
    parent.removeChild(child);
  }
}


// Function Edit
function editTodo(e) {
  event.preventDefault();

  const judul = e.target.parentNode.previousSibling.previousSibling.innerText;
  let newValue = prompt("Masukan title baru", "Belum diisi");
  console.log(newValue)

  for (let i = 0; i < data.length; i++) {
    if (data[i].title === judul) {
      data[i].title = newValue;
      data[i].tanggal = tanggal()
    }
  }
  console.log(data);
  render();
}

const lists = document.querySelectorAll(".parent")
const listItem = document.querySelectorAll(".card")

let draggedItem = null
let dari = null //Di isi dengan title

for (let i = 0; i < listItem.length; i++) {
    const item = listItem[i]

    item.addEventListener('click', function(e) {
       console.log("Masuk");
    })

    item.addEventListener('dragstart', function(e) {
        // console.log(`dragstart`);
        // console.log(e, "1");
        // console.log(e.target.children[0].children[0].innerText);
        dari = e.target.children[0].children[0].innerText
        console.log(dari);
        draggedItem = item
        setTimeout(function () {
            item.style.display = 'none'
        }, 0)
    })

    item.addEventListener('dragend', function() {
        setTimeout(function () {
            draggedItem.style.removeProperty("display")
            draggedItem = null
        }, 0)
    })
}


for (let i = 0; i < lists.length; i++) {
    const list = lists[i]

    list.addEventListener('dragover', function(e) {
        e.preventDefault()
        console.log("1");
    })

    list.addEventListener('dragenter', function(e) {
        e.preventDefault()
        // console.log(this);
        // this.style.backgroundColor = 'rgba (0, 0, 0, 0.2)'
    })

    list.addEventListener('drop', function(e) {
        e.preventDefault
        console.log(dari);
        console.log(e,"2");
        let ke = e.target.parentElement.parentElement.parentElement.id
        for (let j = 0; j < data.length; j++) {
            if (data[j].title === dari) {
                data[j].category = ke
                render()
                break
            }
        }
    })
}