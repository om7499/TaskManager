
 Backend-Url : http://localhost:5000/tasks

To run backend server : json-server --watch db.json --port 5000 
To run frontend server : npm run dev

Application flow
       
TaskForm(1)   
   |
TaskItem(2)    
   |
TaskManager(3)
   |
TaskFilter(4)
   |
SearchBar(5)
   |
Toast Notification(5)     

