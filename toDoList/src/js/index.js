let allTask = [];
let finishTask = [];
let todoTask = [];

import Task from './Task.js';

const addTask = document.querySelector(".btn-new-task");
const closeModal = document.querySelector(".close");

const modal = document.querySelector(".modalDialog");
const taskTitle = document.querySelector("#task-title");
const taskDate = document.querySelector("#task-date");
const taskTag = document.querySelector("#task-tag");
const taskDescription = document.querySelector("#task-description");
const btnTaskCreator = document.querySelector("#btn-create-task");

const taskSection = document.querySelector("#task-container");

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const resetValue = () => {
  taskTitle.value = "";
  taskDate.value = "";
  taskTag.value = "";
  taskDescription.value = "";
};

const clickAddNewTask = addTask.addEventListener("click", () => {
  modal.id = "";
  resetValue();
});

const clickCloseModal = closeModal.addEventListener("click", () => {
  modal.id = "closeModal";
});

const verifyBoard = () => {
  if (allTask.length == 0) {
    taskSection.classList.add("closeList");
  } else {
    taskSection.classList.remove("closeList");
    taskSection.classList.add("container");
    taskSection.classList.add("flex");
    taskSection.classList.add("task-container");
  }
};

verifyBoard();
const createBoard = (title, tag, due, idTask) => {
  const cardTask = document.createElement("div");
  cardTask.classList.add("task");
  cardTask.id = idTask;

  const CardTitle = document.createElement("h3");
  CardTitle.innerText = title.value;

  const CardTag = document.createElement("p");
  CardTag.classList.add("tag");
  CardTag.innerText = tag.value;

  const CardDate = document.createElement("p");
  CardDate.classList.add("due-date");
  CardDate.innerText = due.value;

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("disable-button");
  doneBtn.classList.add("done-button");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("disable-button");
  editBtn.classList.add("edit-button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-button");
  cancelBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  cardTask.appendChild(CardTitle);
  cardTask.appendChild(CardTag);
  cardTask.appendChild(CardDate);
  cardTask.appendChild(doneBtn);
  cardTask.appendChild(editBtn);
  cardTask.appendChild(cancelBtn);
  taskSection.appendChild(cardTask);
};

const filledTask = (title, task, tag) => {
  if (title.value && task.value && tag.value) return true;
};

const creatNewTask = btnTaskCreator.addEventListener("click", (e) => {
  e.preventDefault();
  const idTask = makeid(10);
  const userTask = new Task(
    taskTitle.value,
    taskDate.value,
    taskTag.value,
    taskDescription.value,
    idTask
  );

  const completeTask = filledTask(taskTitle, taskDate, taskTag);

  if (completeTask) {
    allTask.push(userTask);
    createBoard(taskTitle, taskTag, taskDate, idTask);
    verifyBoard();
    resetValue();
  } else {
    alert("Preencha a tarefa!");
  }
});

document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const parentElement = targetElement.closest("div");


  if (targetElement.classList.contains("done-button")) {
    parentElement.classList.toggle("done");
  }

  if (targetElement.classList.contains("cancel-button")) {
    const id = parentElement.id;
    allTask = allTask.filter((item) => item.idTask !== id);
    parentElement.remove()
    verifyBoard();
  }
});
