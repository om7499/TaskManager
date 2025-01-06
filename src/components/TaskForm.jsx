import {useState} from 'react'

const TaskForm = ({setDueDate,dueDate,onaddTask}) => {
  // usestate for newStste and Priority
  let [newtask,setNewTask]=useState('')
  let [priority,setPriority]=useState('')
  

  // function to Handle the Task  start ---- >
  function handleTask(){
    if(newtask.trim()!==""){
      onaddTask(newtask,priority)
      setNewTask(newtask)
      setPriority(priority)
      setDueDate(dueDate); // Reset after submission
    }
  }
  // function to Handle the Task end <---- 

  
  return (
    <div className='container Task-form-container my-2'>
      {/*Task from start  */}
      <div className="row">

        {/* adding row */}
        <div className="col-sm-4 col-md-4 col-lg-6">
          <input type="text" 
           className="form-control "
           placeholder="add items"
           value={newtask} // attaching the Form Value
           onChange={(e)=>setNewTask(e.target.value)}
           />
           </div>

         {/* priority-medium ,high,low */}
         <div className="col-sm-3 col-md-3 col-lg-2">
          <select className="form-select text-white " 
            style={{background:"#00acc1 "}}
            aria-label="Default select example" 
            value={priority}   
            onChange={(e)=>setPriority(e.target.value)} 
            >
            <option value="Medium">Medium</option>
            <option value="Low" >Low</option>
            <option value="High" >High</option>
          </select>
        </div>
        
        {/* input fild for duedate */}
        <div className="col-sm-2 col-md-2 col-lg-2">
        <input
          style={{background:"#00acc1 "}}
          type="date"
          className="form-control text-white "
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        </div>

       {/* add button */}
       <div className="col-sm-3 col-md-3 col-lg-2">
          <button className="btn btn-success" onClick={()=>handleTask()}>addTask</button>
        </div>
        </div>
     
       {/*Task from end  */}        
    </div>
  )
}

export default TaskForm
