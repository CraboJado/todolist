import React, { useState } from "react";

export default function TaskItem({ task, deleteTask, updateTask }) { 

  const [ editable, setEditable ] = useState(false)

  const handleDelet = () => {
    deleteTask(task.id);
  };

  const handleUpdate = (e) => {
    const newTask = {
      ...task,
      content: e.target.value,
    };
    updateTask(newTask, task.id);
  };

  const handleChange = (e) => {
    const newTask = {
      ...task,
      isDone: e.target.checked
    }
 
    console.log(newTask)
  }

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between ps-0">
      <div className="col-1 text-center">
        <input className="form-check-input" type="checkbox" value=""  onChange = {handleChange}/>
      </div>
      <div className="col-5 flex-grow-1 me-2">
        {editable ? (
          <input
            type="text"
            className="form-control"
            value={task.content}
            onChange={handleUpdate}
          />
        ) : (
          <p className="m-0 ">{task.content}</p>
        )}
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={(e) => {
            // e.target.blur()
            setEditable(!editable)
            }}
        >
          {!editable ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check2-square"
              viewBox="0 0 16 16"
            >
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
          )}
        </button>

        <button type="button" className="btn btn-danger" onClick={handleDelet}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </li>
  );
}
