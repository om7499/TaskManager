import React from 'react'

const TaskFilter = ({handleFilterChange}) => {


  return (
    <div className='container task-filter-container my-2'>
       <div className='filter-btns'>
       <button className='btn btn-outline-secondary p-3 ' onClick={()=>handleFilterChange("All")}>All</button>
       <button className='btn btn-outline-success p-3 m-1' onClick={()=>handleFilterChange("Completed")}>Completed</button>
       <button className='btn btn-outline-danger p-3' onClick={()=>handleFilterChange("Pending")}>Pending</button>
       </div>

    </div>
  )
}

export default TaskFilter
