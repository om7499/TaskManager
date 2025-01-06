
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

Component Breakdown
1. TaskForm
Purpose: Handles task creation. Collects task text and priority from the user.
Data Flow:
The TaskForm component takes the new task details (text and priority) from user input and calls the onAddTask function received via props.
This onAddTask function, defined in TaskManagement, is responsible for adding the task to the API and updating the task list.


Here's a detailed explanation of your project, component by component, how data flows between them, and some additional features you can implement to expand your skills as an intermediate beginner.

Component Breakdown
1. TaskForm
Purpose: Handles task creation. Collects task text and priority from the user.
Data Flow:
The TaskForm component takes the new task details (text and priority) from user input and calls the onAddTask function received via props.
This onAddTask function, defined in TaskManagement, is responsible for adding the task to the API and updating the task list.


2. TaskItem
Purpose: Represents each task, with options to edit and delete.
Data Flow:
The task prop receives task details like text, completed, and priority.
The onEditTask and onDeleteTask functions are passed as props, allowing task updates or deletions in the API and state.
Key Actions:
On editing, calls onEditTask with the updated id, text, and priority.
On deleting, calls onDeleteTask with the id of the task to be removed.


Here's a detailed explanation of your project, component by component, how data flows between them, and some additional features you can implement to expand your skills as an intermediate beginner.

Component Breakdown
1. TaskForm
Purpose: Handles task creation. Collects task text and priority from the user.
Data Flow:
The TaskForm component takes the new task details (text and priority) from user input and calls the onAddTask function received via props.
This onAddTask function, defined in TaskManagement, is responsible for adding the task to the API and updating the task list.
2. TaskItem
Purpose: Represents each task, with options to edit and delete.
Data Flow:
The task prop receives task details like text, completed, and priority.
The onEditTask and onDeleteTask functions are passed as props, allowing task updates or deletions in the API and state.
Key Actions:
On editing, calls onEditTask with the updated id, text, and priority.
On deleting, calls onDeleteTask with the id of the task to be removed.

3. TaskManager
Purpose: Central hub that manages state, API calls, and interactions between components.
Data Flow:
State Management: Maintains the tasks array using useState, which contains the list of tasks fetched from db.json via the API.
API Integration: Handles API calls for creating, editing, and deleting tasks using axios.
Props Management:
Passes onAddTask, onEditTask, and onDeleteTask functions to TaskForm and TaskItem.
Passes tasks state for rendering task items and managing interactions.

4. SearchBar
Purpose: Allows users to search tasks by their text.
Data Flow:
Accepts onSearch as a prop,