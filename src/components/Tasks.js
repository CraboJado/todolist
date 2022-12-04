import TaskItem from "./TaskItem";

export default function Tasks({ tasks , deleteTask }) {

  return (
    <>
      <ul className="list-group my-4">
        {tasks.map( task => <TaskItem key = {task.id} task = {task} deleteTask ={deleteTask}/>)}
      </ul>
      <button type="button" className="btn btn-primary  my-3">
        remove check
      </button>
    </>
  );
}
