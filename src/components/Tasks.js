import TaskItem from "./TaskItem";

export default function Tasks({ tasks, deleteTask, updateTask, removeCheck }) {
  return (
    <>
      <ul className="list-group my-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-primary  my-3"
        onClick={() => removeCheck()}
      >
        remove check
      </button>
    </>
  );
}
