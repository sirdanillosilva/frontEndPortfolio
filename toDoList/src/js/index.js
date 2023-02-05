let allTask = baixarLista();
let finishTask = [];
let todoTask = [];

import { Task } from "./Task.js";
import { modalEditTask } from "./components/modalEditTask.js";

const btnAddNewTask = document.querySelector("#btn-add-task");
const btnCloseModalAddNewTask = document.querySelector("#close-modal-add-task");

const modalAddTask = document.querySelector(".add-task-modal");
const taskTitle = document.querySelector("#task-title");
const taskDate = document.querySelector("#task-date");
const taskTag = document.querySelector("#task-tag");
const taskDescription = document.querySelector("#task-description");
const btnTaskCreator = document.querySelector("#btn-create-task");

const body = document.querySelector("body");
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
};

const clickAddNewTask = btnAddNewTask.addEventListener("click", () => {
  modalAddTask.id = "";
  resetValue();
});

const clickCloseAddTaskModal = btnCloseModalAddNewTask.addEventListener(
  "click",
  () => {
    modalAddTask.id = "closeModal";
  }
);

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

const createBoard = (item) => {
  const cardTask = document.createElement("div");
  cardTask.classList.add("task");
  cardTask.id = `item-${item.idTask}`;

  const CardTitle = document.createElement("h3");
  CardTitle.innerText = item.title;

  const CardTag = document.createElement("p");
  CardTag.classList.add("tag");
  CardTag.innerText = item.tag;

  const CardDate = document.createElement("p");
  CardDate.classList.add("due-date");
  CardDate.innerText = item.date;

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("disable-button");
  doneBtn.classList.add("done-button");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  doneBtn.addEventListener("click", function (e) {
    terminarAtividade(item);
  });

  const editBtn = document.createElement("button");
  editBtn.classList.add("disable-button");
  editBtn.classList.add("edit-button");
  editBtn.classList.add("hard-disable-button");
  editBtn.id = "btn-edit-task";
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.addEventListener("click", () => {
    editarAtividade(item);
  });
  editBtn.addEventListener("click", function (e) {});

  const botaoExcluirTask = document.createElement("button");
  botaoExcluirTask.classList.add("cancel-button");
  botaoExcluirTask.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  botaoExcluirTask.addEventListener("click", function (e) {
    excluirItemLista(item.idTask);
  });

  cardTask.appendChild(CardTitle);
  cardTask.appendChild(CardTag);
  cardTask.appendChild(CardDate);
  cardTask.appendChild(doneBtn);
  cardTask.appendChild(editBtn);
  cardTask.appendChild(botaoExcluirTask);
  taskSection.appendChild(cardTask);
};

const filledTask = (item) => {
  if (item.title !== "" && item.date !== "" && item.tag !== "") return true;
};

const creatNewTask = btnTaskCreator.addEventListener("click", (e) => {
  e.preventDefault();
  const idTask = makeid(10);
  const userTask = new Task(
    taskTitle.value,
    taskDate.value,
    taskTag.value,
    idTask
  );
  const completeTask = filledTask(userTask);

  if (completeTask) {
    allTask.push(userTask);
    createBoard(userTask);
    verifyBoard();
    resetValue();
    salvarLista();
  } else {
    alert("Preencha a tarefa!");
  }
});

function terminarAtividade(item) {
  const itemFinalizado = document.querySelector(`#item-${item.idTask}`);
  itemFinalizado.classList.toggle("done");

  allTask.map((task) => {
    if (task.idTask == item.idTask) {
      if (task.done === false) {
        task.done = true;
      } else {
        task.done = false;
      }
    }
  });
  salvarLista();
}

function excluirItemLista(id) {
  allTask = allTask.filter((item) => {
    return item.idTask !== id;
  });

  const itemRemovido = document.querySelector(`#item-${id}`);
  itemRemovido.remove();
  salvarLista();
  verifyBoard();
}

function editarAtividade(item) {
  const modalEdit = document.createElement("section");
  modalEdit.innerHTML = modalEditTask(item);
  body.appendChild(modalEdit);

  const btnEditTask = document.querySelector("#btn-edit-task");
  const btnCloseModalEditNewTask = document.querySelector(
    "#close-modal-edit-task"
  );

  const modalUpdateTask = document.querySelector(".edit-task-modal");
  const UpdatedTaskTitle = document.querySelector("#edit-task-title");
  const UpdatedTaskDate = document.querySelector("#edit-task-date");
  const UpdatedTaskTag = document.querySelector("#edit-task-tag");
  const btnUpdateTask = document.querySelector("#btn-update-task");
  const btnCloseModalAddEditTask = document.querySelector(
    "#close-modal-edit-task"
  );
  const tagAltissimo = document.querySelector("#altissimo");
  const tagAlta = document.querySelector("#alta");
  const tagNormal = document.querySelector("#normal");
  const tagBaixa = document.querySelector("#baixa");

  modalUpdateTask.id = "";

  UpdatedTaskTitle.setAttribute("value", item.title);
  UpdatedTaskDate.setAttribute("value", item.date);

  console.log(item.tag);
  if (item.tag == "Altíssimo") {
    console.log("1");
    console.log(item.tag);
    tagAltissimo.setAttribute("selected", item.tag);
  }
  if (item.tag == "Alta") {
    console.log("2");
    console.log(item.tag);
    tagAlta.setAttribute("selected", item.tag);
  }
  if (item.tag == "Normal") {
    console.log("3");
    console.log(item.tag);
    tagNormal.setAttribute("selected", item.tag);
  }
  if (item.tag == "Baixa") {
    console.log("4");
    console.log(item.tag);
    tagBaixa.setAttribute("selected", item.tag);
  }

  btnUpdateTask.addEventListener("click", (e) => {
    allTask.map((task) => {
      if (task.idTask == item.idTask) {
        if (
          UpdatedTaskTitle.value !== "" &&
          UpdatedTaskDate.value !== "" &&
          UpdatedTaskTag.value !== ""
        ) {
          task.title = UpdatedTaskTitle.value;
          task.date = UpdatedTaskDate.value;
          task.tag = UpdatedTaskTag.value;
        } else {
          alert("Preencha a atividade!");
        }
      }
    });
    salvarLista();
    setTimeout(function () {
      window.location.reload();
    });
  });

  const clickCloseEditTaskModal = btnCloseModalAddEditTask.addEventListener(
    "click",
    () => {
      modalUpdateTask.id = "closeModal";
    }
  );

  // location.reload()
}

function salvarLista() {
  let localAllTask = JSON.stringify(allTask);
  localStorage.setItem("lista", localAllTask);
}

function baixarLista() {
  let listaString = localStorage.getItem("lista");
  return JSON.parse(listaString) || [];
}

const iniciarLista = (e) => {
  allTask.map((item) => createBoard(item));
  allTask.map((item) => {
    if (item.done === true) {
      const itemFinalizado = document.querySelector(`#item-${item.idTask}`);
      itemFinalizado.classList.add("done");
      console.log(item);
    }
  });
};
iniciarLista();
