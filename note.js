// TODO LIST 
let todos = [
    ["Buy car signal light", "16/1/2021"],
    ["Return bycycle brake", "17/1/2021"],
    ["Buy A4 Paper", ""],
    ["Install Garage Shed", "18/1/2021"],
    ["Fix rooftops", "19/1/2021"],
    ["Service PC", ""]
  ]
  
  function filterTodos (todoList) {
    // your code here
    let result = [];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i][1] !== ''){
        result.push(todoList[i]);
      } 
    }
    return result;
  }
  
  function createObject (todos) {
    // your code here
    let filterObj = filterTodos(todos);
    // console.log(filterObj);
    let arr = [];
    let obj = {
      task: '',
      dueDate: ''
    }
    for (let i = 0; i < filterObj.length; i++) {
      obj = { task: filterObj[i][0], dueDate: filterObj[i][1] };
      arr.push(obj);
    }
    return arr;
  }
  
  // console.log(createObject(todos));
  // RENDER DI BROWSER
  // selectors
  const formInputText = document.querySelector(".form-input-text");
  const formInputDate = document.querySelector(".form-input-date");
  const formButton = document.querySelector(".form-button");
  const todoList = document.querySelector(".todo-list");
  formButton.addEventListener("click", addTodo);
  todoList.addEventListener("click", done);
  
  // lengkapi function dibawah ini untuk menghandle input text dan input date kosong
  function addTodo(event) {
    event.preventDefault();
  
    // your code here
    todoList.innerHTML = ''
    if (formInputText.value === '' || formInputDate.value === '') {
      alert("Input kosong, tolong diisi terlebih dahulu!")
    }
    todos.push(
      [formInputText.value, new Date(formInputDate.value).toLocaleDateString("id-ID")]
    )
    render()
  }
  
  // lengkapi function dibawah ini untuk menjalankan fungsi tombol done
  function done(event) {
    const item = event.target;
    // done todo
    if (item.classList[0] === "done-btn") {
      const todo = item.parentElement;
      // your code here
      todo.classList.add("done-todo");
      item.remove()
    }
  }
  
  
  
  // ABAIKAN code dibawah ini
  function render() {
    // get todo list
    let todoListObj = createObject(todos)
    // put all task to html
    for (let i = 0; i < todoListObj.length; i++) {
      // create div
      const todo = document.createElement("div");
      todo.classList.add("todo");
    
      // create li
      const newTodo = document.createElement("li");
      newTodo.innerText = `${todoListObj[i].task} -- ${todoListObj[i].dueDate}`;
      newTodo.classList.add("todo-item");
      todo.appendChild(newTodo);
    
      // create completed button
      const doneButton = document.createElement("button");
      doneButton.innerHTML = "Done";
      doneButton.classList.add("done-btn");
      doneButton.setAttribute("type", "submit")
      todo.appendChild(doneButton);
      // append to todoList
      todoList.appendChild(todo);
    }
  }
  render()
  
  // export for jest 🃏
  document.filterTodos = filterTodos;
  document.createObject = createObject;
  document.addTodo = addTodo;
  document.done = done;
  document.render = render;
  
  