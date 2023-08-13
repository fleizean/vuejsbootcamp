const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBttn");
const todoList = document.querySelector("#todoList")

addBtn.addEventListener("click", () => {
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
})