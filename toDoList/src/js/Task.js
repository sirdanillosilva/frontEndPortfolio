export class Task {
  title;
  date;
  tag;
  idTask;
  done = false
  constructor(title, date, tag, idTask) {
    this.title = title;
    this.date = date;
    this.tag = tag;
    this.idTask = idTask;
  }
}
export default Task;
