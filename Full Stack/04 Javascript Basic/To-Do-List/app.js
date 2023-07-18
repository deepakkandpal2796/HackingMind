'use strict'
//Gettig object from HTML
const displayDate = document.getElementById('date');
const addNewTask = document.querySelector('.add-new-task');
const addtask = document.querySelector('.add-new-task');
// const addTaskButton = document.querySelector('#add-task');
const alltasks = document.querySelector('.tasks'); //append all the divs in here 

// Display Date 
const date = new Date();
let day = date.getDate();
let month = date.getMonth()+1; //get month start with indexing 0 thats why we have added 1
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;
displayDate.innerHTML=currentDate;

let counter = 0;
//click add task HTML
/* <div class="existing-task">
                    <div class="display-task">
                        <h2 class="task-title">This is the first task</h2>
                        <p class="task-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime amet aut, recusandae non dolorem eum suscipit sequi assumenda, tempora quos, vero magnam vitae magni dolores molestias exercitationem quibusdam perspiciatis. </p>
                    </div>
                    <div class="display-buttons">
                        <button id="edit" class="button">Edit</button>
                        <button id="delete" class="button">Delete</button>
                    </div>
                </div> */
/* <div class="creating-task">
                    
                    <div class="task-description">
                        <input type="text" class="title" placeholder="Title...">
                        <input type="text" placeholder="Enter new Task..." class="task"/>
                    </div>
                     
                    <div class="submit-buttons">
                        <button id="add-task" class="button">Add Task</button>
                        <button id="cancel-task" class="button">Cancel</button>
                    </div>
    </div>  */


const clickToAddTask = () => {
    counter++;
    // creating 'Creating-task' div
    const creatingTaskDiv = document.createElement('div');
    creatingTaskDiv.setAttribute('class', 'creating-task');
    creatingTaskDiv.setAttribute('data-counter', counter);
    //creating 'Task Discription' div 
    const taskDescription = document.createElement('div');
    taskDescription.setAttribute('class','task-description');

    // creating submit-Buttons div 
    const submitButtons = document.createElement('div');
    submitButtons.setAttribute('class','submit-buttons');
    //you can also do that this way dont write set attribute function 
    //Title
    const inputTitle = document.createElement('input');
    inputTitle.type='text';
    inputTitle.placeholder ='Title...' ;
    inputTitle.className = 'title';
    //Task
    const inputTask = document.createElement('input');
    inputTask.type='text';
    inputTask.placeholder ='Enter new Task...' ;
    inputTask.className = 'task';

    //create add and cancel child buttons
    const addButton = document.createElement('div');
    addButton.id = 'add-task';
    addButton.className = 'button';
    addButton.setAttribute('data-counter', counter);
    addButton.innerHTML = 'Add Task';
    addButton.addEventListener('click', addTaskToDisplay);
    const cancelButton = document.createElement('div');
    cancelButton.id = 'cancel-task';
    cancelButton.className = 'button';
    cancelButton.setAttribute('data-counter', counter);
    cancelButton.innerHTML = 'Cancel';
    // cancelButton.addEventListener('click', clickToCancel);
    //append childs for task description 
    taskDescription.appendChild(inputTitle);
    taskDescription.appendChild(inputTask);
    creatingTaskDiv.appendChild(taskDescription);
    alltasks.appendChild(creatingTaskDiv);
    submitButtons.appendChild(addButton);
    submitButtons.appendChild(cancelButton);
    creatingTaskDiv.appendChild(submitButtons)

}


const addTaskToDisplay = () => {
    const title = document.querySelector('.title').value
    const taskDescription = document.querySelector('.task').value
    // const counter = document.getElementById('add-task');
    // const currentCount = counter.getAttribute('data-counter');
    // console.log(`This is the current count : ${currentCount}`);
    //Existing Task
    const creatingTaskDiv = document.createElement('div');
    creatingTaskDiv.setAttribute('class', 'existing-task');
    creatingTaskDiv.setAttribute('data-counter', counter);
    //Display task 
    const displayTaskDiv = document.createElement('div');
    displayTaskDiv.setAttribute('class', 'display-task');
    //task title 
    const titleTaskDisplay = document.createElement('h2');
    titleTaskDisplay.setAttribute('class', 'task-title');
    titleTaskDisplay.innerText = `${title}`;
    //task content
    const contentDisplay = document.createElement('p');
    contentDisplay.setAttribute('class', 'task-content')
    contentDisplay.innerHTML = `${taskDescription}`;
    //Display button 
    const displayButton = document.createElement('div');
    displayButton.setAttribute('class', 'display-buttons') 
    //Edit button
    const editButton = document.createElement('button');
    editButton.id = 'edit';
    editButton.className = 'button';
    editButton.setAttribute('data-counter', counter);
    editButton.innerHTML = 'EDIT';
    // editButton.addEventListener('click', clickToEdit);
    //Delete button
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete';
    deleteButton.className = 'button';
    deleteButton.setAttribute('data-counter', counter);
    deleteButton.innerHTML = 'DELETE';
    // deleteButton.addEventListener('click',clickToDelete);
    
    // Remove add screen 
    const creatingTask = document.querySelector('.creating-task');
    creatingTask.remove();
    //Appending element
    displayTaskDiv.appendChild(titleTaskDisplay);
    displayTaskDiv.appendChild(contentDisplay);
    creatingTaskDiv.appendChild(displayTaskDiv);
    displayButton.appendChild(editButton);
    displayButton.appendChild(deleteButton);
    creatingTaskDiv.appendChild(displayButton);
    alltasks.appendChild(creatingTaskDiv);
    
}
// const clickToCancel = () => {
//     const creatingTask = document.querySelector('.creating-task');
//     creatingTask.remove();
// }

// const clickToDelete = () => {
//     const existingTask = document.querySelector('.existing-task');
//     existingTask.remove();
// }

// const clickToEdit = () => {
//     const title = document.querySelector('.task-title').innerHTML;
//     const task = document.querySelector('.task-content').innerHTML;
//     const existingTask = document.querySelector('.existing-task');
//     existingTask.remove();
//     clickToAddTask();
// }
//Events 
addtask.addEventListener('click', clickToAddTask);



