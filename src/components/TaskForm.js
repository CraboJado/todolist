import React, { useState } from 'react'


export default function TaskForm({ addTask }) {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (e.target.task.value === "") {
        return setError(true);
    }

    const newTask = {
      id: crypto.randomUUID(),
      content: e.target.task.value,
      createTime: new Date().toLocaleDateString(),
      editable: false,
      isDone: false
    }
    addTask(newTask);
    e.target.reset();
  }
  return (
    <>
      <form className="gap-2 my-3 input-group" onSubmit={handleSubmit}>
        <input name="task" className="form-control" />
        <button type="submit" className="btn btn-outline-success" > + </button>
      </form>
      {error &&
        <div className="modal-header" >
          <h1 className="modal-title fs-5 text-danger">Please enter a task </h1>
          <button type="button" className="btn-close " onClick={() => setError(false)} aria-label="Close"></button>
        </div>
        //   <div className= "modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
        //     <div className="modal-dialog">
        //       <div className="modal-content">
        //           <div className="modal-header">
        //             <h1 className="modal-title fs-5" id="exampleModalLabel">Please enter a task </h1>
        //             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //           </div>
        //           <div className="modal-footer">
        //             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //           </div>
        //       </div>
        //     </div>
        // </div>
      }
    </>
  )
}
