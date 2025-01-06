import { useState, useEffect } from "react";
import TaskForm from './TaskForm'
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import TaskItem from './TaskItem';
import api from '../Services/api'
import { toast } from "react-toastify";
import Navbar from "./Navbar";


const TaskManagment = ({darkMode}) => {

   // for manage duedate
  let [dueDate, setDueDate] = useState("");

 // state for mangaging the tasks filter toggeling etc
 const [tasks, setTasks] = useState([]);
 

 // fetching the Data Form the Servers start --->
 useEffect(() => {
   api
     .get("/tasks")
     .then(({ data }) => setTasks(data))
     .catch((err) => toast.error("error in fecthing the data"));

   // cleanup phase
   return () => {};
 }, [tasks]); //reterive the data only once from the server and at newtask updates at initial Load
 // fetching the Data Form the Servers end <---


 // function to create The Task start --->
 let addTask = (text, priority,dueDate) => {
   console.log(text, priority);
   let newtask = { text, completed: false, priority,dueDate };
   api
     .post("/tasks", newtask)
     .then(({ data }) => {
       setTasks([...tasks, data]);
       toast.success("newTask added to ur List😁");
     })
     .catch((err) => toast.error("failed to add the Newtask"));
 };
// function to create The Task end <---

  

 // function to edit The task start --->
 let editTask = (id,text,priority,dueDate) => {
    console.log(id,text,priority,dueDate)
    const editedTask={ text, completed: false, priority,dueDate };
    api.put(`/tasks/${id}`,editedTask)
    .then(({ data }) => {
     setTasks(tasks.map(task=>task.id===id?data:task))
     toast.success("Edited task in ur List😁");
    })
    .catch((err) => toast.error("failed to edit the Newtask"));
 };
  // function to edit The task ends <---


 // function to delete the task start --->
 let deleteTask = (id) => {
   console.log(id)
   api.delete(`/tasks/${id}`)
   .then(() => {
     setTasks(tasks.filter(task=>task.id!==id));
     toast.success("delted task in ur List😁");
    })
    .catch((err) => toast.error("failed to delete the task"));

   
 };
 // function to delete the task end  <---


 // for checkbox togglecheckbox start --->
 function toggleTaskCompletion(id,completed)
 {
  api.patch(`/tasks/${id}`,{completed:!completed})
  .then(({data})=>{
    setTasks(tasks.map(task =>(task.id === id?data : task)));
  })
  .catch(()=>toast.error("failed to update task status."))
 }  
// for checkbox togglecheckbox end <---


// filter and search task logic start ---->
const [filterStatus, setFilterStatus] = useState("All"); // Current filter
const [filteredTasks, setFilteredTasks] = useState([]);
const [search, setSearch] = useState(""); 
// functions to filterTask and search
const filterTasks = () => {
  const updatedTasks = tasks.filter((task) => {
   const matchSearch =  task.text.toLowerCase().includes(search.toLowerCase())
  
    if (filterStatus === "All") return matchSearch // Show all tasks
    if (filterStatus === "Completed") return matchSearch && task.completed; // Show completed tasks
    if (filterStatus === "Pending") return  matchSearch && !task.completed; // Show pending tasks
    return matchSearch
  });
  setFilteredTasks(updatedTasks);
};

// refresh the value 
useEffect(() => {
  filterTasks();
}, [tasks, filterStatus,search]);

// use for handel the status of task
const handleFilterChange = (status) => {
  setFilterStatus(status);
};

const handleSearch = (searchQuery) => setSearch(searchQuery);
// filter task logic end <---- 

  return (
  <div className={darkMode?"dark-mode" : "light-mode"}>
    <div>
    <div className="container mb-2 p-2 ">
    {/* Search Functionality start */}
    <div className="search-functionality ">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6 col-lg-8">
          <SearchBar onSearch={handleSearch}/>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4">
          <div>
          <TaskFilter
          handleFilterChange = {handleFilterChange}
          />
          </div>
        </div>
      </div>
    </div>
    {/* search functionality end */}

    {/* taskForm start */}
    <TaskForm 
    onaddTask={addTask}
    dueDate = {dueDate}
    setDueDate = {setDueDate} />
    {/* TaskForm end */}


    {/* displaying the Tasks fetched From Database and tasks added or edited or filtered */}
    <ul className="list-group ul-bg p-3">
      {filteredTasks.map((task) => (
      <TaskItem
      key={task.id}
      task={task}
      oneditTask={editTask}
      ondeleteTask={deleteTask}
      toggleTask={toggleTaskCompletion}
      dueDate={dueDate}
      filterStatus = {filterStatus}
      />
      ))}
      
    </ul>
     {/* Tasks fetched end */}
  </div>
  </div>
  </div>
  )
}

 
export default TaskManagment
