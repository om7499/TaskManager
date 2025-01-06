import{ useState,useEffect } from 'react'

const TaskItem = ({ task,oneditTask,ondeleteTask,toggleTask,dueDate,filterStatus,}) => {
  
  let [isNewtask , setNewtask] = useState(false)
  

  const [isEditable, setIsEdiTable] = useState(false);
  let [oldtask, setOldTask] = useState(task.text);
  let [priority, setPriority] = useState(task.priority);
  const [isFocused, setIsFocused] = useState(false); // State to track input focus
 
  function handlesave(){
    oneditTask(task.id,oldtask,priority,dueDate)
    setIsEdiTable(false)
  }
  

  return (
    <div >
      <li className={`list-group-item p-2 border border-secondary my-2 `}  >
        {isEditable ? (
          <>
            <div className="row ">
              {/* adding items */}
              <div className="col-sm-6 col-md-8 col-lg-8">
                <input
                  type="text"
                  className={`form-control ${isFocused ? 'focused' : ''}`} // Apply focused class
                  placeholder="add items"
                  value={oldtask} // attaching the Form Value
                  onChange={(e) => setOldTask(e.target.value)}
                  onClick={() => setIsFocused(true)} // Focus event
                  
                />
              </div>
              {/* periority-medium ,high,low */}
              <div className="col-sm-3 col-md-2 col-lg-2">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                  <option value="High">High</option>
                </select>
              </div>
              {/* add button */}
              <div className="col-sm-3 col-md-2 col-lg-2">
                <button className="btn btn-success" onClick={()=>handlesave()}>Save</button>
                <button className="btn btn-danger" onClick={()=>setIsEdiTable(false)}>cancel</button>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className='row border-b'> 
          <p className='col-6 text-success'>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : dueDate}</p>
          <p className="col-6 text-end fs-5 text-success py-0 ">{task.priority}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>{task.text}</p>
            {/* container for edit and delete functionlaities */}
            <div className="edit-feature">
               <input
                type="checkbox"
                style={{ transform: "scale(1.5)" }}
                checked={task.completed}
                onChange={() => toggleTask(task.id, task.completed)}
                />
             
              <button className="btn btn-outline-success mx-1 rounded" onClick={()=>setIsEdiTable(true)}> ✒</button>
              <button className="btn btn-outline-danger rounded" onClick={()=>ondeleteTask(task.id)}>⛔</button>
            </div>
          </div>
          </>
        )}
      </li>
    </div>
  )
}

export default TaskItem

