export const modalEditTask = (item) => {

    return `<div id="closeModal" class="modalDialog edit-task-modal">
    <div>
      <a id="close-modal-edit-task" class="close">X</a>
      <h2>Edite sua Atividade!</h2>
      <form class="task-card flex">
        <input
          id="edit-task-title"
          type="text"
        />
        <input id="edit-task-date" type="date"/>
  
        <select id="edit-task-tag">
          <option id="altissimo">Altíssimo</option>
          <option id="alta">Alta</option>
          <option id="normal">Normal</option>
          <option id="baixa">Baixa</option>
        </select>
        <button id="btn-update-task" type="submit">
          Editar
        </button>
      </form>
    </div>
  </div>;`;
};

export default modalEditTask;